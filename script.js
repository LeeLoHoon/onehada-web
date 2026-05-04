// ============================================================
// i18n dictionary  —  ko / ru / en
// ============================================================
const I18N = {
  ko: {
    /* ---- common ---- */
    skip: "본문으로 건너뛰기",
    brand: "원하다",
    nav_home: "홈", nav_services: "서비스", nav_stories: "스토리",
    nav_support: "후원·참여", nav_about: "단체 소개",
    cta_donate: "후원하기",
    crumb_home: "홈",
    menu_open: "메뉴 열기",
    lang_label: "언어 선택",
    theme_open: "디자인 테마 선택",
    theme_close: "테마 패널 닫기",
    theme_panel_title: "디자인 테마 선택",
    theme_panel_desc: "원하다의 분위기를 비교해보고 결정하세요.",
    theme_terracotta_name: "Terracotta Warmth",
    theme_terracotta_desc: "따뜻한 흙빛과 크림 베이스의 현재 방향.",
    theme_hanji_name: "Hanji Ink",
    theme_hanji_desc: "한지, 먹, 단청의 차분한 한국적 대비.",
    theme_hanbok_name: "Hanbok Pastel",
    theme_hanbok_desc: "한복 담채처럼 부드럽고 밝은 팔레트.",
    theme_sunset_name: "Korean Sunset",
    theme_sunset_desc: "원하다 본가의 금빛 온기를 살린 노을 톤.",
    theme_reunion_name: "Reunion Blue",
    theme_reunion_desc: "통일과 평화를 떠올리는 맑은 청록 계열.",
    theme_cocoa_name: "Cocoa Night",
    theme_cocoa_desc: "차분한 다크 모드와 따뜻한 골드 포인트.",
    foot_about: "한민족 디아스포라가 한국에서 안정적으로 정착할 수 있도록, 실무적 도움으로 잇는 연합단체.",
    foot_quick: "바로가기", foot_contact: "연락", foot_trust: "투명성",
    foot_addr: "서울시 ○○구 ○○로 00",
    foot_report: "연간보고서", foot_finance: "재정 공개", foot_privacy: "개인정보 처리방침",
    foot_note: "본 사이트는 WCAG 2.1 AA 기준을 따릅니다.",

    title_index: "원하다 — 한민족 디아스포라 정착 지원",
    title_services: "서비스 — 원하다",
    title_stories: "스토리 — 원하다",
    title_support: "후원·참여 — 원하다",
    title_about: "단체 소개 — 원하다",

    /* ---- index: campaigns ---- */
    cmp_tag_event: "행사", cmp_tag_apply: "모집 중",
    cmp_tag_volun: "자원봉사", cmp_tag_archive: "아카이브",
    cmp_more: "자세히 보기",
    cmp1_t: "봄맞이 정착 박람회 2026",
    cmp1_d: "주거·취업·교육 부스 한자리. 현장 상담 가능 · 2026.05.15",
    cmp2_t: "고려인 한국어 무료 강좌",
    cmp2_d: "12주 과정, 러시아어 안내 · 안산·서울 동시 모집 (~2026.05.30)",
    cmp3_t: "의료 통역 자원봉사자 모집",
    cmp3_d: "러시아어·중국어 가능자. 월 1회 이상 참여 가능 시 환영합니다.",
    cmp4_t: "정기 후원자의 밤",
    cmp4_d: "한 해의 변화를 후원자분들과 나누는 자리 · 2026.06.20",
    cmp5_t: "사할린동포 귀환 80주년 기념전",
    cmp5_d: "사진·구술 기록으로 보는 귀환의 시간 · 2026.07–08",

    /* ---- index: hero / who picker ---- */
    hero_eyebrow: "한민족 디아스포라 정착 지원",
    hero_title: '먼 길을 오신 분들이<br><em>이곳에 닿을 수 있도록.</em>',
    hero_desc: "탈북민, 고려인, 조선족, 사할린동포 — 정착의 실무를 함께 풀어가는 연합단체입니다. 무엇이 필요하신지 알려주세요. 가까운 도움으로 연결해드립니다.",
    hero_cta_help: "정착 지원 받기",
    hero_cta_learn: "단체 알아보기",
    who_title: "어느 분이신가요?",
    who_hint: "선택하시면 맞춤 안내로 이동합니다.",
    who_defector: "탈북민", who_defector_sub: "북한이탈주민",
    who_koryo: "고려인", who_koryo_sub: "CIS 지역 동포",
    who_joseonjok: "조선족", who_joseonjok_sub: "중국 동포",
    who_sakhalin: "사할린동포", who_sakhalin_sub: "사할린 귀환동포",

    /* ---- index: services preview ---- */
    svc_h: "필요한 도움을 바로 찾아보세요",
    svc_lead: "상담은 비공개로 진행되며, 신원 보호가 우선입니다.",
    svc_house: "주거", svc_house_d: "임대주택, 보증금 지원, 긴급 거처 연계",
    svc_job: "취업", svc_job_d: "직업훈련, 자격증, 채용 매칭",
    svc_edu: "교육", svc_edu_d: "검정고시, 대학 진학, 평생교육",
    svc_legal: "법률", svc_legal_d: "체류·국적, 가족관계, 무료 법률상담",
    svc_mind: "심리상담", svc_mind_d: "트라우마 상담, 가족 상담, 또래 모임",
    svc_health: "의료", svc_health_d: "의료비 지원, 건강검진, 통역 동행",
    svc_korean: "한국어", svc_korean_d: "생활 한국어, 직무 한국어, 발음교정",
    svc_kids: "자녀교육", svc_kids_d: "학교 적응, 학습 멘토링, 진로 상담",
    more: "자세히 →",

    /* ---- index: stories preview ---- */
    story_h: "이곳에 도착한 사람들의 이야기",
    story_lead: "개인을 식별할 수 없도록 익명화된 정착 스토리입니다.",
    story_tag1: "탈북민 · 취업",
    story_t1: '"이력서 한 줄을 어떻게 채워야 할지부터 막막했어요."',
    story_d1: "38세 ㄱ씨는 직업훈련 6개월 뒤 제조 분야 정규직으로 입사했습니다.",
    story_tag2: "고려인 · 한국어",
    story_t2: '"러시아어로 먼저 안내받을 수 있어 안심했어요."',
    story_d2: "3대째 이주 가족인 ㄴ씨 가족은 자녀 학교 적응 프로그램에 함께 참여했습니다.",
    story_tag3: "사할린동포 · 의료",
    story_t3: '"병원에 함께 가준 분 덕분에 검사를 받을 수 있었습니다."',
    story_d3: "고령의 ㄷ씨는 정기 검진과 통역 동행 서비스를 이용 중입니다.",
    story_more: "더 많은 이야기 보기 →",

    /* ---- index: support band ---- */
    sup_h: "한 사람의 정착을 함께 만들어요",
    sup_p: "매월 2만원이면 한 가정의 한국어 학습 한 달치, 5만원이면 긴급 의료비 한 건을 잇습니다. 작지만 끊기지 않는 도움이 가장 큰 힘입니다.",
    sup_cta1: "정기후원 시작", sup_cta2: "자원봉사 신청",
    stat1: "2025년 누적 상담 건수", stat2: "정착 매칭 완료 가정",
    stat3: "전국 거점 센터", stat4: "후원금 사업비 집행률",

    /* ---- services page ---- */
    srv_crumb_self: "서비스",
    srv_title: "필요한 도움을 바로 신청하세요",
    srv_desc: "각 서비스마다 대상·신청 방법·담당자·소요 시간을 명시합니다. 모든 상담은 비공개로 진행됩니다.",
    srv_f_all: "전체",
    srv_f_defector: "탈북민",
    srv_f_koryo: "고려인",
    srv_f_joseonjok: "조선족",
    srv_f_sakhalin: "사할린동포",
    srv_dt_target: "대상", srv_dt_apply: "신청", srv_dt_contact: "담당", srv_dt_time: "소요",
    srv_btn: "신청하기",
    srv1_h: "주거 지원", srv1_d: "긴급 거처, 임대주택 신청 동행, 보증금 지원 연계",
    srv1_target: "탈북민·고려인·사할린동포", srv1_apply: "온라인 폼 / 전화",
    srv1_contact: "주거지원팀 김○○", srv1_time: "최초 상담 3일 이내",
    srv2_h: "취업·직업훈련", srv2_d: "직업훈련 매칭, 자격증 취득 지원, 채용 연계",
    srv2_target: "전체", srv2_apply: "온라인 폼 / 방문",
    srv2_contact: "일자리팀 이○○", srv2_time: "훈련 과정 3~6개월",
    srv3_h: "교육 지원", srv3_d: "검정고시 준비반, 대학 진학 멘토링, 평생교육 연계",
    srv3_target: "전체", srv3_apply: "온라인 폼",
    srv3_contact: "교육팀 박○○", srv3_time: "학기제 운영",
    srv4_h: "법률 상담", srv4_d: "체류·국적, 가족관계 등록, 무료 변호사 매칭",
    srv4_target: "전체", srv4_apply: "전화 / 방문 예약",
    srv4_contact: "법률지원팀", srv4_time: "상담 1주 이내",
    srv5_h: "심리상담", srv5_d: "개인 상담, 가족 상담, 또래 모임 (전액 무료)",
    srv5_target: "탈북민·고려인·사할린동포", srv5_apply: "비공개 폼 / 전화",
    srv5_contact: "임상심리사", srv5_time: "주 1회 8회기 기본",
    srv6_h: "의료 지원", srv6_d: "의료비 일부 지원, 건강검진 연계, 병원 통역 동행",
    srv6_target: "탈북민·고려인·사할린동포", srv6_apply: "온라인 폼",
    srv6_contact: "의료지원팀", srv6_time: "건당 7일 이내 처리",
    srv7_h: "한국어 학습", srv7_d: "생활/직무 한국어, 발음교정, 1:1 튜터링 (한·러 진행)",
    srv7_target: "고려인·사할린동포 우선", srv7_apply: "온라인 폼",
    srv7_contact: "언어지원팀", srv7_time: "분기제 12주 과정",
    srv8_h: "자녀 교육", srv8_d: "학교 적응 지원, 학습 멘토링, 진로 상담",
    srv8_target: "초·중·고 자녀", srv8_apply: "온라인 폼",
    srv8_contact: "교육팀", srv8_time: "학기제",

    /* ---- stories page ---- */
    sty_crumb_self: "스토리",
    sty_title: "이곳에 도착한 사람들의 이야기",
    sty_desc: "모든 사례는 본인 동의 후 익명화하여 게재합니다. 사진은 모자이크 처리되며, 일부 정보는 보호를 위해 변형되었습니다.",
    story_tag4: "조선족 · 자녀교육",
    story_t4: '"아이가 학교에서 친구를 사귀는 데 한 학기가 걸렸어요."',
    story_d4: "학습 멘토링과 또래 모임을 통해 학교 적응을 도왔습니다.",
    story_tag5: "탈북민 · 심리상담",
    story_t5: '"잠을 못 자는 게 가장 힘들었어요."',
    story_d5: "8회기 트라우마 상담 후 수면 패턴이 안정되었다고 보고했습니다.",
    story_tag6: "고려인 · 주거",
    story_t6: '"보증금이 가장 큰 벽이었어요."',
    story_d6: "긴급 거처 연계 후 임대주택 신청을 함께 진행했습니다.",
    arch_h: "한민족 디아스포라, 우리는 어디에서 왔나",
    arch_lead: "정착의 끝은 정체성의 회복이기도 합니다. 강제이주, 분단, 귀환 — 그 길의 기록을 함께 남깁니다.",
    arch1_t: "고려인 강제이주 1937",
    arch1_d: "연해주에서 중앙아시아로의 이주, 그리고 3·4세대의 귀환.",
    arch2_t: "사할린, 돌아오지 못한 시간",
    arch2_d: "일제 강제동원과 전후 귀환 운동의 기록.",
    arch3_t: "탈북, 도착 이후의 삶",
    arch3_d: "국경을 넘은 뒤 마주하는 정착의 실무들.",
    arch_more: "아카이브 →",

    /* ---- support page ---- */
    sup_crumb_self: "후원·참여",
    sup_title: "한 사람의 정착을 함께 만들어요",
    sup_desc: "매월 작은 후원이 모여 한 가정의 한 달을 잇습니다. 후원금 사업비 집행률은 94%입니다.",
    sup_form_h: "후원하기",
    sup_label_freq: "방식",
    sup_freq_m: "정기 (매월)",
    sup_freq_o: "일시",
    sup_label_amount: "금액",
    sup_amt1: "1만원", sup_amt2: "2만원", sup_amt3: "5만원", sup_amt4: "10만원",
    sup_custom: "직접 입력 (원)",
    sup_input_name: "이름",
    sup_input_email: "이메일",
    sup_consent: "개인정보 수집·이용 및 결제 안내에 동의합니다.",
    sup_alloc_h: "후원금은 이렇게 쓰입니다",
    sup_alloc_lead: "모든 후원은 사업비 → 운영비 순으로 우선 배분됩니다.",
    sup_alloc1: "서비스 직접 집행",
    sup_alloc2: "콘텐츠·캠페인",
    sup_alloc3: "긴급지원 적립",
    sup_alloc4: "운영·관리",
    sup_volun_h: "자원봉사 / 재능기부",
    sup_volun_p: "한국어 튜터, 의료 통역, 디자인·번역 등 다양한 형태로 참여할 수 있습니다.",
    sup_volun_btn: "자원봉사 신청서 작성 →",

    /* ---- about page ---- */
    abt_crumb_self: "단체 소개",
    abt_title: "원하다는 어떤 곳인가요?",
    abt_desc: "탈북민·고려인·조선족·사할린동포의 정착을 실무적 도움으로 잇는 비영리 연합단체입니다. 게시판 대신 사람을, 공지 대신 연결을 우선합니다.",
    abt_mission_h: "미션",
    abt_mission_p: "먼 길을 거쳐 한국에 도착한 한민족 디아스포라가, 다음 한 걸음을 자기 의지로 디딜 수 있도록. 우리는 정보가 아니라 연결을, 안내가 아니라 동행을 만듭니다.",
    abt_history_h: "연혁",
    abt_h1: "전국 거점 12개 확장 / 러시아어 상담 채널 정식 운영",
    abt_h2: "고려인·사할린동포 통합 지원 프로그램 시작",
    abt_h3: "법인 전환, 정기후원 1,000명 돌파",
    abt_h4: "탈북민 정착 멘토링 프로그램 운영 개시",
    abt_h5: "임의단체로 출범",
    abt_trans_h: "투명성",
    abt_trans_p: "매년 외부 회계감사를 받고, 연간보고서·재정 내역을 공개합니다.",
    abt_trans1: "2025 연간보고서 PDF →",
    abt_trans2: "2025 외부 회계감사 보고서 →",
    abt_trans3: "기부금영수증 발급 안내 →",
    abt_trans4: "개인정보 처리방침 →",
    abt_centers_h: "전국 거점 (예시)",
    abt_centers_lead: "방문 상담은 사전 예약을 권장합니다.",
    abt_c1: "서울 본부", abt_c1_addr: "서울시 ○○구 ○○로 00",
    abt_c2: "인천 센터", abt_c2_addr: "인천시 ○○구 ○○동",
    abt_c3: "안산 센터 (고려인)", abt_c3_addr: "안산시 단원구 ○○",
    abt_c4: "광주 센터", abt_c4_addr: "광주시 ○○구 ○○",
    abt_c5: "대구 센터", abt_c5_addr: "대구시 ○○구 ○○",
    abt_c6: "부산 센터", abt_c6_addr: "부산시 ○○구 ○○",
  },

  ru: {
    /* ---- common ---- */
    skip: "Перейти к основному содержанию",
    brand: "Вонхада",
    nav_home: "Главная", nav_services: "Услуги", nav_stories: "Истории",
    nav_support: "Поддержать", nav_about: "О нас",
    cta_donate: "Поддержать",
    crumb_home: "Главная",
    menu_open: "Открыть меню",
    lang_label: "Выбор языка",
    theme_open: "Выбрать дизайн-тему",
    theme_close: "Закрыть панель тем",
    theme_panel_title: "Выберите дизайн-тему",
    theme_panel_desc: "Сравните настроение Onehada и выберите вариант.",
    theme_terracotta_name: "Terracotta Warmth",
    theme_terracotta_desc: "Тёплая земляная палитра и кремовая база.",
    theme_hanji_name: "Hanji Ink",
    theme_hanji_desc: "Ханджи, тушь и спокойный контраст данчхон.",
    theme_hanbok_name: "Hanbok Pastel",
    theme_hanbok_desc: "Мягкая светлая палитра в духе ханбока.",
    theme_sunset_name: "Korean Sunset",
    theme_sunset_desc: "Золотое тепло основного сайта Onehada.",
    theme_reunion_name: "Reunion Blue",
    theme_reunion_desc: "Чистый сине-зелёный тон единства и мира.",
    theme_cocoa_name: "Cocoa Night",
    theme_cocoa_desc: "Спокойный тёмный режим с тёплым золотом.",
    foot_about: "Объединение, которое помогает корейской диаспоре закрепиться в Корее на практике.",
    foot_quick: "Быстрые ссылки", foot_contact: "Контакты", foot_trust: "Прозрачность",
    foot_addr: "г. Сеул, район ○○, ул. ○○ 00",
    foot_report: "Годовой отчёт", foot_finance: "Финансовая отчётность", foot_privacy: "Политика конфиденциальности",
    foot_note: "Сайт соответствует требованиям WCAG 2.1 AA.",

    title_index: "Вонхада — поддержка корейской диаспоры",
    title_services: "Услуги — Вонхада",
    title_stories: "Истории — Вонхада",
    title_support: "Поддержать — Вонхада",
    title_about: "О нас — Вонхада",

    cmp_tag_event: "Событие", cmp_tag_apply: "Идёт набор",
    cmp_tag_volun: "Волонтёрство", cmp_tag_archive: "Архив",
    cmp_more: "Подробнее",
    cmp1_t: "Весенняя ярмарка адаптации 2026",
    cmp1_d: "Жильё, работа, образование — всё в одном месте · 15.05.2026",
    cmp2_t: "Бесплатные курсы корейского для корё-сарам",
    cmp2_d: "12 недель. Сеул и Ансан, инструкции на русском (до 30.05.2026)",
    cmp3_t: "Набор волонтёров — медицинский перевод",
    cmp3_d: "Русский или китайский. От одного раза в месяц.",
    cmp4_t: "Вечер постоянных доноров",
    cmp4_d: "Подведение итогов года вместе с теми, кто поддерживает · 20.06.2026",
    cmp5_t: "К 80-летию возвращения сахалинских корейцев",
    cmp5_d: "Фото и устные свидетельства возвращения · 07–08.2026",

    hero_eyebrow: "Поддержка корейской диаспоры в адаптации",
    hero_title: 'Чтобы те, кто прошёл долгий путь,<br><em>смогли найти здесь дом.</em>',
    hero_desc: "Беженцы из КНДР, корё-сарам, корейцы Китая и Сахалина — мы помогаем в практических вопросах адаптации. Расскажите, что вам нужно, и мы свяжем вас с ближайшей помощью.",
    hero_cta_help: "Получить помощь",
    hero_cta_learn: "О нашей организации",
    who_title: "Кто вы?",
    who_hint: "Выберите — и мы покажем подходящую информацию.",
    who_defector: "Беженцы из КНДР", who_defector_sub: "Северокорейские переселенцы",
    who_koryo: "Корё-сарам", who_koryo_sub: "Соотечественники из СНГ",
    who_joseonjok: "Чосончжок", who_joseonjok_sub: "Корейцы Китая",
    who_sakhalin: "Корейцы Сахалина", who_sakhalin_sub: "Возвращенцы с Сахалина",

    svc_h: "Найдите нужную помощь",
    svc_lead: "Все консультации конфиденциальны. Защита личности — наш приоритет.",
    svc_house: "Жильё", svc_house_d: "Аренда, депозит, экстренное размещение",
    svc_job: "Работа", svc_job_d: "Обучение, сертификация, трудоустройство",
    svc_edu: "Образование", svc_edu_d: "ГЭД, поступление в вуз, курсы",
    svc_legal: "Право", svc_legal_d: "Виза, гражданство, бесплатные консультации",
    svc_mind: "Психология", svc_mind_d: "Травма, семья, группы поддержки",
    svc_health: "Медицина", svc_health_d: "Расходы, скрининг, переводчик",
    svc_korean: "Корейский язык", svc_korean_d: "Бытовой, рабочий, произношение",
    svc_kids: "Дети", svc_kids_d: "Адаптация в школе, наставничество, профориентация",
    more: "Подробнее →",

    story_h: "Истории тех, кто уже приехал",
    story_lead: "Все случаи опубликованы анонимно с согласия участников.",
    story_tag1: "КНДР · Работа",
    story_t1: '«Я не знал, что писать в резюме.»',
    story_d1: "Г., 38 лет, после полугодового обучения устроился на постоянную работу.",
    story_tag2: "Корё-сарам · Язык",
    story_t2: '«Мне стало легче, когда консультация была на русском.»',
    story_d2: "Семья Н. в третьем поколении прошла программу школьной адаптации детей.",
    story_tag3: "Сахалин · Медицина",
    story_t3: '«Благодаря сопровождающему я смог пройти обследование.»',
    story_d3: "Пожилой Д. пользуется услугами скрининга и медицинского переводчика.",
    story_more: "Все истории →",

    sup_h: "Помогите одному человеку обустроиться",
    sup_p: "20 000 вон в месяц — это месяц обучения корейскому для одной семьи. 50 000 вон — одна экстренная медицинская помощь. Маленькая, но регулярная поддержка — самая сильная.",
    sup_cta1: "Регулярное пожертвование", sup_cta2: "Стать волонтёром",
    stat1: "Консультаций в 2025", stat2: "Семей с подобранной поддержкой",
    stat3: "Региональных центров", stat4: "Средств идёт на программы",

    srv_crumb_self: "Услуги",
    srv_title: "Подайте заявку на нужную помощь",
    srv_desc: "Для каждой услуги указаны: кто может обратиться, как подать заявку, кто отвечает и сколько займёт обработка. Все консультации конфиденциальны.",
    srv_f_all: "Все",
    srv_f_defector: "КНДР",
    srv_f_koryo: "Корё-сарам",
    srv_f_joseonjok: "Чосончжок",
    srv_f_sakhalin: "Сахалин",
    srv_dt_target: "Кто", srv_dt_apply: "Заявка", srv_dt_contact: "Куратор", srv_dt_time: "Срок",
    srv_btn: "Подать заявку",
    srv1_h: "Жильё", srv1_d: "Экстренное размещение, заявка на аренду, депозит",
    srv1_target: "КНДР · Корё-сарам · Сахалин", srv1_apply: "Онлайн / телефон",
    srv1_contact: "Жилищный отдел, Ким", srv1_time: "Первый контакт за 3 дня",
    srv2_h: "Работа и обучение", srv2_d: "Профобучение, сертификация, трудоустройство",
    srv2_target: "Все", srv2_apply: "Онлайн / визит",
    srv2_contact: "Отдел занятости, Ли", srv2_time: "Курс 3–6 месяцев",
    srv3_h: "Образование", srv3_d: "ГЭД, поступление в вуз, непрерывное обучение",
    srv3_target: "Все", srv3_apply: "Онлайн",
    srv3_contact: "Отдел образования, Пак", srv3_time: "По семестрам",
    srv4_h: "Юридическая помощь", srv4_d: "Виза, гражданство, бесплатный адвокат",
    srv4_target: "Все", srv4_apply: "Телефон / запись",
    srv4_contact: "Юридический отдел", srv4_time: "В течение недели",
    srv5_h: "Психология", srv5_d: "Индивидуально, семья, группы (бесплатно)",
    srv5_target: "КНДР · Корё-сарам · Сахалин", srv5_apply: "Конфиденциальная форма",
    srv5_contact: "Клинический психолог", srv5_time: "1 раз/неделя × 8 встреч",
    srv6_h: "Медицина", srv6_d: "Помощь с расходами, скрининг, медицинский перевод",
    srv6_target: "КНДР · Корё-сарам · Сахалин", srv6_apply: "Онлайн",
    srv6_contact: "Медотдел", srv6_time: "До 7 дней",
    srv7_h: "Корейский язык", srv7_d: "Бытовой/рабочий, произношение, 1:1 (KO/RU)",
    srv7_target: "Корё-сарам · Сахалин (приоритет)", srv7_apply: "Онлайн",
    srv7_contact: "Языковой отдел", srv7_time: "Курс 12 недель",
    srv8_h: "Дети", srv8_d: "Адаптация в школе, наставник, профориентация",
    srv8_target: "Школьники", srv8_apply: "Онлайн",
    srv8_contact: "Отдел образования", srv8_time: "По семестрам",

    sty_crumb_self: "Истории",
    sty_title: "Истории тех, кто уже приехал",
    sty_desc: "Все случаи публикуются с согласия участников и в анонимном виде. Фото размыты, часть деталей изменена для защиты личности.",
    story_tag4: "Чосончжок · Дети",
    story_t4: '«Сыну понадобился целый семестр, чтобы найти друзей в школе.»',
    story_d4: "Помогли наставник и группы поддержки.",
    story_tag5: "КНДР · Психология",
    story_t5: '«Самым тяжёлым было — не спать.»',
    story_d5: "После 8 встреч по работе с травмой сон стабилизировался.",
    story_tag6: "Корё-сарам · Жильё",
    story_t6: '«Главным барьером был депозит.»',
    story_d6: "После временного жилья помогли подать заявку на аренду.",
    arch_h: "Корейская диаспора: откуда мы пришли",
    arch_lead: "Адаптация — это и восстановление идентичности. Депортации, разделение, возвращения — мы записываем эти пути.",
    arch1_t: "Депортация корё-сарам 1937",
    arch1_d: "Из Приморья в Среднюю Азию. И возвращение третьего и четвёртого поколения.",
    arch2_t: "Сахалин: время, в которое не вернулись",
    arch2_d: "Принудительная мобилизация и движение за послевоенное возвращение.",
    arch3_t: "Жизнь после побега из КНДР",
    arch3_d: "Что такое практика адаптации после пересечения границы.",
    arch_more: "В архив →",

    sup_crumb_self: "Поддержать",
    sup_title: "Помогите одному человеку обустроиться",
    sup_desc: "Маленькие регулярные пожертвования собирают месяц жизни одной семьи. На программы идёт 94% средств.",
    sup_form_h: "Поддержать",
    sup_label_freq: "Тип",
    sup_freq_m: "Ежемесячно",
    sup_freq_o: "Разово",
    sup_label_amount: "Сумма",
    sup_amt1: "₩10,000", sup_amt2: "₩20,000", sup_amt3: "₩50,000", sup_amt4: "₩100,000",
    sup_custom: "Своя сумма (₩)",
    sup_input_name: "Имя",
    sup_input_email: "Email",
    sup_consent: "Я согласен(на) на обработку персональных данных и условия оплаты.",
    sup_alloc_h: "Куда идут пожертвования",
    sup_alloc_lead: "Сначала программы, затем операционные расходы.",
    sup_alloc1: "Прямые услуги",
    sup_alloc2: "Контент и кампании",
    sup_alloc3: "Резерв экстренной помощи",
    sup_alloc4: "Операционные",
    sup_volun_h: "Волонтёрство и pro bono",
    sup_volun_p: "Преподаватели корейского, медицинские переводчики, дизайнеры и переводчики — формы участия разные.",
    sup_volun_btn: "Подать заявку волонтёра →",

    abt_crumb_self: "О нас",
    abt_title: "Что такое Вонхада?",
    abt_desc: "Некоммерческая коалиция, которая помогает практически в адаптации беженцам из КНДР, корё-сарам, чосончжок и сахалинским корейцам. Мы выбираем людей вместо досок объявлений и связь вместо рассылок.",
    abt_mission_h: "Миссия",
    abt_mission_p: "Чтобы те, кто прошёл долгий путь и приехал в Корею, могли сделать следующий шаг по своей воле. Мы строим связь, а не информацию; сопровождение, а не указатели.",
    abt_history_h: "История",
    abt_h1: "12 региональных центров / постоянный канал на русском",
    abt_h2: "Запуск интегрированной программы для корё-сарам и сахалинских корейцев",
    abt_h3: "Регистрация юрлица, 1 000 постоянных доноров",
    abt_h4: "Старт программы наставничества для беженцев из КНДР",
    abt_h5: "Создание организации",
    abt_trans_h: "Прозрачность",
    abt_trans_p: "Каждый год мы проходим внешний аудит и публикуем годовые и финансовые отчёты.",
    abt_trans1: "Годовой отчёт 2025 (PDF) →",
    abt_trans2: "Внешний аудит 2025 →",
    abt_trans3: "Налоговая квитанция о пожертвовании →",
    abt_trans4: "Политика конфиденциальности →",
    abt_centers_h: "Региональные центры (пример)",
    abt_centers_lead: "Очный приём — желательно по записи.",
    abt_c1: "Сеул (главный)", abt_c1_addr: "г. Сеул, р-н ○○, ул. ○○ 00",
    abt_c2: "Инчхон", abt_c2_addr: "г. Инчхон, р-н ○○",
    abt_c3: "Ансан (корё-сарам)", abt_c3_addr: "г. Ансан, р-н Танвон, ○○",
    abt_c4: "Кванджу", abt_c4_addr: "г. Кванджу, р-н ○○",
    abt_c5: "Тэгу", abt_c5_addr: "г. Тэгу, р-н ○○",
    abt_c6: "Пусан", abt_c6_addr: "г. Пусан, р-н ○○",
  },

  en: {
    skip: "Skip to main content",
    brand: "Onehada",
    nav_home: "Home", nav_services: "Services", nav_stories: "Stories",
    nav_support: "Support", nav_about: "About",
    cta_donate: "Donate",
    crumb_home: "Home",
    menu_open: "Open menu",
    lang_label: "Choose language",
    theme_open: "Choose design theme",
    theme_close: "Close theme panel",
    theme_panel_title: "Choose a design theme",
    theme_panel_desc: "Compare Onehada moods before deciding.",
    theme_terracotta_name: "Terracotta Warmth",
    theme_terracotta_desc: "The current warm earth and cream direction.",
    theme_hanji_name: "Hanji Ink",
    theme_hanji_desc: "Hanji paper, ink, and calm dancheong contrast.",
    theme_hanbok_name: "Hanbok Pastel",
    theme_hanbok_desc: "A soft, bright palette inspired by hanbok dyes.",
    theme_sunset_name: "Korean Sunset",
    theme_sunset_desc: "Golden warmth inspired by the main Onehada site.",
    theme_reunion_name: "Reunion Blue",
    theme_reunion_desc: "Clear blue-green tones for reunion and peace.",
    theme_cocoa_name: "Cocoa Night",
    theme_cocoa_desc: "A calm dark mode with warm gold accents.",
    foot_about: "A coalition helping the Korean diaspora settle in South Korea through practical support.",
    foot_quick: "Quick links", foot_contact: "Contact", foot_trust: "Transparency",
    foot_addr: "○○-ro 00, ○○-gu, Seoul",
    foot_report: "Annual report", foot_finance: "Financial disclosure", foot_privacy: "Privacy policy",
    foot_note: "This site follows WCAG 2.1 AA.",

    title_index: "Onehada — Korean diaspora settlement support",
    title_services: "Services — Onehada",
    title_stories: "Stories — Onehada",
    title_support: "Support — Onehada",
    title_about: "About — Onehada",

    cmp_tag_event: "Event", cmp_tag_apply: "Open call",
    cmp_tag_volun: "Volunteer", cmp_tag_archive: "Archive",
    cmp_more: "Read more",
    cmp1_t: "Spring Settlement Fair 2026",
    cmp1_d: "Housing, jobs, education in one place · May 15, 2026",
    cmp2_t: "Free Korean classes for Koryo-saram",
    cmp2_d: "12 weeks · Seoul & Ansan · Russian-language guidance (until May 30)",
    cmp3_t: "Volunteer call: medical interpretation",
    cmp3_d: "Russian or Mandarin speakers, once a month or more.",
    cmp4_t: "Donor Night",
    cmp4_d: "An evening to share the year's changes with our supporters · June 20, 2026",
    cmp5_t: "Sakhalin Korean Return — 80th Anniversary",
    cmp5_d: "Photographs and oral history of the return · Jul–Aug 2026",

    hero_eyebrow: "Settlement support for the Korean diaspora",
    hero_title: 'For those who came a long way,<br><em>so this can be home.</em>',
    hero_desc: "North Korean refugees, Koryo-saram, Joseonjok, Sakhalin Koreans — we work through the practical side of settling. Tell us what you need, and we'll connect you with the closest help.",
    hero_cta_help: "Get settlement help",
    hero_cta_learn: "About us",
    who_title: "Who are you?",
    who_hint: "Pick one — we'll show you the right path.",
    who_defector: "N. Korean refugee", who_defector_sub: "From North Korea",
    who_koryo: "Koryo-saram", who_koryo_sub: "Korean diaspora from CIS",
    who_joseonjok: "Joseonjok", who_joseonjok_sub: "Korean diaspora from China",
    who_sakhalin: "Sakhalin Korean", who_sakhalin_sub: "Returnees from Sakhalin",

    svc_h: "Find the help you need",
    svc_lead: "All consultations are private. Identity protection comes first.",
    svc_house: "Housing", svc_house_d: "Rentals, deposit support, emergency shelter",
    svc_job: "Employment", svc_job_d: "Vocational training, certifications, job match",
    svc_edu: "Education", svc_edu_d: "GED, university, lifelong learning",
    svc_legal: "Legal", svc_legal_d: "Status, citizenship, free legal counsel",
    svc_mind: "Counseling", svc_mind_d: "Trauma, family, peer groups",
    svc_health: "Health", svc_health_d: "Costs, screenings, interpreter accompaniment",
    svc_korean: "Korean language", svc_korean_d: "Daily, work, pronunciation",
    svc_kids: "Children", svc_kids_d: "School adjustment, mentoring, careers",
    more: "Learn more →",

    story_h: "Stories of those who arrived here",
    story_lead: "Anonymized settlement stories, published with consent.",
    story_tag1: "N. Korean · Employment",
    story_t1: '"I had no idea what to put on my resume."',
    story_d1: "G., 38, joined a manufacturing firm full-time after 6 months of training.",
    story_tag2: "Koryo-saram · Korean",
    story_t2: '"It helped that I could be guided in Russian first."',
    story_d2: "A third-generation family joined a school adjustment program with their kids.",
    story_tag3: "Sakhalin · Health",
    story_t3: '"With someone to come along, I was finally able to get checked."',
    story_d3: "An elderly D. uses regular checkups and interpretation accompaniment.",
    story_more: "More stories →",

    sup_h: "Build a settlement together, one person at a time",
    sup_p: "₩20,000 a month covers a family's Korean classes for a month. ₩50,000 covers one urgent medical bill. Small, steady support is the strongest kind.",
    sup_cta1: "Start monthly giving", sup_cta2: "Apply to volunteer",
    stat1: "Consultations in 2025", stat2: "Families matched",
    stat3: "Centers nationwide", stat4: "Spent on programs",

    srv_crumb_self: "Services",
    srv_title: "Apply for the help you need",
    srv_desc: "Each service lists eligibility, how to apply, contact, and turnaround. All consultations are confidential.",
    srv_f_all: "All",
    srv_f_defector: "N. Korean",
    srv_f_koryo: "Koryo-saram",
    srv_f_joseonjok: "Joseonjok",
    srv_f_sakhalin: "Sakhalin",
    srv_dt_target: "Eligible", srv_dt_apply: "Apply", srv_dt_contact: "Contact", srv_dt_time: "Turnaround",
    srv_btn: "Apply",
    srv1_h: "Housing", srv1_d: "Emergency shelter, rental application support, deposit",
    srv1_target: "N. Korean · Koryo-saram · Sakhalin", srv1_apply: "Online / Phone",
    srv1_contact: "Housing team, Kim", srv1_time: "First contact within 3 days",
    srv2_h: "Employment & training", srv2_d: "Vocational matching, certifications, hiring",
    srv2_target: "All", srv2_apply: "Online / In person",
    srv2_contact: "Jobs team, Lee", srv2_time: "3–6 month courses",
    srv3_h: "Education", srv3_d: "GED prep, university mentoring, lifelong learning",
    srv3_target: "All", srv3_apply: "Online",
    srv3_contact: "Education team, Park", srv3_time: "By semester",
    srv4_h: "Legal counsel", srv4_d: "Status, citizenship, family registration, free lawyers",
    srv4_target: "All", srv4_apply: "Phone / Visit (by appt.)",
    srv4_contact: "Legal team", srv4_time: "Within a week",
    srv5_h: "Counseling", srv5_d: "Individual, family, peer groups (free)",
    srv5_target: "N. Korean · Koryo-saram · Sakhalin", srv5_apply: "Private form / Phone",
    srv5_contact: "Clinical psychologist", srv5_time: "Weekly × 8 sessions",
    srv6_h: "Health", srv6_d: "Cost help, screenings, hospital interpreter",
    srv6_target: "N. Korean · Koryo-saram · Sakhalin", srv6_apply: "Online",
    srv6_contact: "Health team", srv6_time: "Within 7 days per case",
    srv7_h: "Korean language", srv7_d: "Daily/work Korean, pronunciation, 1:1 (KO·RU)",
    srv7_target: "Koryo-saram · Sakhalin (priority)", srv7_apply: "Online",
    srv7_contact: "Language team", srv7_time: "12-week quarterly course",
    srv8_h: "Children", srv8_d: "School adjustment, learning mentor, careers",
    srv8_target: "K–12 children", srv8_apply: "Online",
    srv8_contact: "Education team", srv8_time: "By semester",

    sty_crumb_self: "Stories",
    sty_title: "Stories of those who arrived here",
    sty_desc: "All cases are published with consent and anonymized. Photos are blurred and some details changed to protect identity.",
    story_tag4: "Joseonjok · Children",
    story_t4: '"It took my child a full semester to make friends at school."',
    story_d4: "Mentoring and peer groups helped them adjust.",
    story_tag5: "N. Korean · Counseling",
    story_t5: '"Not being able to sleep was the hardest part."',
    story_d5: "After 8 trauma-counseling sessions, sleep stabilized.",
    story_tag6: "Koryo-saram · Housing",
    story_t6: '"The deposit was the biggest wall."',
    story_d6: "After temporary shelter, we walked them through a rental application.",
    arch_h: "Korean diaspora: where we came from",
    arch_lead: "The end of settlement is also the recovery of identity. Forced migration, division, return — we record those routes.",
    arch1_t: "Koryo-saram deportation, 1937",
    arch1_d: "From the Russian Far East to Central Asia, and the return of the 3rd and 4th generations.",
    arch2_t: "Sakhalin — the years they couldn't return",
    arch2_d: "Wartime mobilization and the post-war return movement.",
    arch3_t: "Life after escaping North Korea",
    arch3_d: "The practical work of settling, after crossing the border.",
    arch_more: "Open archive →",

    sup_crumb_self: "Support",
    sup_title: "Build a settlement together",
    sup_desc: "Small monthly gifts add up to a family's month. 94% of donations go to programs.",
    sup_form_h: "Donate",
    sup_label_freq: "Type",
    sup_freq_m: "Monthly",
    sup_freq_o: "One-time",
    sup_label_amount: "Amount",
    sup_amt1: "₩10,000", sup_amt2: "₩20,000", sup_amt3: "₩50,000", sup_amt4: "₩100,000",
    sup_custom: "Custom amount (₩)",
    sup_input_name: "Name",
    sup_input_email: "Email",
    sup_consent: "I agree to the processing of personal data and payment terms.",
    sup_alloc_h: "Where donations go",
    sup_alloc_lead: "Programs first, operations after.",
    sup_alloc1: "Direct services",
    sup_alloc2: "Content & campaigns",
    sup_alloc3: "Emergency reserve",
    sup_alloc4: "Operations",
    sup_volun_h: "Volunteer / pro bono",
    sup_volun_p: "Korean tutors, medical interpreters, designers, translators — many ways to take part.",
    sup_volun_btn: "Open volunteer form →",

    abt_crumb_self: "About",
    abt_title: "What is Onehada?",
    abt_desc: "A non-profit coalition that helps North Korean refugees, Koryo-saram, Joseonjok and Sakhalin Koreans settle, through practical support. We choose people over notice boards, and connection over announcements.",
    abt_mission_h: "Mission",
    abt_mission_p: "So that those who travelled far to arrive in Korea can take their next step on their own terms. We make connections, not information; companionship, not signage.",
    abt_history_h: "Timeline",
    abt_h1: "12 regional centers / Russian-language counseling channel",
    abt_h2: "Integrated program for Koryo-saram & Sakhalin Koreans",
    abt_h3: "Incorporated as a foundation; reached 1,000 monthly donors",
    abt_h4: "Launched mentoring program for North Korean refugees",
    abt_h5: "Founded as an informal association",
    abt_trans_h: "Transparency",
    abt_trans_p: "We undergo external audits each year and publish annual and financial reports.",
    abt_trans1: "2025 Annual Report (PDF) →",
    abt_trans2: "2025 External Audit →",
    abt_trans3: "Donation tax-receipt info →",
    abt_trans4: "Privacy policy →",
    abt_centers_h: "Regional centers (sample)",
    abt_centers_lead: "Booking is recommended for in-person visits.",
    abt_c1: "Seoul HQ", abt_c1_addr: "○○-ro 00, ○○-gu, Seoul",
    abt_c2: "Incheon", abt_c2_addr: "○○-dong, ○○-gu, Incheon",
    abt_c3: "Ansan (Koryo-saram)", abt_c3_addr: "Danwon-gu, Ansan",
    abt_c4: "Gwangju", abt_c4_addr: "○○-gu, Gwangju",
    abt_c5: "Daegu", abt_c5_addr: "○○-gu, Daegu",
    abt_c6: "Busan", abt_c6_addr: "○○-gu, Busan",
  },
};

