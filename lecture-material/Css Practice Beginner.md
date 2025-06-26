다음은 각 CSS 주제에 대한 **연습문제**입니다. 각 연습문제는 해당 주제를 실습하고 이해하는 데 도움이 될 것입니다.

---

### **1. CSS 기초 연습문제**

**목표**: CSS를 사용하여 기본적인 스타일을 적용하고, 선택자 및 속성들을 실습합니다.

#### 문제:

1. **HTML 문서**를 작성하고, 문서의 배경색을 **하늘색**으로 설정하세요.
2. **헤더**(`header`)에 글꼴을 **Arial**, **크기**를 24px로 설정하고, 글자 색을 **네이비**로 지정하세요.
3. 본문에 있는 **첫 번째 문단**(`p`)의 텍스트 색상을 **녹색**으로 설정하세요.
4. 본문에 있는 **두 번째 문단**(`p`)의 텍스트를 **볼드** 처리하고, **폰트 크기**를 18px로 설정하세요.

**예시 코드**:

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS 기초 연습</title>
    <style>

    </style>
</head>
<body>
    <header>
        <h1>웹 페이지 제목</h1>
    </header>

    <p>이것은 첫 번째 문단입니다.</p>
    <p>이것은 두 번째 문단입니다.</p>
</body>
</html>
```

**css 예시 코드**:

```css
        body {
            background-color: skyblue;
        }

        header {
            font-family: Arial, sans-serif;
            font-size: 24px;
            color: navy;
        }

        p:first-of-type {
            color: green;
        }

        p:nth-of-type(2) {
            font-weight: bold;
            font-size: 18px;
        }
```

---

### **2. 텍스트 관련 스타일 연습문제**

**목표**: 텍스트 스타일링 속성인 글꼴, 크기, 간격 등을 다룹니다.

#### 문제:

1. 본문에 있는 **`<h1>`** 태그의 글자 색상을 **빨간색**으로 설정하고, **`<p>`** 태그의 글자 색을 **초록색**으로 설정하세요.
2. **`<h1>`** 태그의 **글꼴 크기**를 30px로 설정하고, **`<p>`** 태그의 글꼴을 **15px**로 설정하세요.
3. 모든 문단에 **줄 간격(line-height)** 을 1.8로 설정하세요.
4. **텍스트 변환**: 본문의 모든 **`<h2>`** 태그의 텍스트를 **대문자**로 변경하세요.

**예시 코드**:

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>텍스트 관련 스타일 연습</title>
    <style>

    </style>
</head>
<body>
    <h1>웹 페이지 제목</h1>
    <h2>이것은 부제목입니다</h2>
    <p>이것은 문단 1입니다.</p>
    <p>이것은 문단 2입니다.</p>
</body>
</html>
```

**css 예시 코드**:

```css
        h1 {
            color: red;
            font-size: 30px;
        }

        p {
            color: green;
            font-size: 15px;
            line-height: 1.8;
        }

        h2 {
            text-transform: uppercase;
        }
```

---

### **3. 색상과 배경을 위한 스타일 연습문제**

**목표**: CSS를 사용하여 배경색, 텍스트 색상, 그라디언트 등을 적용합니다.

#### 문제:

1. **전체 페이지의 배경색을 하늘색**으로 설정하세요.
2. **`<header>`** 요소의 배경을 **그라디언트**로 설정하세요. (상단은 빨간색, 하단은 노란색으로 설정)
3. **본문 텍스트**의 색을 **검정색**으로 설정하세요.
4. **이미지 삽입**: 페이지에 배경 이미지를 삽입하고, **배경 크기**는 화면에 맞게 조정하세요.

**예시 코드**:

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>배경 스타일 연습</title>
    <style>
        
    </style>
</head>
<body>
    <header>
        <h1>웹 페이지 제목</h1>
    </header>

    <p>이것은 문단입니다.</p>
