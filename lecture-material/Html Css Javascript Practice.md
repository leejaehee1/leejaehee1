
### 🔸 문제 1: 버튼을 누르면 텍스트가 바뀌는 페이지 만들기

**설명**: 버튼을 누르면 `<p>` 태그의 문장이 "Hello World!"로 바뀌게 하세요.

* **HTML**: 버튼과 텍스트 영역 추가
* **JavaScript**: 버튼 클릭 이벤트 처리

---

### 🔸 문제 2: 배경색을 바꾸는 버튼 만들기

**설명**: 버튼을 클릭할 때마다 배경색이 노란색으로 바뀌도록 하세요.

* **CSS**: `.yellow-background { background-color: yellow; }`
* **JavaScript**: `classList.toggle`로 스타일 변경

---

### 🔸 문제 3: 입력한 텍스트를 화면에 출력하기

**설명**: 사용자가 입력한 값을 버튼 클릭 시 아래 영역에 표시되게 하세요.

* **HTML**: `<input>`, `<button>`, `<p>`
* **JavaScript**: `document.getElementById().value`로 입력값 가져오기

---

### 🔸 문제 4: 마우스를 올리면 이미지가 바뀌는 페이지 만들기

**설명**: 이미지에 마우스를 올리면 다른 이미지로 변경되게 하세요.

* **HTML**: `<img>` 태그
* **JavaScript**: `onmouseover`, `onmouseout` 이벤트 사용

---

### 🔸 문제 5: 간단한 계산기 만들기 (더하기)

**설명**: 두 숫자를 입력받고 버튼을 누르면 두 숫자의 합을 아래에 출력하세요.

* **HTML**: `<input type="number">` 두 개, `<button>`, `<p>`
* **JavaScript**: `parseInt()`를 이용한 덧셈 처리

---

### ✅ 문제 1: 버튼을 누르면 텍스트가 바뀌는 페이지

```html
<!DOCTYPE html>
<html>
<head>
  <title>문제 1</title>
</head>
<body>
  <p id="text">원래 텍스트</p>
  <button onclick="changeText()">텍스트 변경</button>

  <script>
    function changeText() {
      document.getElementById("text").innerText = "Hello World!";
    }
  </script>
</body>
</html>
```

---

### ✅ 문제 2: 배경색을 바꾸는 버튼 만들기

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .yellow-background {
      background-color: yellow;
    }
  </style>
</head>
<body id="body">
  <button onclick="changeBackground()">배경색 변경</button>

  <script>
    function changeBackground() {
      document.getElementById("body").classList.toggle("yellow-background");
    }
  </script>
</body>
</html>
```

---

### ✅ 문제 3: 입력한 텍스트를 화면에 출력하기

```html
<!DOCTYPE html>
<html>
<head>
  <title>문제 3</title>
</head>
<body>
  <input type="text" id="inputText" placeholder="텍스트를 입력하세요">
  <button onclick="displayText()">출력</button>
  <p id="output"></p>

  <script>
    function displayText() {
      const input = document.getElementById("inputText").value;
      document.getElementById("output").innerText = input;
    }
  </script>
</body>
</html>
```

---

### ✅ 문제 4: 마우스를 올리면 이미지가 바뀌는 페이지

```html
<!DOCTYPE html>
<html>
<head>
  <title>문제 4</title>
</head>
<body>
  <img src="https://via.placeholder.com/150" 
       onmouseover="this.src='https://via.placeholder.com/150/ff0000'" 
       onmouseout="this.src='https://via.placeholder.com/150'" 
       alt="이미지">
</body>
</html>
```

---

### ✅ 문제 5: 간단한 계산기 (더하기)

```html
<!DOCTYPE html>
<html>
<head>
  <title>문제 5</title>
</head>
<body>
  <input type="number" id="num1" placeholder="숫자 1">
  <input type="number" id="num2" placeholder="숫자 2">
  <button onclick="calculateSum()">계산</button>
  <p id="result"></p>

  <script>
    function calculateSum() {
      const n1 = parseFloat(document.getElementById("num1").value);
      const n2 = parseFloat(document.getElementById("num2").value);
      document.getElementById("result").innerText = "합계: " + (n1 + n2);
    }
  </script>
</body>
</html>
```

---
