
## 🎯 미니 프로젝트: **"나만의 여행 준비 웹 앱"**

> 사용자가 여행 날짜를 입력하고, 자동으로 디데이 계산, 날씨 예측 메시지, 준비물 점검, 비용 계산 등을 할 수 있는 **종합 웹 앱**입니다.

---

### ✅ 사용 기술과 연결되는 항목 정리

| JS 목차             | 적용 예시                 | 기능                         |
| ----------------- | --------------------- | -------------------------- |
| **1장\~2장**        | HTML+JS 구조, VSCode 세팅 | 기본 구조 설정                   |
| **3장** 변수/자료형/연산자 | 나이 계산, 비용 계산 등        | 숫자/문자/불린 연산                |
| **4장** 제어문        | 조건에 따라 다른 메시지         | if/for/while               |
| **5장** 함수/이벤트     | 버튼 클릭 → 기능 실행         | onClick 등                  |
| **6장** 객체         | 사용자/여행정보 구조화          | `user.name`, `trip.date`   |
| **7장** 배열         | 준비물 체크리스트             | `forEach`, `map`, `push` 등 |

---

## 🧪 프로젝트 개요

### 🔹 프로젝트명: **여행 플래너 TravelMate**

### 📌 주요 기능 구성

| 기능                   | 설명                           |
| -------------------- | ---------------------------- |
| 1. 여행 정보 입력          | 이름, 여행 시작일, 기간, 목적지 등        |
| 2. 디데이 계산            | 오늘 날짜 기준 여행까지 며칠 남았는지 출력     |
| 3. 준비물 체크리스트         | 체크박스로 구현된 `배열 기반 준비물 관리`     |
| 4. 여행 예산 계산기         | 항공 + 숙박 + 식비 + 기타 입력 → 총합 출력 |
| 5. 기념일/출발일 알림        | `Date 객체`로 남은 날짜 표시          |
| 6. 사용자 정보 저장 (객체 활용) | 이름, 목적지 등을 객체로 저장            |
| 7. 조건별 안내 메시지        | if/switch로 상황별 추천 메시지 출력     |
| 8. 반복 구조로 UI 출력      | `for`, `forEach`로 준비물 리스트 출력 |

---

### 🖼️ 예시 화면 흐름

1. **홈 화면**
   → “여행 계획을 시작해볼까요?” 버튼

2. **여행 정보 입력 폼**
   → 이름, 날짜, 목적지 등

3. **D-Day 계산 결과 화면**
   → “여행까지 D-10! 준비되셨나요?”

4. **체크리스트 화면**
   → Array 기반 반복 렌더링된 리스트 + 체크박스 이벤트

5. **비용 계산기**
   → 항목별 입력 → 버튼 클릭 시 총액 출력

---

### 💡 추가 학습 포인트

| 확장 주제        | 설명                |
| ------------ | ----------------- |
| LocalStorage | 사용자 데이터 저장 연습     |
| 기본 스타일링      | CSS로 간단한 레이아웃     |
| 조건부 렌더링      | 준비 완료 시 배경 색 변경 등 |

---

## 🧩 마무리

이 프로젝트는:

* **입력/출력**, **조건문/반복문**, **함수/객체/배열** 등 자바스크립트의 핵심 요소를 모두 종합해서 사용할 수 있고,
* 기초 학습자에게도 완성 후 성취감을 주는 실용적인 웹 앱입니다.


---

## 📁 폴더 구조 (기초 HTML/CSS/JS 구조)

```
travelmate/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
├── assets/
│   └── checklist.png   (선택)
├── README.md
```

---

## ✅ 단계별 TODO 리스트

### \[1단계] 기본 틀 구성

* [ ] `index.html` 기본 틀 만들기 (`<head>`, `<body>`)
* [ ] 버튼 1개 → "여행 계획 시작하기"
* [ ] `style.css` 연결
* [ ] `app.js` 연결 (스크립트 defer 사용)

---

### \[2단계] 여행 정보 입력 UI

* [ ] 사용자 이름, 목적지, 출발일 입력폼 만들기
* [ ] `input`, `date`, `button` 요소 구성
* [ ] 입력값을 객체로 저장:

  ```js
  const userInfo = {
    name: '',
    destination: '',
    startDate: '',
  };
  ```

---

### \[3단계] D-Day 계산 기능

* [ ] `Date 객체`로 오늘과 출발일의 차이 계산
* [ ] `Math.ceil()` 활용해 일수 계산
* [ ] 결과 예시: `D-10 남았습니다!` 출력

---

### \[4단계] 준비물 체크리스트 (배열, 반복문)

* [ ] 배열로 준비물 목록 구성:

  ```js
  const items = ["여권", "휴대폰 충전기", "옷", "우산"];
  ```
* [ ] `forEach()`를 사용해 HTML로 반복 출력
* [ ] 체크박스와 label로 구성
* [ ] 체크 여부에 따라 스타일 바꾸기 (선택)

---

