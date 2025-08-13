

### 📝 **연습문제: 시맨틱 태그로 웹 페이지 구조 만들기**

다음 요구사항을 만족하는 HTML5 문서를 작성하세요.

#### ✅ 요구사항

1. 전체 페이지는 `<html>`, `<head>`, `<body>`로 구성한다.
2. 페이지 제목은 \*\*"나의 첫 웹 페이지"\*\*로 설정한다.
3. 시맨틱 태그를 사용하여 다음 구조를 구현한다:

   * 상단에는 웹사이트의 **로고와 제목**을 포함하는 **헤더**(`header`)
   * 좌측에는 **내비게이션 메뉴**(`nav`)를 포함
   * 중앙에는 **메인 콘텐츠**(`main`)를 표시
   * 콘텐츠에는 `<article>`로 감싼 **블로그 글 1개**가 있다
   * 하단에는 **저작권 정보**가 포함된 **푸터**(`footer`)

#### 💡 조건

* `article` 안에는 제목(`h2`)과 본문(`p`)을 포함해야 합니다.
* `nav` 안에는 3개의 링크(`<a>`)를 포함하세요.

---

### 🎯 예시 출력 (구조)

```plaintext
------------------------------
|      header (로고, 제목)     |
------------------------------
| nav |       main           |
|     |  - article (글)       |
------------------------------
|          footer            |
------------------------------
```

---

### 💬 힌트

* `<section>`과 `<aside>`는 필수 아님
* 시맨틱 구조를 반영해 태그 선택
* 들여쓰기를 사용해 가독성을 높이기

---

### ✅ 문제 예시

**요구사항**:

* `header`, `nav`, `main`, `section`, `article`, `aside`, `footer` 태그를 사용하여 웹 페이지의 구조를 만들어보세요.
* 각각의 영역에는 제목과 간단한 내용을 포함하세요.

---

### ✅ 정답 코드

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>시맨틱 태그 연습</title>
</head>
<body>

  <header>
    <h1>나의 블로그</h1>
    <p>프론트엔드 공부 기록</p>
  </header>

  <nav>
    <ul>
      <li><a href="#">홈</a></li>
      <li><a href="#">HTML</a></li>
      <li><a href="#">CSS</a></li>
      <li><a href="#">JavaScript</a></li>
    </ul>
  </nav>

  <main>
    <section>
      <h2>최신 글</h2>
      <article>
        <h3>HTML5란 무엇인가?</h3>
        <p>HTML5는 웹 표준 기술로, 시맨틱 태그를 포함한 다양한 기능을 제공합니다.</p>
      </article>
      <article>
        <h3>CSS Flexbox</h3>
        <p>Flexbox는 레이아웃을 쉽게 구성할 수 있는 강력한 CSS 기능입니다.</p>
      </article>
    </section>

    <aside>
      <h2>광고 또는 관련 링크</h2>
      <p>이 공간에는 관련 글이나 광고를 배치할 수 있습니다.</p>
    </aside>
  </main>

  <footer>
    <p>&copy; 2025 나의 블로그. All rights reserved.</p>
  </footer>

</body>
</html>
```

---

### ✅ 주요 포인트

* **시맨틱 태그**로 각 영역의 의미를 명확히 표현
* `header`, `nav`, `main`, `section`, `article`, `aside`, `footer` 등을 올바르게 사용
* 웹 접근성과 유지보수를 고려한 구조



---

### 📝 **연습문제: 오디오와 비디오 삽입하기**

#### ✅ 요구사항

HTML5 문서를 작성하여 다음 멀티미디어 요소를 포함하세요.

1. 웹페이지 제목은 \*\*"미디어 갤러리"\*\*로 설정하세요.
2. `<h1>` 태그로 제목을 출력합니다: `🎵 나의 미디어 갤러리`
3. 아래 항목들을 `<section>` 안에 작성하세요:

   * 하나의 **오디오 플레이어** 삽입:

     * `audio.mp3` 파일을 자동 재생(auto play)하지 않고,
     * **controls** 속성만 사용하세요.
     * 텍스트 대체 콘텐츠를 포함하세요. 예: “브라우저가 오디오를 지원하지 않습니다.”
   * 하나의 **비디오 플레이어** 삽입:

     * `sample.mp4` 파일을 사용
     * **controls**와 **width="400"** 속성을 포함하세요.
     * 비디오 지원이 안 될 경우 메시지를 출력하세요.

#### 💡 조건

* 오디오와 비디오는 각각 `<audio>`, `<video>` 태그로 삽입할 것
* `<source>` 태그를 사용할 것
* HTML5의 기본 문서 구조 포함할 것

---

### 🎯 목표 구조 예시

```plaintext
<html>
  <head>
    제목: 미디어 갤러리
  </head>
  <body>
    제목: 🎵 나의 미디어 갤러리

    [오디오 플레이어]

    [비디오 플레이어]
  </body>
