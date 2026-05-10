# GORANI SOUND — 웹사이트 수정 가이드

---

## 페이지 구조

| 파일 | 역할 |
|------|------|
| `index.html` | Home — 소개 + 대표 작업 + 최근 노트 |
| `work.html` | Selected Work — 작업 카드 전체 |
| `notes.html` | Sound Notes — 작업일지 |
| `credits.html` | Credits & Experience — 참여 이력 |
| `contact.html` | Contact — 연락 링크 |
| `style.css` | 공통 스타일 |
| `script.js` | 공통 스크립트 |

---

## 연락처 링크 교체

`contact.html`에서 아래 3곳을 수정합니다.

```html
<a href="mailto:your@email.com" ...>your@email.com</a>
<a href="https://instagram.com/your_handle" ...>@your_handle</a>
<a href="https://open.kakao.com/o/your_link" ...>카카오 오픈채팅</a>
```

`index.html`의 Hero CTA도 동일하게 확인하세요.

---

## 오디오 파일 추가 (work.html)

`assets/audio/` 폴더에 파일을 넣은 뒤, `work.html`에서 해당 카드의 주석을 해제합니다.

### 파일명 규칙

| 파일명 | 용도 |
|--------|------|
| `work01_before.mp3` | 첫 번째 카드 — Before |
| `work01_after.mp3` | 첫 번째 카드 — After |
| `work02_preview.mp3` | 두 번째 카드 — Preview |

### 주석 해제 방법

`work.html`에서 아래 형태의 주석을 찾아 `<!--` 와 `-->` 를 제거합니다.

```html
<!-- 오디오 파일 준비 후 아래 주석 해제: -->
<!--
<div class="audio-compare">
  ...
</div>
-->
```

↓ 해제 후

```html
<div class="audio-compare">
  <div class="audio-item">
    <span class="audio-label">BEFORE</span>
    <audio controls id="before-01">
      <source src="assets/audio/work01_before.mp3" type="audio/mpeg">
    </audio>
  </div>
  <div class="audio-item">
    <span class="audio-label audio-label--after">AFTER</span>
    <audio controls id="after-01">
      <source src="assets/audio/work01_after.mp3" type="audio/mpeg">
    </audio>
  </div>
</div>
```

---

## 작업 카드 추가 (work.html)

아래 4가지 유형 중 상황에 맞는 카드를 복사해 붙여넣습니다.

### Preview Available
```html
<article class="work-card fade-in">
  <div class="work-card-header">
    <div class="work-card-meta">
      <h3 class="work-title">작품 제목</h3>
      <p class="work-info">Short Film &nbsp;·&nbsp; 역할 &nbsp;·&nbsp; 연도</p>
    </div>
    <span class="badge badge--open">Preview Available</span>
  </div>
  <!--
  <div class="audio-compare">
    <div class="audio-item">
      <span class="audio-label">BEFORE</span>
      <audio controls id="before-03">
        <source src="assets/audio/work03_before.mp3" type="audio/mpeg">
      </audio>
    </div>
    <div class="audio-item">
      <span class="audio-label audio-label--after">AFTER</span>
      <audio controls id="after-03">
        <source src="assets/audio/work03_after.mp3" type="audio/mpeg">
      </audio>
    </div>
  </div>
  -->
  <p class="work-note work-note--bordered">작업 노트</p>
</article>
```

### Credit Only (상업 작업 — 오디오 없음)
```html
<article class="work-card fade-in">
  <div class="work-card-header">
    <div class="work-card-meta">
      <h3 class="work-title">미공개 상업 드라마</h3>
      <p class="work-info">Commercial Drama &nbsp;·&nbsp; 역할 &nbsp;·&nbsp; 연도</p>
    </div>
    <span class="badge badge--muted">Credit Only</span>
  </div>
  <p class="work-note">상업 저작권으로 인해 오디오를 공개하지 않습니다.</p>
</article>
```

---

## 작업 노트 추가 (notes.html)

아래 블록을 복사해 `notes.html`의 노트 목록에 추가합니다.

```html
<article class="note-card fade-in">
  <div class="note-card-header">
    <h3 class="note-title">노트 제목</h3>
    <div class="note-meta">
      <span class="note-meta-text">Dialogue</span>  <!-- Dialogue / Foley / Space / Feedback / Mixing -->
      <span class="note-meta-text">·</span>
      <span class="note-meta-text">Short Film</span> <!-- Short Film / Commercial / Personal / Class -->
      <span class="note-meta-text">·</span>
      <span class="note-meta-text">2025-01-01</span>
      <span class="badge badge--open" style="margin-left: 4px;">Published</span>
      <!-- Draft: badge--muted / Published: badge--open / Archived: badge--muted -->
    </div>
  </div>
  <div class="note-body">
    <div class="note-row">
      <p class="note-row-label">Problem</p>
      <p class="note-row-text">어떤 문제가 있었는가</p>
    </div>
    <div class="note-row">
      <p class="note-row-label">Approach</p>
      <p class="note-row-text">어떻게 접근했는가</p>
    </div>
    <div class="note-row">
      <p class="note-row-label">Result</p>
      <p class="note-row-text">어떤 결과를 얻었는가</p>
    </div>
  </div>
</article>
```

---

## 크레딧 항목 추가 (credits.html)

```html
<li class="credits-item fade-in">
  <span class="credits-year">2025</span>
  <div class="credits-info">
    <span class="credits-title">작품 제목 또는 미공개</span>
    <span class="credits-role">장르 &nbsp;·&nbsp; 역할</span>
  </div>
  <span class="badge badge--open">공개</span>
  <!-- 상태: badge--open(공개) / badge--muted(Credit Only / Details on Request) -->
</li>
```

---

## 홈 대표 작업 교체 (index.html)

`index.html`의 Featured Work 섹션에서 카드 2개의 제목·메타·노트를 직접 수정합니다.
홈 카드에는 오디오 플레이어를 넣지 않습니다. 클릭 유도 없이 배지와 노트만 표시합니다.

---

## 배포

GitHub Pages 또는 Netlify에 `01_WEBSITE` 폴더 전체를 업로드합니다.
빌드 과정 없이 정적 파일 그대로 동작합니다.
