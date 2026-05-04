import { getUserHomeUrl, siteConfig } from "./site-config.js";

function basePath() {
  const configured = String(siteConfig.userBasePath || "").replace(/\/+$/, "");
  if (!configured) return "";
  return window.location.pathname.startsWith(`${configured}/`) ? configured : "";
}

function userHomeUrl() {
  const base = basePath();
  return `${base}/index.html`;
}

export function getStoriesPageUrl() {
  return `${basePath()}/stories.html`;
}

export function hydrateSectionLinks() {
  const homeUrl = userHomeUrl();
  const storiesUrl = getStoriesPageUrl();
  const map = {
    linkHomeCampaigns: homeUrl,
    linkHomeCopy: homeUrl,
    linkHomeStoryPreview: homeUrl,
    linkStoriesPage: storiesUrl,
  };

  Object.entries(map).forEach(([id, href]) => {
    const anchor = document.getElementById(id);
    if (!anchor) return;
    anchor.href = href;
  });
}
