다음은 **HTML + CSS의 `z-index` 속성**을 실습해볼 수 있는 **연습문제 3가지**입니다. 각 문제는 점점 난이도가 올라가며, 시각적으로 `z-index`가 어떻게 작동하는지 이해하도록 구성되어 있습니다.

---

### ✅ 문제 1: 박스 3개 겹치기

**설명**
세 개의 정사각형 박스를 서로 겹쳐서 배치해보세요.
각각 `z-index`를 조절하여 아래와 같은 순서로 보이도록 하세요.

* 빨간 박스: 맨 아래
* 파란 박스: 중간
* 초록 박스: 맨 위

**요구 사항**

* `position: absolute` 사용
* 모두 왼쪽 위에서 시작 (top: 50px, left: 50px 기준)
* 각 박스의 `z-index`를 조절

**예시 결과**

```plaintext
🟩 (맨 위)
🟦
🟥 (맨 아래)
```

---

### ✅ 문제 2: 메뉴 드롭다운 겹침 문제 해결

**설명**
기본 내비게이션 메뉴가 있고, 마우스를 올리면 드롭다운 메뉴가 나타나도록 만드세요.
드롭다운 메뉴가 다른 콘텐츠를 가리지 못하는 경우 `z-index`를 이용해 해결하세요.

**요구 사항**

* 메뉴 바 위에 `<div class="dropdown">` 생성
* 마우스를 올렸을 때 `display: block`
* `z-index`를 이용하여 항상 다른 요소 위에 보이도록 설정

---

### ✅ 문제 3: 모달창 만들기

**설명**
버튼을 클릭하면 화면 중앙에 \*\*모달 창(modal window)\*\*이 나타나고, 배경은 어둡게 처리되도록 만드세요.

**요구 사항**

* 버튼 클릭 시 `<div class="modal">` 표시
* 배경은 `<div class="overlay">`로 만들고, 어둡게 처리
* 모달이 오버레이보다 위에 오도록 `z-index` 사용
* `position: fixed` 사용

**정답 방향**

```html
<div class="overlay"></div>
<div class="modal"></div>
```

* `.overlay { z-index: 10 }`
* `.modal { z-index: 20 }`

---

### 💡 부가 팁

* `z-index`는 `position`이 `relative`, `absolute`, `fixed`, `sticky`일 때만 동작
* 숫자가 클수록 위에 위치함

---

## ✅ 문제 1 정답: 박스 3개 겹치기

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>z-index 연습1</title>
  <style>
    .box {
      width: 150px;
      height: 150px;
      position: absolute;
      top: 50px;
      left: 50px;
    }
    .red { background: red; z-index: 1; }
    .blue { background: blue; top: 80px; left: 80px; z-index: 2; }
    .green { background: green; top: 110px; left: 110px; z-index: 3; }
  </style>
</head>
<body>
  <div class="box red"></div>
  <div class="box blue"></div>
  <div class="box green"></div>
</body>
</html>
```

---

## ✅ 문제 2 정답: 드롭다운 메뉴 겹침 해결

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>z-index 연습2</title>
  <style>
    nav {
      background: #333;
      padding: 10px;
      color: white;
      position: relative;
    }
    .dropdown {
      display: none;
      background: white;
      color: black;
      position: absolute;
      top: 40px;
      left: 0;
      padding: 10px;
      z-index: 10;
      border: 1px solid #ccc;
    }
    nav:hover .dropdown {
      display: block;
    }
    .content {
      margin-top: 80px;
      padding: 20px;
      background: lightgray;
    }
  </style>
</head>
<body>
  <nav>
    메뉴
    <div class="dropdown">드롭다운 메뉴 내용</div>
  </nav>
  <div class="content">
    본문 콘텐츠입니다. 드롭다운 메뉴가 이 위에 보이도록 해야 합니다.
  </div>
</body>
</html>
```

---

## ✅ 문제 3 정답: 모달창 만들기

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>z-index 연습3</title>
  <style>
    body {
      margin: 0;
      font-family: sans-serif;
    }
    .overlay {
      display: none;
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 10;
    }
    .modal {
      display: none;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: white;
      padding: 30px;
      border-radius: 10px;
      z-index: 20;
    }
    .show {
      display: block;
    }
  </style>
</head>
<body>
  <button onclick="openModal()">모달 열기</button>

  <div class="overlay" id="overlay" onclick="closeModal()"></div>
  <div class="modal" id="modal">
    <h2>모달 창</h2>
    <p>이곳은 모달 내용입니다.</p>
    <button onclick="closeModal()">닫기</button>
  </div>

  <script>
    function openModal() {
      document.getElementById('overlay').classList.add('show');
      document.getElementById('modal').classList.add('show');
    }
    function closeModal() {
      document.getElementById('overlay').classList.remove('show');
      document.getElementById('modal').classList.remove('show');
    }
  </script>
</body>
</html>
```