// ============================================================
// Apply translations + UI wiring
// ============================================================
function applyLang(lang) {
  if (!I18N[lang]) lang = "ko";
  const dict = I18N[lang];
  const copyOverrides = window.__copyOverrides || {};
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const override = copyOverrides[key];
    const overrideText = override && typeof override === "object" ? (override[lang] || override.ko || override.en || override.ru || "") : "";
    const finalText = overrideText || dict[key];
    if (finalText != null) el.innerHTML = finalText;
  });
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    // format: "attr:key,attr:key"
    const map = el.getAttribute("data-i18n-attr").split(",");
    map.forEach((pair) => {
      const [attr, key] = pair.split(":").map((s) => s.trim());
      if (attr && key && dict[key] != null) el.setAttribute(attr, dict[key]);
    });
  });
  document.querySelectorAll(".lang-toggle button").forEach((b) => {
    b.setAttribute("aria-pressed", b.dataset.lang === lang ? "true" : "false");
  });
  try { localStorage.setItem("onehada.lang", lang); } catch {}

  // re-render dynamic donate label if present
  if (typeof renderDonateLabel === "function") renderDonateLabel();
  if (typeof updateCustomThemeCopy === "function") updateCustomThemeCopy();
  window.dispatchEvent(new CustomEvent("onehada:langchange", { detail: { lang } }));
}

