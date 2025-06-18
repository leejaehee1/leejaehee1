## 🎨 1. **디지털 명함 (Personal Card)**

### ✅ 배우는 것:

* Box model
* Flexbox
* 폰트, 색상 조합
* hover 효과

### 🧩 아이디어:

```html
<div class="card">
  <h2>이재희</h2>
  <p>웹 프론트엔드 개발자</p>
  <a href="mailto:me@example.com">이메일 보내기</a>
</div>
```

```css
.card {
  background: white;
  padding: 20px;
  width: 300px;
  margin: auto;
  border-radius: 10px;
  box-shadow: 4px 4px 10px rgba(0,0,0,0.2);
  text-align: center;
}
```

---

## 🕹️ 2. **간단한 계산기 레이아웃**

> 실제 계산은 안 해도 되고, **버튼 배열과 스타일링** 연습용!

### ✅ 배우는 것:

* Grid/Flexbox
* 버튼 스타일
* 반응형 레이아웃

---

## 🖼️ 3. **포트폴리오 갤러리 레이아웃**

* 이미지 카드 형식으로 만들기
* 마우스를 올리면 색이 바뀌거나 설명이 보이게 하기

---

## 🎛️ 4. **CSS만으로 탭 UI**

### ✅ 배우는 것:

* `<input type="radio">` + `label` 조합
* `:checked`, `:hover`, `:nth-child` 등 활용

---

## 🐱 5. **귀여운 캐릭터 만들기 (CSS 드로잉)**

* 원(`border-radius`)이나 사각형, 삼각형(`border`) 등을 조합해서 고양이, 토끼, 로봇 등을 그림
* 참고 키워드: **CSS drawing, pure CSS art**

---

## 💡 6. **반응형 네비게이션 바 (Mobile Menu)**

* 화면이 작으면 햄버거 메뉴 아이콘이 보이고,
* 클릭하면 메뉴가 아래로 펼쳐지게 만들기

---

## 🎁 보너스: **기념일 타이머 / 디데이 박스**

* `html + css`로 디자인 먼저 만들고
* `JavaScript`를 배우면 타이머 동작도 추가 가능!

---

## 🧑‍💻 추천 순서 예시

| 단계  | 예제                 |
| --- | ------------------ |
| 1단계 | 명함 카드, 소개 페이지      |
| 2단계 | 버튼 계산기, 탭 UI       |
| 3단계 | 반응형 갤러리, 모바일 메뉴    |
| 4단계 | CSS 드로잉, 키보드 입력 UI |
| 보너스 | JS 연동해서 디데이 타이머 추가 |

---

원하는 스타일이나 테마(예: 게임, 애니, 카페, 쇼핑몰)가 있다면 맞춤 예제도 추천해드릴게요!

---

1. 디지털 명함 (Personal Card)

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>디지털 명함</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="card">
    <img src="https://via.placeholder.com/100" alt="프로필 사진" class="avatar" />
    <h2>이재희</h2>
    <p>웹 프론트엔드 개발자</p>
    <a href="mailto:me@example.com">📧 이메일 보내기</a>
  </div>
</body>
</html>
```

```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f4f8;
  font-family: 'Segoe UI', sans-serif;
}

.card {
  background: white;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 250px;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 16px;
}

h2 {
  margin: 10px 0 5px;
  font-size: 1.5rem;
}

p {
  margin-bottom: 12px;
  color: #666;
}

a {
  display: inline-block;
  text-decoration: none;
  color: white;
  background-color: #007bff;
  padding: 10px 16px;
  border-radius: 8px;
  transition: background 0.3s;
}

a:hover {
  background-color: #0056b3;
}

```


2. 간단한 계산기 레이아웃
```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>계산기</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="calculator">
    <div class="display">0</div>
    <div class="buttons">
      <button>C</button>
      <button>←</button>
      <button>%</button>
      <button>/</button>

      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>*</button>

      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>-</button>

      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>+</button>

      <button>0</button>
      <button>.</button>
      <button class="equal">=</button>
    </div>
  </div>
</body>
</html>
```

```css
body {
  background: #f0f0f0;
  font-family: "Segoe UI", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.calculator {
  background: white;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.2);
  width: 300px;
}

