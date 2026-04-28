# 원하다 (Onehada)

한민족 디아스포라(탈북민·고려인·조선족·사할린동포) 정착 지원 연합단체의 웹사이트 프로토타입.
순수 HTML / CSS / JS — 빌드 도구 없음.

## 실행 방법

빌드가 필요 없는 정적 사이트라 다음 중 아무 방법이나 쓰면 됩니다.

### 1. 브라우저에서 바로 열기 (제일 간단)

`index.html`을 더블클릭. 끝.

```bash
open index.html        # macOS
xdg-open index.html    # Linux
start index.html       # Windows
```

> 단점: 일부 브라우저는 `file://` 프로토콜에서 `localStorage` 같은 기능에 제한을 둘 수 있습니다.
> 언어 선택이 페이지를 넘기면 초기화되는 식의 이상 동작을 보면 아래 로컬 서버 방법으로 띄워주세요.

### 2. Python 로컬 서버 (권장)

```bash
python3 -m http.server 5174
```

브라우저에서 [http://localhost:5174](http://localhost:5174) 접속.

### 3. Node 로컬 서버

```bash
npx serve .
# 또는
npx http-server -p 5174
```

### 4. VS Code Live Server 확장

`Live Server` 확장 설치 → `index.html` 우클릭 → `Open with Live Server`.

## 프로젝트 구조

```
.
├── index.html       홈 (캠페인 캐러셀 + 히어로 + 서비스 + 스토리 + 후원 밴드)
├── services.html    서비스 상세 (대상자별 필터, 8개 서비스)
├── stories.html     스토리 (6개 사례 + 디아스포라 아카이브)
├── support.html     후원·참여 (정기/일시 후원 폼, 자원봉사)
├── about.html       단체 소개 (미션·연혁·투명성·거점)
├── styles.css       디자인 시스템 (CSS 변수, 따뜻한 테라코타 팔레트, 반응형, a11y)
├── script.js        i18n(한/러/영) · 캐러셀 · 필터 · 후원 폼 동적 라벨
└── README.md
```

## 주요 기능

- **3개 언어 토글** — 한국어 / Русский / English (헤더 우상단 KO/RU/EN). 선택은 `localStorage`로 페이지 이동 시 유지됨.
- **풀-너비 캠페인 캐러셀** — 자동 재생(6초), 좌우 화살표, 진행 바, 일시정지 버튼, 키보드 ←/→, 스와이프.
- **대상자별 진입 분기** — 홈에서 4개 그룹(탈북민·고려인·조선족·사할린동포) 선택 시 서비스 페이지에 필터 적용.
- **후원 폼** — 정기/일시 토글, 4개 금액 프리셋 + 직접 입력, 언어/금액 변경 시 버튼 라벨 동적 갱신.
- **접근성** — Skip link, `aria-pressed`/`aria-roledescription`, 포커스 링, WCAG 2.1 AA 지향.

## 디자인 결정

- **팔레트**: 따뜻한 크림 배경(`#FAF3E4`) + 테라코타 액센트(`#C25A3A`) + 코코아 다크(`#2B1B12`). 한국 비영리 사이트의 흔한 행정 블루를 의도적으로 회피.
- **IA**: 게시판 중심 구조 금지. 5섹션(당사자 진입 → 서비스 → 스토리 → 후원 → 조직).
- **타이포**: Pretendard CDN.

## 다음 단계 (아이디어)

- [ ] 캠페인 슬라이드 그라디언트 → 실제 행사 사진으로 교체
- [ ] 후원 결제 PG 연동
- [ ] 상담 신청 폼 백엔드 (개인정보 보호 우선)
- [ ] CMS 연동 (워드프레스 / Sanity / Strapi 검토)
- [ ] 실제 다국어 콘텐츠 검수 (러시아어 원어민)

---

© 2026 원하다 (Onehada).