</body>
</html>
```

**css 예시 코드**:

```css
        body {
            background-color: skyblue;
        }

        header {
            background: linear-gradient(to bottom, red, yellow);
            padding: 20px;
        }

        p {
            color: black;
        }

        body {
            background-image: url('background.jpg');
            background-size: cover;
        }
```

---

### **4. CSS 박스 모델 연습문제**

**목표**: CSS 박스 모델을 이해하고, 여백, 패딩, 테두리 등을 사용하여 요소의 크기와 배치를 조정합니다.

#### 문제:

1. **`<div>`** 요소의 크기를 **300px x 200px**로 설정하세요.
2. **`<div>`** 요소의 **패딩(padding)** 을 **20px**로 설정하고, **테두리(border)** 는 **5px 실선**으로 설정하세요.
3. **마진(margin)** 을 **30px**로 설정하여 다른 요소와의 간격을 두세요.
4. **배경색**은 **연한 회색**으로 설정하세요.

**예시 코드**:

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>박스 모델 연습</title>
    <style>
        
    </style>
</head>
<body>
    <div>
        <p>이것은 박스 모델 연습입니다.</p>
    </div>
</body>
</html>
```
**css 예시 코드**:

```css
        div {
            width: 300px;
            height: 200px;
            padding: 20px;
            border: 5px solid black;
            margin: 30px;
            background-color: lightgray;
        }
```

---

### **5. CSS 레이아웃 연습문제**

**목표**: CSS 포지셔닝과 레이아웃을 사용하여 요소들을 적절하게 배치합니다.

#### 문제:

1. **`<header>`** 와 **`<footer>`** 의 배경 색상을 **파란색**으로 설정하고, 높이를 각각 **60px**, **40px**로 설정하세요.
2. **메인 콘텐츠** 영역을 **`<main>`** 요소로 감싸고, 너비를 **80%** 로 설정하세요.
3. **`<section>`** 을 사용하여 **두 개의 열**로 콘텐츠를 나누고, 왼쪽 열은 **30%**, 오른쪽 열은 **70%** 의 너비를 설정하세요.
4. **두 열 사이에 간격**을 20px로 설정하세요.

**예시 코드**:

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>레이아웃 연습</title>
    <style>
        
    </style>
</head>
<body>
    <header>
        <h1>웹 페이지 제목</h1>
    </header>

    <main>
        <section>
            <div class="left">
                <p>왼쪽 열</p>
            </div>
            <div class="right">
                <p>오른쪽 열</p>
            </div>
        </section>
    </main>

    <footer>
        <p>저작권 &copy; 2025</p>
    </footer>
</body>
</html>
```

**css 예시 코드**:

```css
        header, footer {
            background-color: blue;
            color: white;
            text-align: center;
        }

        header {
            height: 60px;
        }

        footer {
            height: 40px;
        }

        main {
            width: 80%;
            margin: 0 auto;
        }

        section {
            display: flex;
            gap: 20px;
        }

        .left {
            width: 30%;
            background-color: lightcoral;
        }

        .right {
            width: 70%;
            background-color: lightgoldenrodyellow;
        }
```

---

### **문제 설명**

* **CSS 기초**: 기본적인 CSS 속성 및 선택자를 활용하여 웹 페이지의 텍스트와 요소 스타일을 설정하는 연습입니다.
* **텍스트 관련 스타일**: 텍스트 색상, 크기, 정렬 등을 설정하는 문제로, 텍스트 스타일링을 연습할 수 있습니다.
* **색상과 배경을 위한 스타일**: 배경색, 배경 이미지, 그라디언트를 활용하여 웹 페이지를 꾸미는 문제입니다.
* **CSS 박스 모델**: 요소의 여백, 패딩, 테두리 등을 사용하여 웹 페이지의 레이아웃을 조정하는 연습입니다.
* **CSS 레이아웃**: 포지셔닝, 플렉스박스를 사용하여 콘텐츠를 정렬하고 배치하는 연습입니다.

각 연습문제는 CSS의 중요한 개념들을 실습하며 이해할 수 있도록 구성되었습니다.