window.applyLang = applyLang;

let renderDonateLabel = null;

const THEMES = ["terracotta", "hanji", "hanbok", "sunset", "reunion", "cocoa-night"];
const CUSTOM_THEME_KEY = "custom";
const CUSTOM_THEME_STORAGE = "onehada.customTheme";
const CUSTOM_THEME_DEFAULT = {
  bg: "#FAF3E4",
  surface: "#FFFBF1",
  ink: "#2B1F17",
  accent: "#C25A3A",
};
const CUSTOM_THEME_VARS = [
  "--color-bg", "--color-surface", "--color-surface-2", "--color-ink", "--color-ink-soft", "--color-line",
  "--color-accent", "--color-accent-soft", "--color-accent-deep", "--color-warm", "--color-rose", "--color-cocoa",
  "--color-olive", "--color-gold", "--brand-grad", "--header-bg", "--cmp-bg", "--cmp-grad-1", "--cmp-grad-2",
  "--cmp-grad-3", "--cmp-grad-4", "--cmp-grad-5", "--story-grad-1", "--story-grad-2", "--story-grad-3",
  "--support-grad", "--footer-bg", "--footer-text", "--footer-heading", "--footer-line", "--footer-muted", "--shadow-card",
];

function readSavedTheme() {
  try {
    const saved = localStorage.getItem("onehada.theme");
    if (saved === CUSTOM_THEME_KEY && readCustomTheme()) return CUSTOM_THEME_KEY;
    return THEMES.includes(saved) ? saved : "terracotta";
  } catch {
    return "terracotta";
  }
}

