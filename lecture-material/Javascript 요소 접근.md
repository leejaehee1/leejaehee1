JavaScript에서 **요소(Element)에 접근하기**는 웹 페이지와 상호작용하기 위한 기본 중의 기본입니다. 주로 \*\*DOM(Document Object Model)\*\*을 통해 HTML 요소에 접근하며, 이를 이용해 내용을 변경하거나 스타일을 조작하거나 이벤트를 처리할 수 있습니다.

---

## ✅ 1. 요소 선택 방법 정리

### 📌 1-1. `getElementById()`

* **id 속성으로 요소를 선택**

```js
const title = document.getElementById("main-title");
```

### 📌 1-2. `getElementsByClassName()`

* **클래스 이름으로 여러 요소를 선택 (HTMLCollection 반환)**

```js
const items = document.getElementsByClassName("item");
```

### 📌 1-3. `getElementsByTagName()`

* **태그 이름으로 요소를 선택 (HTMLCollection 반환)**

```js
const paragraphs = document.getElementsByTagName("p");
```

### 📌 1-4. `querySelector()`

* **CSS 선택자 방식, 가장 처음 하나만 선택**

```js
const header = document.querySelector("h1");
const button = document.querySelector(".btn");
```

### 📌 1-5. `querySelectorAll()`

* **CSS 선택자 방식, 여러 요소 선택 (NodeList 반환)**

```js
const listItems = document.querySelectorAll("ul li");
```

---

## ✅ 2. 요소 접근 후 조작

### 📌 2-1. 텍스트나 HTML 내용 변경

```js
element.textContent = "변경된 텍스트";
element.innerHTML = "<strong>굵은 텍스트</strong>";
```

### 📌 2-2. 스타일 변경

```js
element.style.color = "red";
element.style.backgroundColor = "#f0f0f0";
```

### 📌 2-3. 속성(attribute) 변경

```js
element.setAttribute("src", "image.jpg");
element.getAttribute("href"); // 현재 값 가져오기
element.removeAttribute("disabled");
```

---

## ✅ 3. 반복문과 함께 사용하기

```js
const items = document.querySelectorAll(".item");
items.forEach((el, index) => {
  el.textContent = `항목 ${index + 1}`;
});
```

---

## ✅ 4. 실습 예제

```html
<h1 id="main-title">안녕하세요</h1>
<p class="desc">JavaScript 연습 중입니다.</p>
<button id="change-btn">제목 바꾸기</button>

<script>
  const title = document.getElementById("main-title");
  const button = document.getElementById("change-btn");

  button.addEventListener("click", () => {
    title.textContent = "변경된 제목입니다!";
    title.style.color = "blue";
  });
</script>
```

---

## ✅ 요약 비교표

| 메서드                        | 반환형            | 설명                  |
| -------------------------- | -------------- | ------------------- |
| `getElementById()`         | Element        | id로 1개 요소 선택        |
| `getElementsByClassName()` | HTMLCollection | 클래스명으로 여러 개 선택      |
| `getElementsByTagName()`   | HTMLCollection | 태그 이름으로 여러 개 선택     |
| `querySelector()`          | Element        | CSS 선택자, 가장 첫 번째 요소 |
| `querySelectorAll()`       | NodeList       | CSS 선택자, 모든 요소 선택   |

---

