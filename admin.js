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
import { getFirebaseServices, isFirebaseConfigured } from "./firebase-init.js";
import { getAdminUrl, isOnAdminUrl } from "./site-config.js";

const MAX_IMAGE_BYTES = 5 * 1024 * 1024;

const firebaseHint = document.getElementById("firebaseHint");
const adminApp = document.getElementById("adminApp");

let db = null;
let storage = null;

function openAdmin() {
  if (!isFirebaseConfigured()) {
    firebaseHint.hidden = false;
    adminApp.hidden = true;
    return;
  }

  const services = getFirebaseServices();
  db = services.db;
  storage = services.storage;

  if (!db || !storage) {
    firebaseHint.hidden = false;
    adminApp.hidden = true;
    return;
  }

  firebaseHint.hidden = true;
  adminApp.hidden = false;
  bindCrud();
}

if (!isOnAdminUrl()) {
  console.warn(`Admin page is expected at ${getAdminUrl()}.`);
}
openAdmin();

function asLocalized(ko, ru, en) {
  return {
    ko: ko || "",
    ru: ru || "",
    en: en || "",
  };
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
  if (!file.type.startsWith("image/")) {
    throw new Error("이미지 파일만 업로드할 수 있습니다.");
  }
  if (file.size > MAX_IMAGE_BYTES) {
    throw new Error("이미지는 5MB를 초과할 수 없습니다.");
  }
  const fileRef = ref(storage, `${bucketPath}/${Date.now()}-${sanitizeFileName(file.name)}`);
  await uploadBytes(fileRef, file);
  return getDownloadURL(fileRef);
}

function boolField(form, name) {
  return Boolean(form.elements[name]?.checked);
}

function numberField(form, name) {
  const n = Number(form.elements[name].value);
  return Number.isFinite(n) ? n : 0;
}

async function saveEntity(form, colName, listTarget, imageDir) {
  const id = form.elements.id.value.trim();
  const loadedUpdatedAt = Number(form.dataset.loadedUpdatedAt || 0);
  const loadedOrder = Number(form.dataset.loadedOrder || 0);
  const nextOrder = numberField(form, "order");

  if (await hasOrderConflict(colName, nextOrder, id)) {
    const proceedDuplicateOrder = window.confirm("동일한 order 값을 가진 문서가 있습니다. 그대로 저장할까요?");
    if (!proceedDuplicateOrder) return;
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
      const proceedConflict = window.confirm("다른 편집자가 먼저 수정했습니다. 현재 값을 덮어쓸까요?");
      if (!proceedConflict) return;
    }
    if (loadedOrder && loadedOrder !== nextOrder) {
      form.dataset.loadedOrder = String(nextOrder);
    }
  }

  const file = form.elements.imageFile?.files?.[0] || null;
  const uploadedUrl = await uploadImage(file, imageDir);
  const imageUrl = uploadedUrl || form.elements.imageUrl.value.trim();

  const payload = {
    order: nextOrder,
    published: boolField(form, "published"),
    archived: false,
    tag: asLocalized(form.elements.tagKo.value.trim(), form.elements.tagRu.value.trim(), form.elements.tagEn.value.trim()),
    title: asLocalized(form.elements.titleKo.value.trim(), form.elements.titleRu.value.trim(), form.elements.titleEn.value.trim()),
    description: asLocalized(form.elements.descKo.value.trim(), form.elements.descRu.value.trim(), form.elements.descEn.value.trim()),
    imageUrl,
    updatedAt: Date.now(),
  };

  if (form.elements.linkUrl) {
    payload.linkUrl = form.elements.linkUrl.value.trim();
  }

  if (id) {
    await updateDoc(doc(db, colName, id), payload);
  } else {
    payload.createdAt = Date.now();
    await addDoc(collection(db, colName), payload);
  }

  form.reset();
  form.elements.id.value = "";
  form.dataset.loadedUpdatedAt = "";
  form.dataset.loadedOrder = "";
  await renderEntityList(colName, listTarget, form);
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

async function renderEntityList(colName, target, form) {
  const q = query(collection(db, colName), orderBy("order", "asc"));
  const snap = await getDocs(q);
  target.innerHTML = "";

  snap.forEach((docSnap) => {
    const data = docSnap.data();
    if (data.archived === true) return;
    const row = document.createElement("div");
    row.className = "row";
    row.innerHTML = `
      <div>
        <strong>${data.title?.ko || "(no title)"}</strong>
        <div class="meta">order: ${data.order ?? 0} · published: ${Boolean(data.published)}</div>
      </div>
      <div class="actions">
        <button type="button" data-edit="${docSnap.id}">수정</button>
        <button type="button" data-del="${docSnap.id}">삭제</button>
      </div>
    `;

    row.querySelector("[data-edit]").addEventListener("click", () => {
      form.elements.id.value = docSnap.id;
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
      form.dataset.loadedUpdatedAt = String(Number(data.updatedAt || 0));
      form.dataset.loadedOrder = String(Number(data.order || 0));
      if (form.elements.linkUrl) {
        form.elements.linkUrl.value = data.linkUrl || "";
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    row.querySelector("[data-del]").addEventListener("click", async () => {
      if (!window.confirm("정말 삭제하시겠습니까?")) return;
      await updateDoc(doc(db, colName, docSnap.id), {
        archived: true,
        published: false,
        archivedAt: Date.now(),
        updatedAt: Date.now(),
      });
      await renderEntityList(colName, target, form);
    });

    target.appendChild(row);
  });
}

async function saveCopyOverride(form) {
  const key = form.elements.key.value.trim();
  if (!key) return;
  const loadedUpdatedAt = Number(form.dataset.loadedUpdatedAt || 0);
  const currentSnap = await getDoc(doc(db, "copy", key));
  const currentUpdatedAt = Number(currentSnap.data()?.updatedAt || 0);
  if (loadedUpdatedAt && currentUpdatedAt && loadedUpdatedAt !== currentUpdatedAt) {
    const proceedConflict = window.confirm("다른 편집자가 먼저 수정했습니다. 현재 값을 덮어쓸까요?");
    if (!proceedConflict) return;
  }

  await setDoc(doc(db, "copy", key), {
    ko: form.elements.ko.value.trim(),
    ru: form.elements.ru.value.trim(),
    en: form.elements.en.value.trim(),
    archived: false,
    updatedAt: Date.now(),
  }, { merge: true });
  form.reset();
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
      await setDoc(doc(db, "copy", docSnap.id), {
        archived: true,
        archivedAt: Date.now(),
        updatedAt: Date.now(),
      }, { merge: true });
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

  storyForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
      await saveEntity(storyForm, "stories", storyList, "stories");
    } catch (err) {
      window.alert(err.message || "Story 저장 중 오류가 발생했습니다.");
    }
  });
  document.getElementById("storyReset").addEventListener("click", () => {
    storyForm.reset();
    storyForm.elements.id.value = "";
    storyForm.dataset.loadedUpdatedAt = "";
    storyForm.dataset.loadedOrder = "";
  });

  campaignForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
      await saveEntity(campaignForm, "campaigns", campaignList, "campaigns");
    } catch (err) {
      window.alert(err.message || "Campaign 저장 중 오류가 발생했습니다.");
    }
  });
  document.getElementById("campaignReset").addEventListener("click", () => {
    campaignForm.reset();
    campaignForm.elements.id.value = "";
    campaignForm.dataset.loadedUpdatedAt = "";
    campaignForm.dataset.loadedOrder = "";
  });

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