function normalizeHex(value, fallback) {
  const hex = String(value || "").trim();
  return /^#[0-9a-f]{6}$/i.test(hex) ? hex.toUpperCase() : fallback;
}

function hexToRgb(hex) {
  const clean = normalizeHex(hex, "#000000").slice(1);
  return {
    r: parseInt(clean.slice(0, 2), 16),
    g: parseInt(clean.slice(2, 4), 16),
    b: parseInt(clean.slice(4, 6), 16),
  };
}

function rgbToHex({ r, g, b }) {
  return `#${[r, g, b].map((n) => Math.round(Math.max(0, Math.min(255, n))).toString(16).padStart(2, "0")).join("")}`.toUpperCase();
}

function mixHex(from, to, toWeight) {
  const a = hexToRgb(from);
  const b = hexToRgb(to);
  const w = Math.max(0, Math.min(1, toWeight));
  return rgbToHex({
    r: a.r * (1 - w) + b.r * w,
    g: a.g * (1 - w) + b.g * w,
    b: a.b * (1 - w) + b.b * w,
  });
}

function rgbaHex(hex, alpha) {
  const rgb = hexToRgb(hex);
  return `rgba(${rgb.r},${rgb.g},${rgb.b},${alpha})`;
}

function sanitizeCustomTheme(theme) {
  const source = theme || {};
  return {
    bg: normalizeHex(source.bg, CUSTOM_THEME_DEFAULT.bg),
    surface: normalizeHex(source.surface, CUSTOM_THEME_DEFAULT.surface),
    ink: normalizeHex(source.ink, CUSTOM_THEME_DEFAULT.ink),
    accent: normalizeHex(source.accent, CUSTOM_THEME_DEFAULT.accent),
  };
}

