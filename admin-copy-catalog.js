export const COPY_CATALOG = [
  {
    group: "홈 히어로",
    keys: ["hero_title", "hero_desc", "hero_cta_help", "hero_cta_learn"],
  },
  {
    group: "홈 스토리 섹션",
    keys: ["story_h", "story_lead", "story_more"],
  },
  {
    group: "후원 밴드",
    keys: ["sup_h", "sup_p", "sup_cta1", "sup_cta2"],
  },
  {
    group: "공통",
    keys: ["nav_home", "nav_services", "nav_stories", "nav_support", "nav_about", "cta_donate", "foot_note"],
  },
];

export function listCatalogKeys() {
  return COPY_CATALOG.flatMap((entry) => entry.keys);
}
