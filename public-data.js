import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { getFirebaseServices, isFirebaseConfigured } from "./firebase-init.js";

const state = {
  stories: [],
  campaigns: [],
};

function textByLang(entry, lang) {
  if (!entry || typeof entry !== "object") return "";
  return entry[lang] || entry.ko || entry.en || entry.ru || "";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function currentLang() {
  return document.documentElement.lang || "ko";
}

async function loadCopyOverrides(db) {
  try {
    const snap = await getDocs(collection(db, "copy"));
    const overrides = {};
    snap.forEach((docSnap) => {
      const data = docSnap.data() || {};
      if (data.archived === true) return;
      overrides[docSnap.id] = {
        ko: data.ko || "",
        ru: data.ru || "",
        en: data.en || "",
      };
    });
    window.__copyOverrides = overrides;
    if (typeof window.applyLang === "function") {
      window.applyLang(currentLang());
    }
  } catch {
    window.__copyOverrides = window.__copyOverrides || {};
  }
}

function renderStoryCards(target, stories, isPreview) {
  if (!target || !stories.length) return;
  const lang = currentLang();
  const max = isPreview ? 3 : stories.length;
  const list = stories.slice(0, max);

  target.innerHTML = list
    .map((item, index) => {
      const idx = String(index + 1).padStart(2, "0");
      const thumbClass = index % 3 === 1 ? " cool" : index % 3 === 2 ? " warm" : "";
      const tag = escapeHtml(textByLang(item.tag, lang));
      const title = escapeHtml(textByLang(item.title, lang));
      const body = escapeHtml(textByLang(item.description, lang));
      const img = item.imageUrl ? `<img src="${escapeHtml(item.imageUrl)}" alt="" loading="lazy">` : `STORY · ${idx}`;

      return `
        <article class="story-card">
          <div class="story-thumb${thumbClass}" aria-hidden="true">${img}</div>
          <div class="story-body">
            <span class="story-tag">${tag}</span>
            <h3>${title}</h3>
            <p>${body}</p>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderCampaignTrack(target, campaigns) {
  if (!target || !campaigns.length) return;
  const lang = currentLang();
  const total = campaigns.length;

  target.innerHTML = campaigns
    .map((item, index) => {
      const title = escapeHtml(textByLang(item.title, lang));
      const desc = escapeHtml(textByLang(item.description, lang));
      const tag = escapeHtml(textByLang(item.tag, lang));
      const href = item.linkUrl ? escapeHtml(item.linkUrl) : "#";
      const bg = item.imageUrl
        ? ` style="background-image:linear-gradient(120deg, rgba(20,12,8,.64), rgba(20,12,8,.42)), url('${escapeHtml(item.imageUrl)}'); background-size:cover; background-position:center;"`
        : "";
      return `
        <article class="cmp-slide" role="group" aria-roledescription="slide" aria-label="${index + 1} / ${total}"${bg}>
          <div class="cmp-content">
            <span class="cmp-eyebrow">${tag}</span>
            <h2>${title}</h2>
            <p>${desc}</p>
            <a href="${href}" class="btn">자세히 보기</a>
          </div>
        </article>
      `;
    })
    .join("");
}

async function loadStories(db) {
  const q = query(
    collection(db, "stories"),
    orderBy("order", "asc")
  );
  const snap = await getDocs(q);
  if (snap.empty) return;

  state.stories = snap.docs
    .map((d) => d.data())
    .filter((item) => item.archived !== true && item.published === true);
  renderStories();
}

async function loadCampaigns(db) {
  const q = query(
    collection(db, "campaigns"),
    orderBy("order", "asc"),
    limit(12)
  );
  const snap = await getDocs(q);
  if (snap.empty) return;
  state.campaigns = snap.docs
    .map((d) => d.data())
    .filter((item) => item.archived !== true && item.published === true);
  renderCampaigns();
}

function renderStories() {
  renderStoryCards(document.getElementById("storyPreviewGrid"), state.stories, true);
  renderStoryCards(document.getElementById("storyFullGrid"), state.stories, false);
}

function renderCampaigns() {
  renderCampaignTrack(document.getElementById("cmpTrack"), state.campaigns);
  window.dispatchEvent(new CustomEvent("onehada:campaigns-rendered"));
}

window.addEventListener("onehada:langchange", () => {
  renderStories();
  renderCampaigns();
});

async function run() {
  if (!isFirebaseConfigured()) {
    console.info("[public-data] Firebase disabled or not configured. Using static fallback content.");
    window.__copyOverrides = window.__copyOverrides || {};
    return;
  }

  const { db } = getFirebaseServices();
  if (!db) return;

  await loadCopyOverrides(db);

  try {
    await loadStories(db);
  } catch {
    // keep fallback HTML
  }

  try {
    await loadCampaigns(db);
  } catch {
    // keep fallback HTML
  }
}

run();