function readCustomTheme() {
  try {
    const raw = localStorage.getItem(CUSTOM_THEME_STORAGE);
    return raw ? sanitizeCustomTheme(JSON.parse(raw)) : null;
  } catch {
    return null;
  }
}

function saveCustomTheme(theme) {
  const next = sanitizeCustomTheme(theme);
  try { localStorage.setItem(CUSTOM_THEME_STORAGE, JSON.stringify(next)); } catch {}
  return next;
}

function customThemeVars(theme) {
  const colors = sanitizeCustomTheme(theme);
  const surface2 = mixHex(colors.surface, colors.accent, .14);
  const accentSoft = mixHex(colors.accent, colors.surface, .72);
  const accentDeep = mixHex(colors.accent, colors.ink, .38);
  const warm = mixHex(colors.accent, "#F2A65A", .36);
  const rose = mixHex(colors.accent, "#B86B5C", .4);
  const cocoa = mixHex(colors.ink, colors.accent, .28);
  const olive = mixHex(colors.accent, "#8A7A4A", .45);
  const gold = mixHex(colors.accent, "#D7A24A", .48);
  const footerBg = mixHex(colors.ink, "#000000", .28);
  return {
    "--color-bg": colors.bg,
    "--color-surface": colors.surface,
    "--color-surface-2": surface2,
    "--color-ink": colors.ink,
    "--color-ink-soft": mixHex(colors.ink, colors.bg, .34),
    "--color-line": mixHex(colors.ink, colors.bg, .78),
    "--color-accent": colors.accent,
    "--color-accent-soft": accentSoft,
    "--color-accent-deep": accentDeep,
    "--color-warm": warm,
    "--color-rose": rose,
    "--color-cocoa": cocoa,
    "--color-olive": olive,
    "--color-gold": gold,
    "--brand-grad": `linear-gradient(135deg, ${colors.accent} 0%, ${warm} 60%, ${gold} 100%)`,
    "--header-bg": rgbaHex(colors.bg, .9),
    "--cmp-bg": footerBg,
    "--cmp-grad-1": `linear-gradient(135deg, ${colors.accent} 0%, ${accentDeep} 62%, ${footerBg} 100%)`,
    "--cmp-grad-2": `linear-gradient(135deg, ${warm} 0%, ${rose} 62%, ${footerBg} 100%)`,
    "--cmp-grad-3": `linear-gradient(135deg, ${cocoa} 0%, ${accentDeep} 62%, ${footerBg} 100%)`,
    "--cmp-grad-4": `linear-gradient(135deg, ${gold} 0%, ${olive} 62%, ${footerBg} 100%)`,
    "--cmp-grad-5": `linear-gradient(135deg, ${colors.ink} 0%, ${cocoa} 62%, ${footerBg} 100%)`,
    "--story-grad-1": `linear-gradient(135deg, ${warm} 0%, ${colors.accent} 100%)`,
    "--story-grad-2": `linear-gradient(135deg, ${rose} 0%, ${accentDeep} 100%)`,
    "--story-grad-3": `linear-gradient(135deg, ${gold} 0%, ${olive} 100%)`,
    "--support-grad": `linear-gradient(135deg, ${accentDeep} 0%, ${colors.accent} 58%, ${warm} 100%)`,
    "--footer-bg": footerBg,
    "--footer-text": mixHex(colors.surface, colors.ink, .24),
    "--footer-heading": colors.surface,
    "--footer-line": mixHex(footerBg, colors.surface, .16),
    "--footer-muted": mixHex(colors.surface, colors.ink, .42),
    "--shadow-card": `0 1px 2px ${rgbaHex(colors.ink, .05)}, 0 10px 28px ${rgbaHex(colors.accent, .1)}`,
  };
}

