자바스크립트의 BOM (Browser Object Model)은 브라우저 자체를 제어하기 위한 객체들의 집합입니다. 대표적으로 `window`, `navigator`, `location`, `history`, `screen` 등이 포함됩니다. 아래는 **BOM 객체별로 다양한 예제**를 정리한 것입니다.

---

## ✅ 1. `window` 객체

`window`는 브라우저 창 전체를 의미하며, 최상위 객체입니다.

### 📌 예제: 알림 창 띄우기

```javascript
window.alert("안녕하세요!");
```

### 📌 예제: 브라우저 창 정보 확인

```javascript
console.log("창 너비:", window.innerWidth);
console.log("창 높이:", window.innerHeight);
```

### 📌 예제: 일정 시간 후 코드 실행 (`setTimeout`)

```javascript
setTimeout(() => {
  alert("3초 후 실행됨!");
}, 3000);
```

---

## ✅ 2. `navigator` 객체

브라우저와 사용자의 시스템 정보를 담고 있음

### 📌 예제: 브라우저 정보 출력

```javascript
console.log("브라우저 이름:", navigator.appName);
console.log("사용자 에이전트:", navigator.userAgent);
console.log("온라인 상태:", navigator.onLine);
```

### 📌 예제: 언어 확인

```javascript
console.log("사용 언어:", navigator.language);
```

---

## ✅ 3. `location` 객체

현재 페이지의 URL 정보에 접근하거나 다른 페이지로 이동할 때 사용

### 📌 예제: 현재 URL 정보 출력

```javascript
console.log("전체 URL:", location.href);
console.log("호스트:", location.hostname);
console.log("경로:", location.pathname);
```

### 📌 예제: 다른 페이지로 이동

```javascript
location.href = "https://www.google.com";
```

### 📌 예제: 페이지 새로고침

```javascript
location.reload();
```

---

## ✅ 4. `history` 객체

사용자의 브라우저 방문 기록을 제어

### 📌 예제: 뒤로 가기 / 앞으로 가기

```javascript
history.back();   // 뒤로
history.forward(); // 앞으로
```

### 📌 예제: 히스토리 길이 확인

```javascript
console.log("방문한 페이지 수:", history.length);
```

---

## ✅ 5. `screen` 객체

사용자의 화면 정보 제공

### 📌 예제: 화면 해상도 확인

```javascript
console.log("전체 너비:", screen.width);
console.log("전체 높이:", screen.height);
```

### 📌 예제: 사용할 수 있는 화면 영역

```javascript
console.log("사용 가능한 너비:", screen.availWidth);
console.log("사용 가능한 높이:", screen.availHeight);
```

---

## ✅ 실전 응용 예제: 사용자의 언어에 따라 인사 메시지

```javascript
const lang = navigator.language;

if (lang.startsWith("ko")) {
  alert("안녕하세요!");
} else if (lang.startsWith("en")) {
  alert("Hello!");
} else {
  alert("Welcome!");
}
```

---

## ✅ 요약표

| 객체          | 용도                  | 주요 메서드/속성                               |
| ----------- | ------------------- | --------------------------------------- |
| `window`    | 브라우저 창 제어, 전역 함수 보유 | `alert()`, `setTimeout()`, `innerWidth` |
| `navigator` | 브라우저 및 OS 정보 접근     | `userAgent`, `language`, `onLine`       |
| `location`  | URL 정보 확인 및 변경      | `href`, `reload()`, `assign()`          |
| `history`   | 방문 기록 탐색            | `back()`, `forward()`, `length`         |
| `screen`    | 화면 해상도 정보 제공        | `width`, `height`, `availWidth`         |

---


BOM(Browser Object Model)을 활용한 **미니 프로젝트**는 웹 브라우저의 기능(예: `window`, `navigator`, `screen`, `location`, `history` 등)을 사용해 브라우저 중심의 재미있는 웹 기능을 구현하는 것이 핵심입니다.

아래는 대표적인 BOM 객체를 활용한 **미니 프로젝트 3가지 예시**입니다. 각 예제는 HTML + JavaScript로 구성되어 있고, 쉽게 실습할 수 있습니다.

---

## ✅ 미니 프로젝트 1: 현재 위치와 브라우저 정보 표시기

### 🎯 기능

* 사용자 브라우저 종류, 화면 크기, 언어, 위치(위도/경도)를 표시

### 💡 사용 BOM 객체

* `window.navigator`, `window.screen`, `window.location`

### 📄 코드 예시

```html
<!DOCTYPE html>
<html>
<head>
  <title>BOM 브라우저 정보</title>
</head>
<body>
  <h2>📱 브라우저 정보</h2>
  <ul id="info"></ul>

  <script>
    const info = document.getElementById("info");
    const li = (text) => `<li>${text}</li>`;

    info.innerHTML += li(`언어: ${navigator.language}`);
    info.innerHTML += li(`브라우저: ${navigator.userAgent}`);
    info.innerHTML += li(`화면 해상도: ${screen.width}x${screen.height}`);

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        info.innerHTML += li(`위도: ${position.coords.latitude}`);
        info.innerHTML += li(`경도: ${position.coords.longitude}`);
      }, () => {
        info.innerHTML += li("위치 정보를 가져올 수 없습니다.");
      });
    } else {
      info.innerHTML += li("이 브라우저는 위치 정보를 지원하지 않습니다.");
    }
  </script>
</body>
</html>
```

---

## ✅ 미니 프로젝트 2: 탭 닫기 전에 경고하기

### 🎯 기능

* 사용자가 페이지를 떠날 때 경고 메시지를 띄워 확인 받기

### 💡 사용 BOM 객체

* `window.onbeforeunload`

### 📄 코드 예시

```html
<!DOCTYPE html>
<html>
<head>
  <title>탭 닫기 방지</title>
</head>
<body>
  <h2>작업 중입니다. 이 페이지를 닫지 마세요!</h2>
  <script>
    window.onbeforeunload = function () {
      return "작업 내용이 저장되지 않을 수 있습니다. 정말 떠나시겠습니까?";
    };
  </script>
</body>
</html>
```

---

## ✅ 미니 프로젝트 3: 타이머 알림 앱

### 🎯 기능

* 사용자가 입력한 시간 후에 알림을 띄움

### 💡 사용 BOM 객체

* `window.setTimeout`, `window.alert`

### 📄 코드 예시

```html
<!DOCTYPE html>
<html>
<head>
  <title>⏰ 알림 타이머</title>
</head>
<body>
  <h2>알림 타이머 설정</h2>
  <input type="number" id="sec" placeholder="초 입력" />
  <button onclick="setTimer()">시작</button>

  <script>
    function setTimer() {
      const sec = document.getElementById("sec").value;
      if (isNaN(sec) || sec <= 0) {
        alert("올바른 시간을 입력하세요.");
        return;
      }
      alert(`${sec}초 후 알림이 울립니다.`);
      setTimeout(() => {
        alert("⏰ 시간이 되었습니다!");
      }, sec * 1000);
    }
  </script>
</body>
</html>
```


