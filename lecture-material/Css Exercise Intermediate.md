조금 더 어려운 CSS 연습문제 3개를 만들었습니다. 이 문제들은 CSS의 고급 기능을 활용한 레이아웃 및 스타일링을 다루며, **그리드 시스템**, **애니메이션**, **반응형 디자인** 등 여러 가지 CSS 기술을 적용해볼 수 있습니다.

---

### **1. 그리드 레이아웃을 활용한 복잡한 레이아웃 만들기**

**목표**: **CSS Grid**를 사용하여 복잡한 레이아웃을 구축하고, 다양한 크기의 콘텐츠가 적절히 배치되도록 만듭니다.

#### 문제:

1. 페이지 전체를 **그리드 레이아웃**으로 구성하세요.

   * **헤더**는 **전체 너비**를 차지하고, 높이는 **80px**로 설정하세요.
   * **사이드바**는 \*\*왼쪽 25%\*\*를 차지하고, **콘텐츠 영역**은 나머지 \*\*75%\*\*를 차지하세요.
   * **콘텐츠 영역**은 **두 개의 열**로 나누어 **왼쪽** 열은 **60%**, **오른쪽** 열은 \*\*40%\*\*로 설정하세요.
   * **푸터**는 **전체 너비**를 차지하고, 높이는 **60px**로 설정하세요.
2. 각 구역은 **배경 색상**을 달리하고, **간격**은 **20px**로 설정하세요.

**예시 코드**:

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>그리드 레이아웃 연습</title>
    <style>
        body {
            margin: 0;
            display: grid;
            grid-template-columns: 25% 1fr;
            grid-template-rows: 80px 1fr 60px;
            grid-template-areas:
                "header header"
                "sidebar content"
                "footer footer";
            gap: 20px;
        }

        header {
            grid-area: header;
            background-color: lightblue;
            text-align: center;
            padding: 20px;
        }

        sidebar {
            grid-area: sidebar;
            background-color: lightgray;
            padding: 20px;
        }

        content {
            grid-area: content;
            display: grid;
            grid-template-columns: 60% 40%;
            gap: 20px;
            background-color: lightyellow;
            padding: 20px;
        }

        footer {
            grid-area: footer;
            background-color: lightgreen;
            text-align: center;
            padding: 20px;
        }
    </style>
</head>
<body>
    <header>
        <h1>웹 페이지 제목</h1>
    </header>
    <sidebar>
        <h2>사이드바</h2>
        <p>이곳은 사이드바입니다.</p>
    </sidebar>
    <content>
        <div>
            <h2>왼쪽 콘텐츠</h2>
            <p>이곳은 왼쪽 콘텐츠 영역입니다.</p>
        </div>
        <div>
            <h2>오른쪽 콘텐츠</h2>
            <p>이곳은 오른쪽 콘텐츠 영역입니다.</p>
        </div>
    </content>
    <footer>
        <p>저작권 &copy; 2025</p>
    </footer>