function clearCustomThemeVars() {
  CUSTOM_THEME_VARS.forEach((name) => document.documentElement.style.removeProperty(name));
}

function applyCustomTheme(theme) {
  const next = saveCustomTheme(theme);
  document.documentElement.setAttribute("data-theme", CUSTOM_THEME_KEY);
  Object.entries(customThemeVars(next)).forEach(([name, value]) => {
    document.documentElement.style.setProperty(name, value);
  });
  document.querySelectorAll(".theme-card").forEach((card) => card.setAttribute("aria-pressed", "false"));
  document.querySelector(".theme-custom")?.setAttribute("data-active", "true");
  try { localStorage.setItem("onehada.theme", CUSTOM_THEME_KEY); } catch {}
  syncCustomThemeControls(next);
}

function applyTheme(theme) {
  if (theme === CUSTOM_THEME_KEY) {
    applyCustomTheme(readCustomTheme() || CUSTOM_THEME_DEFAULT);
    return;
  }
  if (!THEMES.includes(theme)) theme = "terracotta";
  clearCustomThemeVars();
  document.documentElement.setAttribute("data-theme", theme);
  document.querySelectorAll(".theme-card").forEach((card) => {
    card.setAttribute("aria-pressed", card.dataset.themeOption === theme ? "true" : "false");
  });
  document.querySelector(".theme-custom")?.setAttribute("data-active", "false");
  try { localStorage.setItem("onehada.theme", theme); } catch {}
}