</html>
```

---

### ✅ 정답 코드

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>미디어 갤러리</title>
</head>
<body>

  <h1>🎵 나의 미디어 갤러리</h1>

  <section>
    <h2>🎧 오디오 재생</h2>
    <audio controls>
      <source src="audio.mp3" type="audio/mpeg">
      브라우저가 오디오를 지원하지 않습니다.
    </audio>
  </section>

  <section>
    <h2>🎬 비디오 감상</h2>
    <video width="400" controls>
      <source src="sample.mp4" type="video/mp4">
      브라우저가 비디오를 지원하지 않습니다.
    </video>
  </section>

</body>
</html>
```

---

### 💡 설명

* `<audio>`와 `<video>` 태그 모두 `controls` 속성을 통해 사용자에게 재생, 정지 등의 컨트롤 UI를 제공합니다.
* `<source>` 태그를 통해 다양한 형식의 미디어를 정의할 수 있습니다.
* 미디어가 지원되지 않을 경우 사용자에게 안내 메시지를 보여주는 fallback 텍스트도 포함되어 있습니다.
* `<section>`은 HTML5 시맨틱 구조를 반영한 컨텐츠 블록 구분에 적합합니다.



---

### 🎯 **연습문제: CSS3 선택자를 활용한 스타일링**

다음 HTML 구조를 참고하여 아래 요구사항을 만족하는 CSS를 작성하세요.

#### 🔹 HTML

```html
<ul class="menu">
  <li><a href="#">Home</a></li>
  <li><a href="#" class="active">About</a></li>
  <li><a href="#">Services</a></li>
  <li><a href="#">Contact</a></li>
</ul>

<p class="info" data-role="admin">관리자 전용 정보입니다.</p>
<p class="info" data-role="user">사용자 전용 정보입니다.</p>

<div class="container">
  <p>첫 번째 문단입니다.</p>
  <p>두 번째 문단입니다.</p>
</div>
```

---

#### ✏️ 요구사항

1. `.menu` 내부의 모든 `<a>` 태그에 파란색(`blue`) 텍스트 색상을 적용하세요.
2. `.menu` 내부에서 `.active` 클래스를 가진 `<a>` 태그에는 굵은 글씨(`bold`)를 적용하세요.
3. `data-role="admin"` 속성을 가진 요소의 글자 색을 빨간색(`red`)으로 설정하세요.
4. `.container` 안의 **첫 번째 `<p>` 요소**에만 회색(`gray`) 배경을 적용하세요.
5. `.container` 안의 모든 `<p>` 요소 텍스트의 **첫 글자**는 대문자로 설정하세요.

---

### ✅ **정답 CSS 코드**

```css
/* 1. .menu 내부의 모든 <a> 태그에 파란색 적용 */
.menu a {
  color: blue;
}

/* 2. .menu 내부에서 .active 클래스를 가진 <a> 태그는 굵게 */
.menu a.active {
  font-weight: bold;
}

/* 3. data-role="admin" 속성을 가진 요소는 빨간색 */
[data-role="admin"] {
  color: red;
}

/* 4. .container 안의 첫 번째 <p>만 회색 배경 */
.container p:first-of-type {
  background-color: gray;
}

/* 5. .container 안의 <p> 요소의 첫 글자만 대문자 스타일 */
.container p::first-letter {
  text-transform: uppercase;
}
```

---

### 🎯 선택자 요약

| 선택자                          | 설명                                             |
| ---------------------------- | ---------------------------------------------- |
| `.menu a`                    | `.menu` 클래스 안의 모든 `<a>` 요소 선택                  |
| `.menu a.active`             | `.menu` 안에 있는 `class="active"`를 가진 `<a>` 요소 선택 |
| `[data-role="admin"]`        | 속성이 `data-role="admin"`인 요소 선택                 |
| `.container p:first-of-type` | `.container` 안의 첫 번째 `<p>` 요소 선택               |
| `.container p::first-letter` | `.container` 안의 모든 `<p>`의 첫 글자 선택              |



---

## 🎯 **연습문제: 반응형 카드 레이아웃 만들기**

HTML과 CSS를 사용하여 다음 조건을 만족하는 반응형 웹 페이지를 만들어보세요.

### ✅ 조건

1. `.card` 클래스를 가진 박스를 가로 3개씩 배치합니다.
2. 화면 너비가 **768px 이하**가 되면, 카드가 **2개씩** 줄 바꿈됩니다.
3. 화면 너비가 **480px 이하**가 되면, 카드가 **1개씩** 세로로 배치됩니다.
4. 각 카드는 배경색, 패딩, 여백 등을 적절히 줍니다.

---

## ✅ **정답 코드**

### ✅ HTML

```html
<div class="container">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
  <div class="card">Card 4</div>
  <div class="card">Card 5</div>
  <div class="card">Card 6</div>
</div>
```

---

### ✅ CSS

```css
* {
  box-sizing: border-box;
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.card {
  background-color: #f2f2f2;
  padding: 20px;
  border: 1px solid #ccc;
  width: calc(33.333% - 11px);
  text-align: center;
}

/* 화면 너비가 768px 이하일 때: 2열 */
@media (max-width: 768px) {
  .card {
    width: calc(50% - 8px);
  }
}

/* 화면 너비가 480px 이하일 때: 1열 */
@media (max-width: 480px) {
  .card {
    width: 100%;
  }
}
```

