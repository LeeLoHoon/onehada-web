import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { getDownloadURL, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";
import { FIREBASE_DISABLED, getFirebaseServices, isFirebaseConfigured } from "./firebase-init.js";
import { getAdminUrl, isOnAdminUrl } from "./site-config.js";
import { COPY_CATALOG } from "./admin-copy-catalog.js";
import { renderEntityPreviewCard, renderHomeStoryPreview } from "./admin-preview.js";
import { hydrateSectionLinks } from "./admin-sections.js";

const MAX_IMAGE_BYTES = 5 * 1024 * 1024;
const dbDisabledHint = document.getElementById("dbDisabledHint");
const firebaseHint = document.getElementById("firebaseHint");
const adminApp = document.getElementById("adminApp");
let db = null;
let storage = null;

function asLocalized(ko, ru, en) {
  return { ko: ko || "", ru: ru || "", en: en || "" };
}

function sanitizeFileName(name) {
  return String(name || "image")
    .replace(/[\u0000-\u001F\u007F]/g, "")
    .replace(/[\\/]/g, "-")
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9._-]/g, "")
    .replace(/-+/g, "-")
    .slice(0, 120) || "image";
}

async function uploadImage(file, bucketPath) {
  if (!file) return "";
  if (!file.type.startsWith("image/")) throw new Error("이미지 파일만 업로드할 수 있습니다.");
  if (file.size > MAX_IMAGE_BYTES) throw new Error("이미지는 5MB를 초과할 수 없습니다.");
  const fileRef = ref(storage, `${bucketPath}/${Date.now()}-${sanitizeFileName(file.name)}`);
  await uploadBytes(fileRef, file, { contentType: file.type });
  return getDownloadURL(fileRef);
}

function ensureImagePreview(form) {
  let preview = form.querySelector("[data-image-preview]");
  if (preview) return preview;

  const fileInput = form.elements.imageFile;
  preview = document.createElement("div");
  preview.className = "image-preview";
  preview.dataset.imagePreview = "";
  preview.appendChild(imagePreviewHint());
  fileInput.closest(".field-inline")?.appendChild(preview);
  return preview;
}

function imagePreviewHint() {
  const hint = document.createElement("span");
  hint.className = "meta";
  hint.textContent = "이미지를 선택하면 저장 전에 여기서 미리 볼 수 있습니다.";
  return hint;
}

function renderImagePreview(form, source, label) {
  const preview = ensureImagePreview(form);
  preview.replaceChildren();
  preview.dataset.tone = "";
  if (!source) {
    preview.appendChild(imagePreviewHint());
    return;
  }
  const img = document.createElement("img");
  img.src = source;
  img.alt = label || "선택한 이미지";
  const caption = document.createElement("span");
  caption.textContent = label || "선택한 이미지";
  preview.append(img, caption);
}

function setUploadStatus(form, message, tone = "") {
  const preview = ensureImagePreview(form);
  preview.dataset.tone = tone;
  let status = preview.querySelector("[data-upload-status]");
  if (!status) {
    status = document.createElement("strong");
    status.dataset.uploadStatus = "";
    preview.appendChild(status);
  }
  status.textContent = message;
}

function numberField(form, name) {
  const n = Number(form.elements[name].value);
  return Number.isFinite(n) ? n : 0;
}

function resetEntityForm(form) {
  form.reset();
  form.elements.id.value = "";
  form.dataset.loadedUpdatedAt = "";
  form.dataset.loadedOrder = "";
}

async function hasOrderConflict(colName, orderValue, currentId) {
  const snap = await getDocs(query(collection(db, colName), orderBy("order", "asc")));
  return snap.docs.some((docSnap) => {
    if (docSnap.id === currentId) return false;
    const data = docSnap.data() || {};
    if (data.archived === true) return false;
    return Number(data.order ?? 0) === Number(orderValue);
  });
}