</body>
</html>
```

---

### **2. 애니메이션을 활용한 배너 슬라이드**

**목표**: **CSS 애니메이션**을 사용하여 자동으로 슬라이드되는 배너를 만듭니다.

#### 문제:

1. **배너 영역**을 100% 너비와 **300px** 높이로 설정하고, 배경색을 **회색**으로 설정하세요.
2. 배너 내에 **3개의 슬라이드 이미지**를 포함하고, 슬라이드는 **5초마다 자동으로** 전환되도록 설정하세요.
3. **슬라이드 전환 효과**를 **부드러운 페이드** 효과로 만드세요.
4. **슬라이드에 텍스트**를 포함하여 **`h2`** 태그로 배너 텍스트를 표시하고, 텍스트는 배너 상단에 **중앙 정렬**되게 하세요.

**예시 코드**:

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>배너 슬라이드</title>
    <style>
        .banner {
            width: 100%;
            height: 300px;
            overflow: hidden;
            position: relative;
            background-color: #ddd;
        }

        .slides {
            display: flex;
            animation: slide 15s infinite;
        }

        .slide {
            min-width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 2rem;
            position: relative;
        }

        .slide:nth-child(1) {
            background-image: url('https://via.placeholder.com/800x300/FF5733/FFFFFF?text=Slide+1');
        }

        .slide:nth-child(2) {
            background-image: url('https://via.placeholder.com/800x300/33FF57/FFFFFF?text=Slide+2');
        }

        .slide:nth-child(3) {
            background-image: url('https://via.placeholder.com/800x300/3357FF/FFFFFF?text=Slide+3');
        }

        @keyframes slide {
            0% { transform: translateX(0); }
            33% { transform: translateX(-100%); }
            66% { transform: translateX(-200%); }
            100% { transform: translateX(0); }
        }
    </style>
</head>
<body>
    <div class="banner">
        <div class="slides">
            <div class="slide">
                <h2>첫 번째 슬라이드</h2>
            </div>
            <div class="slide">
                <h2>두 번째 슬라이드</h2>
            </div>
            <div class="slide">
                <h2>세 번째 슬라이드</h2>
            </div>
        </div>
    </div>
</body>
</html>
```

---

### **3. 반응형 웹 페이지 디자인 (Mobile-first approach)**

**목표**: **미디어 쿼리**를 사용하여 반응형 웹 페이지를 만들고, 다양한 화면 크기에서 적절한 레이아웃을 보여주도록 설정합니다.

#### 문제:

1. **헤더**는 **배경색**을 **파란색**, **글자색**을 **흰색**으로 설정하세요.
2. **메인 콘텐츠**는 기본적으로 세로로 정렬되도록 설정하고, 화면 너비가 **600px 이상일 때** **두 개의 열**로 배치되게 설정하세요.
3. **푸터**는 화면 하단에 항상 고정되도록 설정하세요.

**예시 코드**:

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>반응형 디자인 연습</title>
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
        }

        header {
            background-color: blue;
            color: white;
            padding: 20px;
            text-align: center;
        }

        .main-content {
            padding: 20px;
            display: block; /* 기본적으로 세로로 배치 */
        }

        .main-content .left, .main-content .right {
            padding: 10px;
            background-color: lightgray;
            margin: 10px 0;
        }

        footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 10px;
            position: fixed;
            width: 100%;
            bottom: 0;
        }

        @media screen and (min-width: 600px) {
            .main-content {
                display: flex;
                justify-content: space-between;
            }

            .main-content .left, .main-content .right {
                width: 48%; /* 두 열로 나눔 */
            }
        }
    </style>
</head>
<body>
    <header>
        <h1>반응형 웹 페이지</h1>
    </header>

    <div class="main-content">
        <div class="left">
            <h2>왼쪽 콘텐츠</h2>
            <p>여기에 왼쪽 콘텐츠가 들어갑니다.</p>
        </div>
        <div class="right">
            <h2>오른쪽 콘텐츠</h2>
            <p>여기에 오른쪽 콘텐츠가 들어갑니다.</p>
        </div>
    </div>

    <footer>
        <p>저작권 &copy; 2025</p>
    </footer>
</body>
</html>
```

---

### **문제 설명**

* **문제 1**은 **그리드 레이아웃**을 사용하여 복잡한 웹 페이지 레이아웃을 구성하는 연습입니다. 그리드를 활용한 배치 방법을 익힐 수 있습니다.
* **문제 2**는 **CSS 애니메이션**을 사용하여 자동 슬라이드되는 배너를 만들고, 애니메이션 효과를 적용하는 문제입니다.
* **문제 3**은 **반응형 웹 디자인**을 연습하는 문제로, **미디어 쿼리**를 사용하여 모바일-우선 접근 방식을 적용한 레이아웃을 설정합니다.

이 문제들은 고급 CSS 기능을 실습하고 다양한 레이아웃 및 효과를 구현하는 데 도움이 됩니다.