### \[5단계] 예산 계산기 (연산자, 변수)

* [ ] 항목: 항공권, 숙박, 식비, 기타 입력
* [ ] 버튼 클릭 시 총합 계산
* [ ] `Number(input.value)`로 숫자 변환 후 합산

---

### \[6단계] 안내 메시지 (조건문 활용)

* [ ] 여행이 7일 이내 → "짐 싸기 시작해요!"
* [ ] 여행이 1일 남음 → "내일 출발이에요! 설레죠?"
* [ ] 조건문: `if`, `else if` 등 사용

---

### \[7단계] 함수화 및 이벤트 연결

* [ ] `계산 버튼` 클릭 → 이벤트로 함수 실행
* [ ] 각 기능은 함수 단위로 분리:

  ```js
  function calculateDday() { ... }
  function renderChecklist() { ... }
  function calculateBudget() { ... }
  ```
* [ ] `addEventListener()`로 버튼 연결

---

### \[8단계] 보너스 확장 (선택)

* [ ] `localStorage`로 userInfo 저장
* [ ] 다음 방문 시 저장된 이름 자동 입력
* [ ] CSS로 여행 느낌 나는 UI 꾸미기 (예: 배경 이미지, 아이콘 등)

---

## 💻 예시 코드 스니펫

### 📄 index.html 일부

```html
<body>
  <h1>✈️ TravelMate</h1>

  <section id="trip-form">
    <input type="text" id="name" placeholder="이름 입력" />
    <input type="text" id="destination" placeholder="여행지 입력" />
    <input type="date" id="startDate" />
    <button id="startBtn">여행 계획 시작</button>
  </section>

  <section id="dday-result"></section>

  <section id="checklist"></section>

  <section id="budget">
    <input type="number" id="flight" placeholder="항공권 비용" />
    <input type="number" id="hotel" placeholder="숙박비" />
    <input type="number" id="food" placeholder="식비" />
    <button id="calcBudget">총비용 계산</button>
    <p id="budgetResult"></p>
  </section>

  <script src="js/app.js" defer></script>
</body>
```

---

## 📘 README.md 예시

```md
# TravelMate 미니 프로젝트

JS 기초 학습용 프로젝트입니다. 사용자는 여행 정보를 입력하고 디데이, 준비물, 예산 등을 확인할 수 있습니다.

## 사용 기술
- HTML5 / CSS3
- JavaScript ES6 (let/const, 객체, 배열, 함수, 이벤트)

## 기능 요약
- 여행 D-Day 계산
- 준비물 체크리스트
- 여행 예산 계산기
```

---

## ✅ 코드샌드박스 링크용 템플릿 (구조 유지)

### 📁 폴더 구조

```
sandbox/
├── public/
│   └── index.html
├── src/
│   ├── style.css
│   └── app.js
├── package.json (기본값)
```

### 📄 `index.html`

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>TravelMate</title>
  <link rel="stylesheet" href="/src/style.css" />
</head>
<body>
  <h1>✈️ TravelMate</h1>

  <section id="trip-form">
    <input type="text" id="name" placeholder="이름 입력" />
    <input type="text" id="destination" placeholder="여행지 입력" />
    <input type="date" id="startDate" />
    <button id="startBtn">여행 계획 시작</button>
  </section>

  <section id="dday-result"></section>

  <section id="checklist"></section>

  <section id="budget">
    <input type="number" id="flight" placeholder="항공권 비용" />
    <input type="number" id="hotel" placeholder="숙박비" />
    <input type="number" id="food" placeholder="식비" />
    <button id="calcBudget">총비용 계산</button>
    <p id="budgetResult"></p>
  </section>

  <script src="/src/app.js"></script>
</body>
</html>
```

---

### 📄 `style.css`

```css
body {
  font-family: sans-serif;
  padding: 2rem;
  background-color: #f2f2f2;
}

h1 {
  color: #0077cc;
}

section {
  margin-bottom: 2rem;
}

input, button {
  margin: 0.5rem 0;
  display: block;
  padding: 0.5rem;
  width: 100%;
  max-width: 300px;
}

#checklist label {
  display: block;
  margin: 0.3rem 0;
}
```

---

### 📄 `app.js`

```js
document.getElementById('startBtn').addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const destination = document.getElementById('destination').value;
  const startDate = new Date(document.getElementById('startDate').value);
  const today = new Date();

  const diff = Math.ceil((startDate - today) / (1000 * 60 * 60 * 24));

  const ddayText = `안녕하세요 ${name}님! ${destination}까지 D-${diff}입니다!`;
  document.getElementById('dday-result').innerText = ddayText;

  showChecklist();
});

function showChecklist() {
  const items = ['여권', '충전기', '카메라', '옷', '우산'];
  const checklistEl = document.getElementById('checklist');
  checklistEl.innerHTML = '<h2>📋 준비물 체크리스트</h2>';

  items.forEach((item, idx) => {
    const id = `item-${idx}`;
    checklistEl.innerHTML += `
      <label>
        <input type="checkbox" id="${id}" />
        ${item}
      </label>`;
  });
}