async function saveEntity(form, colName, listTarget, imageDir) {
  const id = form.elements.id.value.trim();
  const loadedUpdatedAt = Number(form.dataset.loadedUpdatedAt || 0);
  const loadedOrder = Number(form.dataset.loadedOrder || 0);
  const nextOrder = numberField(form, "order");

  if (await hasOrderConflict(colName, nextOrder, id)) {
    if (!window.confirm("동일한 order 값을 가진 문서가 있습니다. 그대로 저장할까요?")) return;
  }

  if (id) {
    const currentSnap = await getDoc(doc(db, colName, id));
    if (!currentSnap.exists()) {
      window.alert("이미 삭제되었거나 존재하지 않는 문서입니다. 목록을 새로고침합니다.");
      await renderEntityList(colName, listTarget, form);
      return;
    }
    const currentUpdatedAt = Number(currentSnap.data()?.updatedAt || 0);
    if (loadedUpdatedAt && currentUpdatedAt && loadedUpdatedAt !== currentUpdatedAt) {
      if (!window.confirm("다른 편집자가 먼저 수정했습니다. 현재 값을 덮어쓸까요?")) return;
    }
    if (loadedOrder && loadedOrder !== nextOrder) form.dataset.loadedOrder = String(nextOrder);
  }

  const file = form.elements.imageFile?.files?.[0] || null;
  if (file) setUploadStatus(form, "이미지 업로드 중...", "loading");
  const uploadedUrl = await uploadImage(file, imageDir);
  if (uploadedUrl) setUploadStatus(form, "업로드 완료. 저장 중...", "success");
  const payload = {
    order: nextOrder,
    published: Boolean(form.elements.published?.checked),
    archived: false,
    tag: asLocalized(form.elements.tagKo.value.trim(), form.elements.tagRu.value.trim(), form.elements.tagEn.value.trim()),
    title: asLocalized(form.elements.titleKo.value.trim(), form.elements.titleRu.value.trim(), form.elements.titleEn.value.trim()),
    description: asLocalized(form.elements.descKo.value.trim(), form.elements.descRu.value.trim(), form.elements.descEn.value.trim()),
    imageUrl: uploadedUrl || form.elements.imageUrl.value.trim(),
    updatedAt: Date.now(),
  };

  if (form.elements.linkUrl) payload.linkUrl = form.elements.linkUrl.value.trim();

  if (id) {
    await updateDoc(doc(db, colName, id), payload);
  } else {
    payload.createdAt = Date.now();
    await addDoc(collection(db, colName), payload);
  }

  resetEntityFormAndPreview(form);
  await renderEntityList(colName, listTarget, form);
}