---

### 💡 확인 포인트

* `flex-wrap: wrap;`을 사용하면 요소들이 줄 바꿈됩니다.
* `calc()`를 활용해 여백을 고려한 너비 계산을 합니다.
* 미디어 쿼리를 위에서 아래로 (큰 → 작은) 적용하여 반응형 스타일을 지정합니다.

---

### 아래는 **Flexible Grid Layout (유연한 그리드 레이아웃)** 개념을 연습할 수 있는 HTML/CSS 문제 3가지입니다. 주로 **CSS Flexbox**와 **가변 너비**를 활용합니다.

---

## ✅ 연습문제 1: 유동적인 3열 카드 그리드 만들기

### 🎯 조건

* `.grid` 안에 `.item` 요소를 6개 넣습니다.
* 기본적으로 가로 3개씩 정렬되도록 합니다.
* 가로 폭이 줄어들면 2개, 1개로 자동 줄 바뀌도록 합니다.
* `.item` 요소는 일정한 마진과 패딩, 배경색을 가집니다.

---

## ✅ 연습문제 2: 가변 너비 네비게이션 바 만들기

### 🎯 조건

* `.navbar` 안에 `.nav-item` 요소를 4개 만듭니다.
* 각각의 `.nav-item`은 동일한 너비를 가지며 한 줄에 배치됩니다.
* 뷰포트 너비에 따라 자동으로 크기가 줄어들되, 내부 텍스트가 줄바꿈되지 않게 합니다.
* 가운데 정렬, 배경색, hover 효과도 적용합니다.

---

## ✅ 연습문제 3: 가변 이미지 갤러리 만들기

### 🎯 조건

* `.gallery` 안에 이미지들을 가변적으로 정렬합니다.
* 이미지 개수는 8개 이상, 가로 화면에서 최대 4개씩 표시되도록 합니다.
* 이미지 크기는 유동적이며, 높이는 고정(예: `150px`)으로 유지합니다.
* 작은 화면에서는 한 줄에 2개, 매우 작은 화면에서는 1개만 보여지게 합니다.

---

물론입니다! 아래는 앞서 제시한 **Flexible Grid Layout** 연습문제 3개의 **정답 코드 예시**입니다. HTML과 CSS만 사용하여 구현한 예제이며, 반응형 디자인에 적합하도록 작성되었습니다.

---

## ✅ 정답 1: 유동적인 3열 카드 그리드

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>카드 그리드</title>
  <style>
    .grid {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
    }

    .item {
      flex: 1 1 calc(33.333% - 16px);
      background-color: #f2f2f2;
      padding: 20px;
      text-align: center;
      box-sizing: border-box;
    }

    @media (max-width: 768px) {
      .item {
        flex: 1 1 calc(50% - 16px);
      }
    }

    @media (max-width: 480px) {
      .item {
        flex: 1 1 100%;
      }
    }
  </style>
</head>
<body>
  <div class="grid">
    <div class="item">카드 1</div>
    <div class="item">카드 2</div>
    <div class="item">카드 3</div>
    <div class="item">카드 4</div>
    <div class="item">카드 5</div>
    <div class="item">카드 6</div>
  </div>
</body>
</html>
```

---

## ✅ 정답 2: 가변 너비 네비게이션 바

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>가변 네비게이션 바</title>
  <style>
    .navbar {
      display: flex;
      background-color: #222;
    }

    .nav-item {
      flex: 1;
      text-align: center;
      padding: 15px;
      color: white;
      text-decoration: none;
      white-space: nowrap;
      transition: background 0.3s;
    }

    .nav-item:hover {
      background-color: #444;
    }
  </style>
</head>
<body>
  <nav class="navbar">
    <a class="nav-item" href="#">홈</a>
    <a class="nav-item" href="#">소개</a>
    <a class="nav-item" href="#">서비스</a>
    <a class="nav-item" href="#">문의</a>
  </nav>
</body>
</html>
```

---

## ✅ 정답 3: 가변 이미지 갤러리

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>이미지 갤러리</title>
  <style>
    .gallery {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .gallery img {
      width: calc(25% - 10px);
      height: 150px;
      object-fit: cover;
    }

    @media (max-width: 768px) {
      .gallery img {
        width: calc(50% - 10px);
      }
    }

    @media (max-width: 480px) {
      .gallery img {
        width: 100%;
      }
    }
  </style>
</head>
<body>
  <div class="gallery">
    <img src="https://placehold.co/300x150?text=1" alt="img1">
    <img src="https://placehold.co/300x150?text=2" alt="img2">
    <img src="https://placehold.co/300x150?text=3" alt="img3">
    <img src="https://placehold.co/300x150?text=4" alt="img4">
    <img src="https://placehold.co/300x150?text=5" alt="img5">
    <img src="https://placehold.co/300x150?text=6" alt="img6">
    <img src="https://placehold.co/300x150?text=7" alt="img7">
    <img src="https://placehold.co/300x150?text=8" alt="img8">
  </div>
</body>
</html>
```

---