function customThemeLabels() {
  const lang = document.documentElement.lang || "ko";
  const labels = {
    ko: ["직접 색상 만들기", "배경, 카드, 글자, 강조색을 고르면 나머지 색은 자동으로 맞춰집니다.", "직접", "배경", "카드", "글자", "강조", "커스텀 적용", "기본값"],
    ru: ["Своя палитра", "Выберите фон, карточки, текст и акцент — остальные тона подстроятся.", "Custom", "Фон", "Карточки", "Текст", "Акцент", "Применить", "Сброс"],
    en: ["Build your own palette", "Pick background, cards, text, and accent. The rest of the theme is derived automatically.", "Custom", "Background", "Cards", "Text", "Accent", "Apply custom", "Reset"],
  };
  return labels[lang] || labels.ko;
}

function syncCustomThemeControls(theme) {
  const next = sanitizeCustomTheme(theme || readCustomTheme() || CUSTOM_THEME_DEFAULT);
  Object.entries(next).forEach(([key, value]) => {
    const input = document.querySelector(`[data-custom-color="${key}"]`);
    const label = document.querySelector(`[data-custom-hex="${key}"]`);
    if (input) input.value = value;
    if (label) label.textContent = value;
  });
}

function updateCustomThemeCopy() {
  const [title, desc, badge, bg, surface, ink, accent, apply, reset] = customThemeLabels();
  const map = { title, desc, badge, bg, surface, ink, accent, apply, reset };
  Object.entries(map).forEach(([key, value]) => {
    document.querySelectorAll(`[data-custom-copy="${key}"]`).forEach((el) => { el.textContent = value; });
  });
}

function mountCustomThemeControls(themePanel) {
  if (!themePanel || themePanel.querySelector(".theme-custom")) return;
  const [title, desc, badge, bg, surface, ink, accent, apply, reset] = customThemeLabels();
  themePanel.insertAdjacentHTML("beforeend", `
    <section class="theme-custom" data-active="false" aria-labelledby="customThemeTitle">
      <div class="theme-custom-head">
        <div>
          <h3 id="customThemeTitle" data-custom-copy="title">${title}</h3>
          <p data-custom-copy="desc">${desc}</p>
        </div>
        <span class="theme-custom-badge" data-custom-copy="badge">${badge}</span>
      </div>
      <div class="theme-custom-grid">
        <div class="theme-color-field">
          <label><span data-custom-copy="bg">${bg}</span><span class="theme-color-hex" data-custom-hex="bg"></span></label>
          <input type="color" data-custom-color="bg" aria-label="${bg}">
        </div>
        <div class="theme-color-field">
          <label><span data-custom-copy="surface">${surface}</span><span class="theme-color-hex" data-custom-hex="surface"></span></label>
          <input type="color" data-custom-color="surface" aria-label="${surface}">
        </div>
        <div class="theme-color-field">
          <label><span data-custom-copy="ink">${ink}</span><span class="theme-color-hex" data-custom-hex="ink"></span></label>
          <input type="color" data-custom-color="ink" aria-label="${ink}">
        </div>
        <div class="theme-color-field">
          <label><span data-custom-copy="accent">${accent}</span><span class="theme-color-hex" data-custom-hex="accent"></span></label>
          <input type="color" data-custom-color="accent" aria-label="${accent}">
        </div>
      </div>
      <div class="theme-preview" aria-hidden="true">
        <div class="theme-preview-bar"></div>
        <div class="theme-preview-body">
          <div class="theme-preview-title"></div>
          <div class="theme-preview-line"></div>
          <span class="theme-preview-chip"></span>
        </div>
      </div>
      <div class="theme-custom-actions">
        <button class="btn btn-primary" type="button" id="customThemeApply" data-custom-copy="apply">${apply}</button>
        <button class="btn btn-ghost" type="button" id="customThemeReset" data-custom-copy="reset">${reset}</button>
      </div>
    </section>
  `);
  syncCustomThemeControls(readCustomTheme() || CUSTOM_THEME_DEFAULT);
}

function readCustomThemeControls() {
  const next = { ...CUSTOM_THEME_DEFAULT };
  document.querySelectorAll("[data-custom-color]").forEach((input) => {
    next[input.dataset.customColor] = input.value;
  });
  return sanitizeCustomTheme(next);
}