.display {
  background: #222;
  color: #fff;
  text-align: right;
  font-size: 2rem;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 15px;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

button {
  padding: 20px;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  background-color: #e0e0e0;
  cursor: pointer;
  transition: background 0.2s;
}

button:hover {
  background-color: #d0d0d0;
}

.equal {
  grid-column: span 2;
  background-color: #4caf50;
  color: white;
}

.equal:hover {
  background-color: #45a045;
}
```


🖼️ 3. **포트폴리오 갤러리 레이아웃**

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>포트폴리오 갤러리</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="gallery">
    <div class="card">
      <img src="https://via.placeholder.com/300x200" alt="Project 1" />
      <div class="overlay">
        <h3>프로젝트 1</h3>
        <p>간단한 설명입니다.</p>
      </div>
    </div>
    <div class="card">
      <img src="https://via.placeholder.com/300x200" alt="Project 2" />
      <div class="overlay">
        <h3>프로젝트 2</h3>
        <p>반응형 웹사이트</p>
      </div>
    </div>
    <div class="card">
      <img src="https://via.placeholder.com/300x200" alt="Project 3" />
      <div class="overlay">
        <h3>프로젝트 3</h3>
        <p>JavaScript 기반 앱</p>
      </div>
    </div>
  </div>
</body>
</html>

```

```css
body {
  font-family: 'Segoe UI', sans-serif;
  background-color: #f9f9f9;
  padding: 40px;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.card {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.card img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
}

.card:hover img {
  transform: scale(1.05);
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 20px;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.card:hover .overlay {
  transform: translateY(0);
}

```


4. CSS만으로 탭 UI

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CSS 탭 UI</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="tab-container">
    <input type="radio" id="tab1" name="tab" checked />
    <label for="tab1">HTML</label>

    <input type="radio" id="tab2" name="tab" />
    <label for="tab2">CSS</label>

    <input type="radio" id="tab3" name="tab" />
    <label for="tab3">JavaScript</label>

    <div class="content" id="content1">
      <h2>HTML</h2>
      <p>웹 페이지의 구조를 만드는 마크업 언어입니다.</p>
    </div>
    <div class="content" id="content2">
      <h2>CSS</h2>
      <p>웹 페이지에 스타일을 적용하는 언어입니다.</p>
    </div>
    <div class="content" id="content3">
      <h2>JavaScript</h2>
      <p>웹 페이지를 동적으로 만들어주는 스크립트 언어입니다.</p>
    </div>
  </div>
</body>
</html>

```

```css
body {
  font-family: 'Segoe UI', sans-serif;
  padding: 40px;
  background-color: #f7f7f7;
}

.tab-container {
  max-width: 500px;
  margin: auto;
}

input[type="radio"] {
  display: none;
}

label {
  display: inline-block;
  padding: 12px 20px;
  background-color: #ddd;
  margin-right: 5px;
  cursor: pointer;
  border-radius: 8px 8px 0 0;
  transition: background 0.3s;
}

input[type="radio"]:checked + label {
  background-color: #4caf50;
  color: white;
}

.content {
  display: none;
  background-color: white;
  padding: 20px;
  border-radius: 0 8px 8px 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  margin-top: -5px;
}

/* 각각의 탭이 체크됐을 때 해당 content 보여주기 */
#tab1:checked ~ #content1,
#tab2:checked ~ #content2,
#tab3:checked ~ #content3 {
  display: block;
}
```


5. 귀여운 캐릭터 만들기 (CSS 드로잉)

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CSS 고양이</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="cat">
    <div class="ear left"></div>
    <div class="ear right"></div>
    <div class="face">
      <div class="eye left"></div>
      <div class="eye right"></div>
      <div class="nose"></div>
      <div class="whisker left"></div>
      <div class="whisker right"></div>
    </div>
  </div>
</body>
</html>

```

```css
body {
  background-color: #fffbe6;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.cat {
  position: relative;
  width: 200px;
  height: 200px;
}

.face {
  width: 100%;
  height: 100%;
  background: #f9c4d2;
  border-radius: 50%;
  position: relative;
  z-index: 1;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.ear {
  width: 60px;
  height: 60px;
  background: #f9c4d2;
  position: absolute;
  top: -30px;
  border-radius: 50% 50% 0 0;
  transform: rotate(45deg);
  z-index: 0;
}

.ear.left {
  left: 0;
}

.ear.right {
  right: 0;
}

.eye {
  width: 20px;
  height: 20px;
  background: black;
  border-radius: 50%;
  position: absolute;
  top: 60px;
}

.eye.left {
  left: 50px;
}

.eye.right {
  right: 50px;
}

.nose {
  width: 16px;
  height: 16px;
  background: #d46a6a;
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
}

.whisker {
  width: 60px;
  height: 2px;
  background: #555;
  position: absolute;
  top: 105px;
}

.whisker.left {
  left: -60px;
}

.whisker.right {
  right: -60px;
}

```


6. 반응형 네비게이션 바 (Mobile Menu)

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>반응형 네비게이션</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <nav class="navbar">
    <div class="logo">MySite</div>

    <!-- 햄버거 메뉴 -->
    <input type="checkbox" id="toggle" class="toggle" />
    <label for="toggle" class="hamburger">&#9776;</label>

    <!-- 메뉴 항목 -->
    <ul class="menu">
      <li><a href="#">홈</a></li>
      <li><a href="#">소개</a></li>
      <li><a href="#">서비스</a></li>
      <li><a href="#">문의</a></li>
    </ul>
  </nav>
</body>
</html>


```

```css
body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #4caf50;
  padding: 10px 20px;
  position: relative;
}

.logo {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
}

/* 햄버거 메뉴 버튼 */
.hamburger {
  font-size: 2rem;
  color: white;
  cursor: pointer;
  display: none;
}

/* 메뉴 항목 */
.menu {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.menu li a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
}

/* 토글 체크박스 숨기기 */
.toggle {
  display: none;
}

/* 작은 화면 대응 */
@media (max-width: 768px) {
  .hamburger {
    display: block;
  }

  .menu {
    display: none;
    flex-direction: column;
    background-color: #4caf50;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
  }

  .toggle:checked + .hamburger + .menu {
    display: flex;
  }
}


```



보너스: 기념일 타이머 / 디데이 박스

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>D-Day 타이머</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="dday-box">
    <h2>우리의 기념일</h2>
    <p class="dday-result">Loading...</p>
  </div>

  <script src="script.js"></script>
</body>
</html>


```

```css
body {
  font-family: 'Segoe UI', sans-serif;
  background: #fce4ec;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.dday-box {
  background: white;
  padding: 30px 40px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  text-align: center;
}

.dday-box h2 {
  margin-bottom: 10px;
  color: #d81b60;
}

.dday-result {
  font-size: 2rem;
  font-weight: bold;
}

```