function fillEntityForm(form, id, data) {
  form.elements.id.value = id;
  form.elements.order.value = data.order ?? 0;
  form.elements.published.checked = Boolean(data.published);
  form.elements.tagKo.value = data.tag?.ko || "";
  form.elements.tagRu.value = data.tag?.ru || "";
  form.elements.tagEn.value = data.tag?.en || "";
  form.elements.titleKo.value = data.title?.ko || "";
  form.elements.titleRu.value = data.title?.ru || "";
  form.elements.titleEn.value = data.title?.en || "";
  form.elements.descKo.value = data.description?.ko || "";
  form.elements.descRu.value = data.description?.ru || "";
  form.elements.descEn.value = data.description?.en || "";
  form.elements.imageUrl.value = data.imageUrl || "";
  renderImagePreview(form, data.imageUrl || "", `${data.title?.ko || "현재"} 이미지`);
  form.dataset.loadedUpdatedAt = String(Number(data.updatedAt || 0));
  form.dataset.loadedOrder = String(Number(data.order || 0));
  if (form.elements.linkUrl) form.elements.linkUrl.value = data.linkUrl || "";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

async function softDeleteEntity(colName, id) {
  await updateDoc(doc(db, colName, id), {
    archived: true,
    published: false,
    archivedAt: Date.now(),
    updatedAt: Date.now(),
  });
}

async function renderEntityList(colName, target, form) {
  const snap = await getDocs(query(collection(db, colName), orderBy("order", "asc")));
  target.innerHTML = "";
  const items = [];

  snap.forEach((docSnap) => {
    const data = docSnap.data() || {};
    if (data.archived === true) return;
    items.push(data);
    const card = document.createElement("div");
    card.innerHTML = renderEntityPreviewCard({ data, id: docSnap.id, type: colName === "stories" ? "story" : "campaign" });
    const root = card.firstElementChild;
    root.querySelector("[data-edit]").addEventListener("click", () => fillEntityForm(form, docSnap.id, data));
    root.querySelector("[data-del]").addEventListener("click", async () => {
      if (!window.confirm("정말 삭제하시겠습니까?")) return;
      await softDeleteEntity(colName, docSnap.id);
      await renderEntityList(colName, target, form);
    });
    target.appendChild(root);
  });

  if (colName === "stories") {
    renderHomeStoryPreview(items, document.getElementById("homeStoryPreview"));
  }
}

function setupCopyCatalog(copyForm) {
  const select = document.getElementById("copyCatalog");
  select.innerHTML = "<option value=''>카탈로그 선택</option>";
  COPY_CATALOG.forEach((group) => {
    const optgroup = document.createElement("optgroup");
    optgroup.label = group.group;
    group.keys.forEach((key) => {
      const option = document.createElement("option");
      option.value = key;
      option.textContent = key;
      optgroup.appendChild(option);
    });
    select.appendChild(optgroup);
  });
  select.addEventListener("change", () => {
    if (!select.value) return;
    copyForm.elements.key.value = select.value;
  });
}

async function saveCopyOverride(form) {
  const key = form.elements.key.value.trim();
  if (!key) return;
  const loadedUpdatedAt = Number(form.dataset.loadedUpdatedAt || 0);
  const currentSnap = await getDoc(doc(db, "copy", key));
  const currentUpdatedAt = Number(currentSnap.data()?.updatedAt || 0);
  if (loadedUpdatedAt && currentUpdatedAt && loadedUpdatedAt !== currentUpdatedAt) {
    if (!window.confirm("다른 편집자가 먼저 수정했습니다. 현재 값을 덮어쓸까요?")) return;
  }

  await setDoc(doc(db, "copy", key), {
    ko: form.elements.ko.value.trim(),
    ru: form.elements.ru.value.trim(),
    en: form.elements.en.value.trim(),
    archived: false,
    updatedAt: Date.now(),
  }, { merge: true });
  form.dataset.loadedUpdatedAt = "";
  await renderCopyList();
}

async function renderCopyList() {
  const copyList = document.getElementById("copyList");
  const copyForm = document.getElementById("copyForm");
  const snap = await getDocs(collection(db, "copy"));
  copyList.innerHTML = "";

  snap.forEach((docSnap) => {
    const data = docSnap.data();
    if (data.archived === true) return;
    const row = document.createElement("div");
    row.className = "row";
    row.innerHTML = `
      <div>
        <strong>${docSnap.id}</strong>
        <div class="meta">ko: ${data.ko || ""}</div>
      </div>
      <div class="actions">
        <button type="button" data-edit="${docSnap.id}">수정</button>
        <button type="button" data-del="${docSnap.id}">삭제</button>
      </div>
    `;
    row.querySelector("[data-edit]").addEventListener("click", () => {
      copyForm.elements.key.value = docSnap.id;
      copyForm.elements.ko.value = data.ko || "";
      copyForm.elements.ru.value = data.ru || "";
      copyForm.elements.en.value = data.en || "";
      copyForm.dataset.loadedUpdatedAt = String(Number(data.updatedAt || 0));
    });
    row.querySelector("[data-del]").addEventListener("click", async () => {
      if (!window.confirm("정말 삭제하시겠습니까?")) return;
      await setDoc(doc(db, "copy", docSnap.id), { archived: true, archivedAt: Date.now(), updatedAt: Date.now() }, { merge: true });
      await renderCopyList();
    });
    copyList.appendChild(row);
  });
}

function bindCrud() {
  const storyForm = document.getElementById("storyForm");
  const storyList = document.getElementById("storyList");
  const campaignForm = document.getElementById("campaignForm");
  const campaignList = document.getElementById("campaignList");
  const copyForm = document.getElementById("copyForm");

  setupCopyCatalog(copyForm);
  setupImagePreview(storyForm);
  setupImagePreview(campaignForm);

  storyForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
      await saveEntity(storyForm, "stories", storyList, "stories");
    } catch (err) {
      setUploadStatus(storyForm, err.message || "Story 저장 중 오류가 발생했습니다.", "error");
      window.alert(err.message || "Story 저장 중 오류가 발생했습니다.");
    }
  });
  document.getElementById("storyReset").addEventListener("click", () => resetEntityFormAndPreview(storyForm));

  campaignForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
      await saveEntity(campaignForm, "campaigns", campaignList, "campaigns");
    } catch (err) {
      setUploadStatus(campaignForm, err.message || "Campaign 저장 중 오류가 발생했습니다.", "error");
      window.alert(err.message || "Campaign 저장 중 오류가 발생했습니다.");
    }
  });
  document.getElementById("campaignReset").addEventListener("click", () => resetEntityFormAndPreview(campaignForm));

  copyForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
      await saveCopyOverride(copyForm);
    } catch (err) {
      window.alert(err.message || "Copy override 저장 중 오류가 발생했습니다.");
    }
  });

  renderEntityList("stories", storyList, storyForm);
  renderEntityList("campaigns", campaignList, campaignForm);
  renderCopyList();
}

