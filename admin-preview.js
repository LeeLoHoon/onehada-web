function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function pickText(localized) {
  return localized?.ko || localized?.en || localized?.ru || "";
}

export function renderEntityPreviewCard({ data, id, type }) {
  const rawTitle = pickText(data.title) || "(no title)";
  const title = escapeHtml(rawTitle);
  const tag = escapeHtml(pickText(data.tag));
  const desc = escapeHtml(pickText(data.description));
  const hiddenBadge = data.published ? "" : '<span class="badge badge-muted">비공개</span>';
  const safeAlt = escapeHtml(`${rawTitle} 이미지`);
  const editAria = escapeHtml(`${rawTitle} 수정`);
  const delAria = escapeHtml(`${rawTitle} 삭제`);
  const thumb = data.imageUrl
    ? `<div class="admin-thumb"><img src="${escapeHtml(data.imageUrl)}" alt="${safeAlt}"></div>`
    : '<div class="admin-thumb placeholder" aria-hidden="true">NO IMAGE</div>';

  return `
    <article class="admin-card ${type}">
      ${thumb}
      <div class="admin-card-body">
        <div class="admin-meta">order ${Number(data.order || 0)} ${hiddenBadge}</div>
        <div class="story-tag">${tag}</div>
        <h3>${title}</h3>
        <p>${desc}</p>
      </div>
      <div class="actions">
        <button type="button" data-edit="${id}" aria-label="${editAria}">수정</button>
        <button type="button" data-del="${id}" aria-label="${delAria}">삭제</button>
      </div>
    </article>
  `;
}

export function renderHomeStoryPreview(stories, target) {
  const top3 = stories
    .filter((item) => item.archived !== true && item.published === true)
    .sort((a, b) => Number(a.order || 0) - Number(b.order || 0))
    .slice(0, 3);

  target.innerHTML = "";
  if (!top3.length) {
    target.innerHTML = "<p class=\"meta\">표시할 published 스토리가 없습니다.</p>";
    return;
  }

  top3.forEach((story) => {
    const storyTitle = pickText(story.title) || "스토리";
    const storyAlt = escapeHtml(`${storyTitle} 이미지`);
    const card = document.createElement("article");
    card.className = "story-card";
    card.innerHTML = `
      <div class="story-thumb${story.imageUrl ? " has-image" : ""}">${story.imageUrl ? `<img src="${escapeHtml(story.imageUrl)}" alt="${storyAlt}">` : '<span aria-hidden="true">STORY</span>'}</div>
      <div class="story-body">
        <div class="story-tag">${escapeHtml(pickText(story.tag))}</div>
        <h3>${escapeHtml(storyTitle)}</h3>
        <p>${escapeHtml(pickText(story.description))}</p>
      </div>
    `;
    target.appendChild(card);
  });
}