document.addEventListener("DOMContentLoaded", () => {
  // Lang toggle
  const saved = (() => { try { return localStorage.getItem("onehada.lang"); } catch { return null; } })();
  applyLang(saved || "ko");
  document.querySelectorAll(".lang-toggle button").forEach((b) => {
    b.addEventListener("click", () => applyLang(b.dataset.lang));
  });

  // Mobile menu
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Theme picker
  const themeBtn = document.getElementById("themeBtn");
  const themeOverlay = document.getElementById("themeOverlay");
  const themePanel = themeOverlay && themeOverlay.querySelector(".theme-panel");
  const themeClose = document.getElementById("themeClose");
  const themeCards = Array.from(document.querySelectorAll(".theme-card"));
  let lastThemeFocus = null;

  mountCustomThemeControls(themePanel);
  applyTheme(readSavedTheme());

  function closeThemePanel() {
    if (!themeOverlay || !themeBtn) return;
    themeOverlay.classList.remove("open");
    themeOverlay.setAttribute("aria-hidden", "true");
    themeBtn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("theme-lock");
    (lastThemeFocus || themeBtn).focus();
  }

  function openThemePanel() {
    if (!themeOverlay || !themePanel || !themeBtn) return;
    lastThemeFocus = document.activeElement;
    themeOverlay.classList.add("open");
    themeOverlay.setAttribute("aria-hidden", "false");
    themeBtn.setAttribute("aria-expanded", "true");
    document.body.classList.add("theme-lock");
    const active = themeOverlay.querySelector('.theme-card[aria-pressed="true"]');
    (active || themePanel).focus();
  }

  if (themeBtn && themeOverlay) {
    themeBtn.addEventListener("click", openThemePanel);
    themeClose && themeClose.addEventListener("click", closeThemePanel);
    themeOverlay.addEventListener("click", (e) => {
      if (e.target === themeOverlay) closeThemePanel();
    });
    themeCards.forEach((card) => {
      card.addEventListener("click", () => applyTheme(card.dataset.themeOption));
    });
    themeOverlay.querySelectorAll("[data-custom-color]").forEach((input) => {
      input.addEventListener("input", () => applyCustomTheme(readCustomThemeControls()));
    });
    document.getElementById("customThemeApply")?.addEventListener("click", () => {
      applyCustomTheme(readCustomThemeControls());
    });
    document.getElementById("customThemeReset")?.addEventListener("click", () => {
      applyCustomTheme(CUSTOM_THEME_DEFAULT);
    });
    themeOverlay.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeThemePanel();
        return;
      }
      if (e.key !== "Tab") return;
      const focusables = Array.from(themeOverlay.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))
        .filter((el) => !el.disabled && el.offsetParent !== null);
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });
  }

  // ===== Campaign hero slider =====
  const cmpTrack = document.getElementById("cmpTrack");
  if (cmpTrack) {
    let slides = Array.from(cmpTrack.children);
    const prev = document.getElementById("cmpPrev");
    const next = document.getElementById("cmpNext");
    const cur = document.getElementById("cmpCur");
    const total = document.getElementById("cmpTotal");
    const prog = document.getElementById("cmpProg");
    const pauseBtn = document.getElementById("cmpPause");
    const pauseIcon = document.getElementById("cmpPauseIcon");

    const DURATION = 6000;
    const TICK = 50;
    let idx = 0, elapsed = 0, timer = null, paused = false;

    function refreshSlides() {
      slides = Array.from(cmpTrack.children);
      if (idx >= slides.length) idx = 0;
      if (total) total.textContent = String(slides.length).padStart(2, "0");
      updateUi();
    }

    refreshSlides();

    function slideW() { return slides[0]?.getBoundingClientRect().width || 1; }
    function go(to, smooth = true) {
      if (!slides.length) return;
      idx = (to + slides.length) % slides.length;
      cmpTrack.scrollTo({ left: idx * slideW(), behavior: smooth ? "smooth" : "auto" });
      elapsed = 0; updateUi();
    }
    function updateUi() {
      if (cur) cur.textContent = String(idx + 1).padStart(2, "0");
      if (prog) prog.style.width = ((elapsed / DURATION) * 100).toFixed(1) + "%";
    }
    function tick() {
      if (paused) return;
      elapsed += TICK;
      if (elapsed >= DURATION) { go(idx + 1); return; }
      updateUi();
    }
    function start() { stop(); timer = setInterval(tick, TICK); }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }
    function setPaused(p) {
      paused = p;
      pauseBtn && pauseBtn.setAttribute("aria-pressed", p ? "true" : "false");
      if (pauseIcon) {
        pauseIcon.innerHTML = p
          ? '<path d="M8 5v14l11-7z"/>'
          : '<rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/>';
      }
    }
    prev && prev.addEventListener("click", () => go(idx - 1));
    next && next.addEventListener("click", () => go(idx + 1));
    pauseBtn && pauseBtn.addEventListener("click", () => setPaused(!paused));
    cmpTrack.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") { e.preventDefault(); go(idx + 1); }
      if (e.key === "ArrowLeft")  { e.preventDefault(); go(idx - 1); }
    });
    const root = cmpTrack.parentElement;
    root.addEventListener("mouseenter", () => setPaused(true));
    root.addEventListener("mouseleave", () => setPaused(false));
    root.addEventListener("focusin", () => setPaused(true));
    root.addEventListener("focusout", (e) => {
      if (!root.contains(e.relatedTarget)) setPaused(false);
    });
    let scrollT;
    cmpTrack.addEventListener("scroll", () => {
      clearTimeout(scrollT);
      scrollT = setTimeout(() => {
        const newIdx = Math.round(cmpTrack.scrollLeft / slideW());
        if (newIdx !== idx) { idx = newIdx; elapsed = 0; updateUi(); }
      }, 80);
    }, { passive: true });
    document.addEventListener("visibilitychange", () => setPaused(document.hidden));
    window.addEventListener("resize", () => {
      cmpTrack.scrollTo({ left: idx * slideW(), behavior: "auto" });
    });
    window.addEventListener("onehada:campaigns-rendered", () => {
      refreshSlides();
      cmpTrack.scrollTo({ left: 0, behavior: "auto" });
    });
    updateUi(); start();
  }

  // ===== services.html: filter =====
  const filterRow = document.getElementById("filter");
  const list = document.getElementById("svcList");
  if (filterRow && list) {
    const params = new URLSearchParams(location.search);
    const initial = params.get("who") || "all";
    setFilter(initial);
    filterRow.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-filter]"); if (!btn) return;
      setFilter(btn.dataset.filter);
    });
    function setFilter(key) {
      filterRow.querySelectorAll("button").forEach((b) => {
        b.setAttribute("aria-pressed", b.dataset.filter === key ? "true" : "false");
      });
      list.querySelectorAll(".svc-row").forEach((row) => {
        const tags = (row.dataset.tags || "").split(/\s+/);
        const show = key === "all" || tags.includes(key);
        row.style.display = show ? "" : "none";
      });
    }
  }

  // ===== support.html: donate flow =====
  const freq = document.getElementById("freq");
  const amount = document.getElementById("amount");
  const customAmount = document.getElementById("customAmount");
  const submitLabel = document.getElementById("submitLabel");
  if (freq && amount && submitLabel) {
    let state = { freq: "monthly", amount: 20000 };
    renderDonateLabel = function () {
      const lang = document.documentElement.lang || "ko";
      const a = state.amount.toLocaleString(lang === "ru" ? "ru-RU" : (lang === "en" ? "en-US" : "ko-KR"));
      const lbl = {
        ko: state.freq === "monthly" ? `매월 ${a}원 후원 시작` : `${a}원 후원하기`,
        ru: state.freq === "monthly" ? `Ежемесячно ₩${a} — начать` : `Пожертвовать ₩${a}`,
        en: state.freq === "monthly" ? `Start monthly ₩${a}` : `Donate ₩${a}`,
      }[lang] || `${a}`;
      submitLabel.textContent = lbl;
    };
    freq.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-freq]"); if (!btn) return;
      freq.querySelectorAll("button").forEach((b) =>
        b.setAttribute("aria-pressed", b === btn ? "true" : "false"));
      state.freq = btn.dataset.freq; renderDonateLabel();
    });
    amount.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-amount]"); if (!btn) return;
      amount.querySelectorAll("button").forEach((b) =>
        b.setAttribute("aria-pressed", b === btn ? "true" : "false"));
      state.amount = Number(btn.dataset.amount);
      if (customAmount) customAmount.value = "";
      renderDonateLabel();
    });
    if (customAmount) {
      customAmount.addEventListener("input", () => {
        const v = Number(customAmount.value || 0);
        if (v > 0) {
          state.amount = v;
          amount.querySelectorAll("button").forEach((b) =>
            b.setAttribute("aria-pressed", "false"));
          renderDonateLabel();
        }
      });
    }
    renderDonateLabel();
  }
});