function setupImagePreview(form) {
  const fileInput = form.elements.imageFile;
  if (!fileInput) return;
  ensureImagePreview(form);
  fileInput.addEventListener("change", () => {
    const file = fileInput.files?.[0];
    if (!file) {
      renderImagePreview(form, form.elements.imageUrl.value.trim(), "현재 이미지");
      return;
    }
    if (!file.type.startsWith("image/")) {
      setUploadStatus(form, "이미지 파일만 첨부할 수 있습니다.", "error");
      return;
    }
    if (file.size > MAX_IMAGE_BYTES) {
      setUploadStatus(form, "이미지는 5MB를 초과할 수 없습니다.", "error");
      return;
    }
    renderImagePreview(form, URL.createObjectURL(file), `${file.name} (저장 시 업로드)`);
  });
  form.elements.imageUrl?.addEventListener("input", () => {
    if (fileInput.files?.[0]) return;
    renderImagePreview(form, form.elements.imageUrl.value.trim(), "이미지 URL 미리보기");
  });
}

function resetEntityFormAndPreview(form) {
  resetEntityForm(form);
  renderImagePreview(form, "", "");
}

function openAdmin() {
  if (FIREBASE_DISABLED) {
    if (dbDisabledHint) dbDisabledHint.hidden = false;
    firebaseHint.hidden = true;
    adminApp.hidden = true;
    return;
  }

  if (!isFirebaseConfigured()) {
    if (dbDisabledHint) dbDisabledHint.hidden = true;
    firebaseHint.hidden = false;
    adminApp.hidden = true;
    return;
  }

  const services = getFirebaseServices();
  db = services.db;
  storage = services.storage;
  if (!db || !storage) {
    if (dbDisabledHint) dbDisabledHint.hidden = true;
    firebaseHint.hidden = false;
    adminApp.hidden = true;
    return;
  }

  if (dbDisabledHint) dbDisabledHint.hidden = true;
  firebaseHint.hidden = true;
  adminApp.hidden = false;
  hydrateSectionLinks();
  bindCrud();
}

if (!isOnAdminUrl()) {
  console.warn(`Admin page is expected at ${getAdminUrl()}.`);
}
openAdmin();
