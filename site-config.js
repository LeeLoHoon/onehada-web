const trimTrailingSlash = (value) => String(value || "").replace(/\/+$/, "");

export const siteConfig = {
  userBasePath: "/onehada-web",
  adminSlug: "manage-9c3f",
};

const normalizeBasePath = (basePath) => {
  const trimmed = trimTrailingSlash(basePath);
  return trimmed || "";
};

export function getAdminUrl() {
  const basePath = normalizeBasePath(siteConfig.userBasePath);
  return `${basePath}/${siteConfig.adminSlug}.html`;
}

export function getUserHomeUrl() {
  const basePath = normalizeBasePath(siteConfig.userBasePath);
  return `${basePath}/index.html`;
}

export function isOnAdminUrl(locationLike = window.location) {
  const currentPath = trimTrailingSlash(locationLike?.pathname || "");
  const adminPath = trimTrailingSlash(getAdminUrl());
  const localAdminPath = trimTrailingSlash(`/${siteConfig.adminSlug}.html`);
  return currentPath === adminPath || currentPath === localAdminPath;
}
