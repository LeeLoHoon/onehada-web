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
├── firebase-init.js Firebase 초기화(config placeholder + guard)
├── public-data.js   공개 페이지 동적 데이터 로드(copy/stories/campaigns)
├── manage-9c3f.html 관리자 페이지(URL slug 기반)
├── admin.js         관리자 CRUD + 이미지 업로드
├── admin.css        관리자 UI 스타일
├── site-config.js   user/admin URL 기준값(single source of truth)
├── robots.txt       검색엔진 크롤링 제어
└── README.md
```

## Firebase 기반 Lightweight CMS

운영자가 git 없이 웹에서 수정한 내용을 바로 공개 페이지에 반영하기 위해 Firestore + Storage를 사용합니다.

- 컬렉션
  - `stories` (published, order, tag/title/description ko·ru·en, imageUrl)
  - `campaigns` (published, order, tag/title/description ko·ru·en, imageUrl, linkUrl)
  - `copy` (문구 key별 ko·ru·en override)
- Storage 경로
  - `stories/*`
  - `campaigns/*`

### 1) Firebase 콘솔 설정

1. Firebase 프로젝트 생성
2. Firestore Database 활성화
3. Storage 활성화
4. Web App 등록 후 config 값 확보
5. `firebase-init.js` placeholder를 실제 값으로 교체

```js
export const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "...",
};
```

### 2) Firestore / Storage Rules 예시

> ⚠️ **아래 open rules는 로컬/비공개 개발 환경 전용입니다.**
> ⚠️ 외부 공개(인터넷 접근 가능) 환경에 절대 그대로 배포하지 마세요.
> ⚠️ Auth 없는 상태에서 공개 배포하면 누구나 데이터 읽기/수정/삭제(archived 처리 포함) 가능합니다.

Firestore (데모):

```txt
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /stories/{docId} { allow read, write: if true; }
    match /campaigns/{docId} { allow read, write: if true; }
    match /copy/{docId} { allow read, write: if true; }
  }
}
```

Storage (데모):

```txt
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /stories/{allPaths=**} { allow read, write: if true; }
    match /campaigns/{allPaths=**} { allow read, write: if true; }
  }
}
```

### 3) 관리자 페이지 사용

- `site-config.js`에서 URL 기준값을 관리
  - `siteConfig.userBasePath`: 사용자용 base URL 경로(기본 `/`)
  - `siteConfig.adminSlug`: 관리자 페이지 slug(기본 `manage-9c3f`)
- 관리자 URL: ``${userBasePath}/${adminSlug}.html``
  - 기본값 기준: `manage-9c3f.html` 접속
- URL 진입 후 Stories / Campaigns / Copy overrides CRUD 가능
- 이미지 업로드 제약: 이미지 파일만 허용, 5MB 초과 차단
- 삭제는 영구 삭제가 아니라 `archived:true` soft delete 처리
- 동시 편집 경고: 수정 화면 로드 시점의 `updatedAt`과 저장 직전 값이 다르면 overwrite confirm 표시
- `order` 중복 시 저장 전 confirm 경고 표시

#### URL 동기화 체크리스트

- `site-config.js`의 `siteConfig.adminSlug` 변경 시 아래를 함께 동기화:
  - 관리자 HTML 파일명 (`<adminSlug>.html`)
  - `robots.txt`의 `Disallow: /<adminSlug>.html`
- `siteConfig.userBasePath`는 **URL 산출 기준값**입니다.
  - 정적 호스팅에서는 실제 라우팅/파일 위치가 자동 변경되지 않습니다.
  - base path를 바꾸면 호스팅 설정(서브경로 배포)과 파일 배치도 함께 맞춰야 합니다.

### 4) 공개 페이지 반영 방식

- `index.html`, `stories.html`는 `public-data.js`를 통해 published 문서를 읽어 동적 렌더
- `archived:true` 문서는 공개 렌더 대상에서 제외
- Firebase 미설정 / 권한 오류 / 빈 컬렉션이면 기존 하드코딩 HTML 유지(폴백)
- `copy/{key}`가 있고 archived가 아니면 `script.js`의 i18n보다 우선 적용

### 5) soft delete 복구 방법

- Stories/Campaigns
  1. Firestore 콘솔에서 해당 문서 열기
  2. `archived`를 `false`로 변경
  3. 필요 시 `published`를 `true`로 변경
  4. `updatedAt` 갱신 후 저장
- Copy override
  1. Firestore 콘솔에서 `copy/{key}` 문서 열기
  2. `archived`를 `false`로 변경
  3. ko/ru/en 값 확인 후 저장

## 보안 한계 (중요)

- 현재 **Firebase Auth가 없습니다**.
- 관리자 URL을 분리해도 진짜 인증/인가를 대체하지 못합니다.
- auth 없이 관리자 페이지를 외부에 공개 배포하면 URL 접근 가능한 누구나 내용을 수정할 수 있습니다.
- production 운영 전에는 반드시 인증/권한 모델(Firebase Auth + Rules)로 전환하세요.

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
