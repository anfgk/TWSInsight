# TWS Official Website Clone

## 📋 프로젝트 개요

TWS(TWENTY FOUR SEVEN WITH US) 공식 웹사이트를 클론한 반응형 웹 프로젝트입니다. 
현대적인 웹 기술을 활용하여 다국어 지원, 반응형 디자인, 인터랙티브 요소를 구현했습니다.

## 🚀 주요 기능

### 🌐 다국어 지원 (i18next)
- 한국어, 영어, 일본어 3개 언어 지원
- 실시간 언어 전환 기능
- 브라우저 언어 자동 감지
- 로컬 스토리지 기반 언어 설정 저장

### 📱 반응형 디자인
- 모바일, 태블릿, 데스크톱 최적화
- CSS Grid & Flexbox 활용
- 미디어 쿼리를 통한 반응형 레이아웃

### 🎨 인터랙티브 요소
- Slick 슬라이더를 활용한 이미지 캐러셀
- 부드러운 스크롤 애니메이션
- 모바일 햄버거 메뉴
- 스크롤 기반 헤더 스타일 변경

### ⚡ 성능 최적화
- Service Worker를 통한 오프라인 캐싱
- 이미지 최적화 (WebP 포맷 사용)
- CSS/JS 파일 압축 및 최적화

## 🛠️ 기술 스택

### Frontend
- **HTML5** - 시맨틱 마크업
- **CSS3** - Flexbox, Grid, CSS Variables
- **JavaScript (ES6+)** - 모듈화된 구조
- **Slick Slider** - 이미지 캐러셀

### 다국어 지원
- **i18next** - 국제화 라이브러리
- **i18next-browser-languagedetector** - 언어 감지

### 성능 & 최적화
- **Service Worker** - 오프라인 캐싱
- **WebP** - 이미지 포맷 최적화

## 📁 프로젝트 구조

```
tws_insight/
├── index.html              # 메인 HTML 파일
├── style.css               # 메인 스타일시트
├── script.js               # 메인 JavaScript 파일
├── sw.js                   # Service Worker
├── js/
│   ├── language.js         # 다국어 지원 메인 모듈
│   ├── config/
│   │   ├── constants.js    # 상수 정의
│   │   └── i18n.js         # i18next 설정
│   ├── services/
│   │   ├── languageService.js    # 언어 관리 서비스
│   │   └── sectionUpdater.js     # 섹션별 콘텐츠 업데이트
│   └── utils/
│       └── dom.js          # DOM 조작 유틸리티
├── img/                    # 이미지 리소스
├── slick/                  # Slick 슬라이더 라이브러리
└── README.md               # 프로젝트 문서
```

## 🎯 구현 세부사항

### 1. 모듈화된 JavaScript 구조
```javascript
// 네비게이션 모듈
const navigation = {
  init() { /* 초기화 */ },
  handleScroll() { /* 스크롤 이벤트 */ },
  handleMobileMenu() { /* 모바일 메뉴 */ }
};

// 슬라이더 모듈
const slider = {
  init() { /* 초기화 */ },
  initMainSlider() { /* 메인 슬라이더 */ },
  initAlbumSlider() { /* 앨범 슬라이더 */ }
};
```

### 2. 다국어 지원 시스템
```javascript
// i18next 설정
i18next.init({
  fallbackLng: 'ko',
  supportedLngs: ['ko', 'en', 'ja'],
  resources: {
    ko: { translation: { /* 한국어 번역 */ } },
    en: { translation: { /* 영어 번역 */ } },
    ja: { translation: { /* 일본어 번역 */ } }
  }
});
```

### 3. Service Worker 캐싱
```javascript
// 오프라인 캐싱 구현
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
```

## 🎨 디자인 특징

### 색상 팔레트
- Primary: #1e3f75 (진한 파랑)
- Secondary: #4278a1 (연한 파랑)
- Accent: crimson (강조색)

### 타이포그래피
- Font: Montserrat (Google Fonts)
- 반응형 폰트 크기 시스템

### 레이아웃
- CSS Grid & Flexbox 조합
- 모바일 퍼스트 접근법
- 깔끔하고 현대적인 디자인

## 📱 반응형 브레이크포인트

- **Mobile**: 390px 이하
- **Tablet**: 770px 이하
- **Desktop**: 770px 초과

## 🚀 실행 방법

1. 프로젝트 클론
```bash
git clone [repository-url]
cd tws_insight
```

2. 로컬 서버 실행
```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve .

# 또는 Live Server 확장 프로그램 사용
```

3. 브라우저에서 접속
```
http://localhost:8000
```

## 🔧 주요 구현 포인트

### 1. 모듈화 및 유지보수성
- 기능별로 분리된 JavaScript 모듈
- 재사용 가능한 유틸리티 함수
- 명확한 파일 구조

### 2. 사용자 경험 (UX)
- 부드러운 애니메이션과 전환 효과
- 직관적인 네비게이션
- 빠른 로딩 속도

### 3. 접근성 (Accessibility)
- 시맨틱 HTML 구조
- 키보드 네비게이션 지원
- 스크린 리더 호환성

### 4. 성능 최적화
- 이미지 최적화
- CSS/JS 압축
- 캐싱 전략

## 📈 학습 성과

### 기술적 성장
- **JavaScript ES6+** 모듈 시스템 활용
- **CSS Grid & Flexbox** 마스터링
- **반응형 웹 디자인** 구현 경험
- **다국어 지원** 시스템 구축

### 문제 해결 능력
- 복잡한 레이아웃 구현
- 성능 최적화 적용
- 크로스 브라우저 호환성 확보

### 협업 및 프로젝트 관리
- 체계적인 코드 구조 설계
- 문서화 및 주석 작성
- 버전 관리 시스템 활용

## 🔮 향후 개선 계획

- [ ] TypeScript 적용
- [ ] React/Vue.js 마이그레이션
- [ ] PWA 기능 강화
- [ ] SEO 최적화
- [ ] 테스트 코드 작성

## 📞 연락처

- **Email**: [your-email@example.com]
- **GitHub**: [your-github-username]
- **Portfolio**: [your-portfolio-url]

---

**프로젝트 기간**: 2024년 1월 - 2024년 2월  
**개발 인원**: 1명 (개인 프로젝트)  
**사용 기술**: HTML5, CSS3, JavaScript ES6+, i18next, Service Worker