document.getElementById('calcBudget').addEventListener('click', () => {
  const flight = Number(document.getElementById('flight').value);
  const hotel = Number(document.getElementById('hotel').value);
  const food = Number(document.getElementById('food').value);

  const total = flight + hotel + food;
  document.getElementById('budgetResult').innerText = `총 예상 비용: ${total.toLocaleString()}원`;
});
```

---

## 🚀 업로드 옵션 안내

| 플랫폼                                   | 방법                                                       |
| ------------------------------------- | -------------------------------------------------------- |
| [CodeSandbox](https://codesandbox.io) | `Static` 템플릿 선택 → 위 파일 업로드                               |
| [CodePen](https://codepen.io)         | HTML / CSS / JS 코드 분할 붙여넣기                               |
| \[GitHub Pages]                       | `travelmate/` 프로젝트 → GitHub에 업로드 후 `Settings > Pages` 설정 |


---

## ✅ **TravelMate – 단일 HTML 버전**

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <title>✈️ TravelMate - 나만의 여행 플래너</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background-color: #f5f8fa;
      padding: 2rem;
      color: #333;
    }

    h1 {
      color: #0077cc;
      margin-bottom: 1.5rem;
    }

    section {
      margin-bottom: 2rem;
    }

    input, button {
      display: block;
      margin: 0.5rem 0;
      padding: 0.6rem;
      font-size: 1rem;
      width: 100%;
      max-width: 320px;
      box-sizing: border-box;
    }

    button {
      background-color: #0077cc;
      color: white;
      border: none;
      cursor: pointer;
    }

    button:hover {
      background-color: #005fa3;
    }

    #checklist label {
      display: block;
      margin: 0.3rem 0;
    }

    #dday-result, #budgetResult {
      font-weight: bold;
      margin-top: 1rem;
    }
  </style>
</head>
<body>
  <h1>✈️ TravelMate</h1>

  <section id="trip-form">
    <h2>1. 여행 정보 입력</h2>
    <input type="text" id="name" placeholder="이름 입력" />
    <input type="text" id="destination" placeholder="여행지 입력" />
    <input type="date" id="startDate" />
    <button id="startBtn">여행 계획 시작</button>
  </section>

  <section id="dday-result"></section>

  <section id="checklist"></section>

  <section id="budget">
    <h2>2. 예산 계산기</h2>
    <input type="number" id="flight" placeholder="항공권 비용" />
    <input type="number" id="hotel" placeholder="숙박비" />
    <input type="number" id="food" placeholder="식비" />
    <button id="calcBudget">총비용 계산</button>
    <p id="budgetResult"></p>
  </section>

  <script>
    document.getElementById('startBtn').addEventListener('click', () => {
      const name = document.getElementById('name').value.trim();
      const destination = document.getElementById('destination').value.trim();
      const startDate = new Date(document.getElementById('startDate').value);
      const today = new Date();
      today.setHours(0,0,0,0);  // 시간 제거

      if (!name || !destination || !document.getElementById('startDate').value) {
        alert("모든 정보를 입력해주세요!");
        return;
      }

      const diff = Math.ceil((startDate - today) / (1000 * 60 * 60 * 24));
      const ddayText = `안녕하세요 ${name}님! ${destination}까지 D-${diff}일 남았습니다!`;
      document.getElementById('dday-result').innerText = ddayText;

      showChecklist();
    });

    function showChecklist() {
      const items = ['여권', '충전기', '카메라', '옷', '우산'];
      const checklistEl = document.getElementById('checklist');
      checklistEl.innerHTML = '<h2>3. 📋 준비물 체크리스트</h2>';

      items.forEach((item, idx) => {
        const id = `item-${idx}`;
        checklistEl.innerHTML += `
          <label>
            <input type="checkbox" id="${id}" />
            ${item}
          </label>`;
      });
    }

    document.getElementById('calcBudget').addEventListener('click', () => {
      const flight = Number(document.getElementById('flight').value);
      const hotel = Number(document.getElementById('hotel').value);
      const food = Number(document.getElementById('food').value);

      if (isNaN(flight) || isNaN(hotel) || isNaN(food)) {
        alert("모든 비용을 숫자로 입력해주세요.");
        return;
      }

      const total = flight + hotel + food;
      document.getElementById('budgetResult').innerText = `총 예상 비용: ${total.toLocaleString()}원`;
    });
  </script>
</body>
</html>
```

---

## 🧪 테스트 방법

1. **브라우저에서 바로 열기**

   * 위 코드를 `.html`로 저장 (예: `travelmate.html`)
   * 더블클릭해서 실행

2. **CodePen에서 실행**

   * [https://codepen.io/pen/](https://codepen.io/pen/) 접속
   * 위 코드 전체를 `<html>`부터 붙여넣기
   * **Settings > HTML > “No framework”** 확인 후 실행

---
