## html 화면 구성하는 연습문제

**HTML 기본 다지기**, **텍스트 관련 태그들**, **이미지와 하이퍼링크**를 활용한 연습문제와 주말과제를 아래와 같이 만들어보았습니다. 이 연습문제는 HTML의 기초를 탄탄히 익히기 위한 좋은 연습이 될 것입니다.

### **연습문제 1: HTML 문서 구조 만들기**

**목표**: HTML 기본 구조를 이해하고, 웹 페이지를 생성할 수 있다.

#### 문제:

1. **HTML 기본 문서 구조**를 사용하여 웹 페이지를 만들어보세요.
2. 페이지 제목은 "My First Web Page"로 설정하고, 본문에는 "Hello, World!"라는 텍스트를 표시하세요.
3. 페이지에 **`<header>`**, \*\*`<footer>`\*\*를 추가하고, 본문에 \*\*`<main>`\*\*을 사용하여 텍스트를 넣으세요.

<br />

![스크린샷](https://genai-9a990d.gitlab.io/images/2025-06-1011.44.17.png)

<br />

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
    </header>
    
    <main>
        <p>Hello, World!</p>
    </main>

    <footer>
        <p>&copy; 2025 My Website</p>
    </footer>
</body>
</html>
```

### **연습문제 2: HTML5 웹 페이지 만들기**

**목표**: HTML5와 CSS3을 이용하여 기본적인 웹 페이지를 작성하고, 시맨틱 태그를 활용한다.

#### 과제:

1. **웹 페이지 구조**를 다음과 같이 작성하세요:

   * **헤더**: 페이지 제목과 내비게이션 링크(홈, 소개, 연락처).
   * **메인 섹션**: 소개글과 이미지를 포함한 콘텐츠 영역. 텍스트와 이미지를 적절히 배치.
   * **푸터**: 저작권 정보 및 연락처 링크.

2. **시맨틱 태그**를 활용하세요:

   * `header`, `nav`, `main`, `section`, `article`, `footer` 등을 적절하게 사용하여 페이지를 구성하세요.

3. **스타일링**: 간단한 CSS를 추가하여 페이지를 꾸며주세요. 배경색, 텍스트 색상, 글꼴 등을 변경하고, 버튼과 링크 스타일링을 추가하세요.

4. **이미지 삽입**: 웹 페이지에 본인의 사진이나 적절한 이미지를 넣고, `alt` 속성도 추가하세요.

5. **반응형 디자인**: 미디어 쿼리를 사용하여 모바일에서도 잘 보이도록 디자인하세요.

<br />

![스크린샷](https://genai-9a990d.gitlab.io/images/2025-06-1011.47.51.png)

<br />

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Personal Web Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        header {
            background-color: #4CAF50;
            padding: 10px;
            text-align: center;
            color: white;
        }
        nav a {
            margin: 0 15px;
            color: white;
            text-decoration: none;
        }
        section {
            padding: 20px;
            text-align: center;
        }
        footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 10px;
        }
        @media (max-width: 600px) {
            nav a {
                display: block;
                margin: 10px 0;
            }
        }
    </style>
</head>
<body>
    <header>
        <h1>Welcome to My Personal Web Page</h1>
        <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>

    <main>
        <section>
            <h2>About Me</h2>
            <p>Hi, I am a web developer learning HTML and CSS.</p>
            <img src="myphoto.jpg" alt="My Photo" width="300">
        </section>
    </main>

    <footer>
        <p>&copy; 2025 My Web Page | Contact: info@example.com</p>
    </footer>
</body>
</html>
```

### **연습문제 2 설명**

* **헤더**에는 내비게이션 링크를 배치하여 웹 페이지를 다른 섹션으로 이동할 수 있게 합니다.
* **메인 섹션**에서는 소개글과 이미지를 사용하여 본인의 정보를 간단히 설명합니다.
* **푸터**에는 저작권 정보와 연락처 링크를 넣어 페이지 하단에 표시합니다.
* **반응형 디자인**을 고려하여 모바일에서도 잘 보이도록 CSS 미디어 쿼리를 사용합니다.

이 과제는 HTML5와 CSS3의 기본 개념을 실습하고, 실용적인 웹 페이지를 만드는 데 도움이 됩니다.

**HTML 기본 다지기**, **텍스트 관련 태그들**, **이미지와 하이퍼링크**를 활용하여 **복잡한 연습문제**와 **주말과제**를 만들겠습니다. 시맨틱 HTML은 제외하고, 기존의 HTML 태그를 충분히 활용하여 실습할 수 있는 문제들로 구성하였습니다.

---

### **연습문제 3: 개인 포트폴리오 웹 페이지 만들기**

**목표**: HTML 기본 구조와 텍스트, 이미지, 하이퍼링크 태그를 활용하여 개인 포트폴리오 페이지를 만든다.

#### 문제:

1. **헤더**에 자신의 이름과 **내비게이션 메뉴**를 추가하세요. 내비게이션 메뉴는 "Home", "About Me", "Projects", "Contact"로 구성되어야 합니다.
2. **메인 섹션**에는 **자기소개**(About Me)와 **프로젝트 목록**을 나열하세요. 프로젝트 목록은 **`<ul>`** 또는 **`<ol>`** 태그를 사용하여 작성합니다.
3. 각 프로젝트에는 **이미지**(이미지는 본인의 포트폴리오 이미지나 무료 이미지 사용), **프로젝트 이름**, **설명**을 추가하세요.
4. **하이퍼링크**를 사용하여 프로젝트에 대한 더 많은 정보를 링크할 수 있도록 하세요. 예를 들어, "프로젝트 1"을 클릭하면 해당 프로젝트의 상세 페이지로 이동하도록 설정하세요.
5. 페이지 하단에는 **저작권 정보**와 **이메일 링크**를 넣으세요.

<br />

![스크린샷](https://genai-9a990d.gitlab.io/images/2025-06-1011.46.21.png)

<br />

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        header {
            background-color: #4CAF50;
            padding: 15px;
            text-align: center;
            color: white;
        }
        nav a {
            margin: 0 15px;
            color: white;
            text-decoration: none;
        }
        section {
            padding: 20px;
            text-align: center;
        }
        .project-list {
            list-style-type: none;
            padding: 0;
        }
        .project-item {
            margin-bottom: 20px;
        }
        footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 10px;
        }
    </style>
</head>
<body>
    <header>
        <h1>John Doe's Portfolio</h1>
        <nav>
            <a href="#home">Home</a>
            <a href="#about">About Me</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>

    <section id="about">
        <h2>About Me</h2>
        <p>Hi, I'm John Doe. I am a web developer with a passion for creating modern and responsive websites. Here's a look at some of my work:</p>
    </section>

    <section id="projects">
        <h2>My Projects</h2>
        <ul class="project-list">
            <li class="project-item">
                <img src="project1.jpg" alt="Project 1 Image" width="200">
                <h3><a href="project1-details.html">Project 1</a></h3>
                <p>A brief description of Project 1.</p>
            </li>
            <li class="project-item">
                <img src="project2.jpg" alt="Project 2 Image" width="200">
                <h3><a href="project2-details.html">Project 2</a></h3>
                <p>A brief description of Project 2.</p>
            </li>
            <li class="project-item">
                <img src="project3.jpg" alt="Project 3 Image" width="200">
                <h3><a href="project3-details.html">Project 3</a></h3>
                <p>A brief description of Project 3.</p>
            </li>
        </ul>
    </section>

    <footer>
        <p>&copy; 2025 John Doe | <a href="mailto:john.doe@example.com" style="color: white;">Contact Me</a></p>
    </footer>
</body>
</html>
```

### **연습문제 4: 블로그 포스트 페이지 만들기**

**목표**: 텍스트 태그와 이미지, 링크를 활용하여 블로그 포스트 페이지를 만든다.

#### 문제:

1. **블로그 제목**과 **작성 날짜**를 포함하는 **헤더**를 만드세요.
2. **본문 내용**은 여러 개의 **`<p>`** 태그를 사용하여 작성하고, **이미지**를 본문에 포함시키세요.
3. 본문 내용 중 중요한 단어나 문장은 **강조**(bold 또는 italics)를 하세요.
4. **링크**를 삽입하여 관련된 다른 포스트나 외부 리소스로 연결하세요.
5. **댓글 섹션**을 만들고, **댓글**을 작성할 수 있는 **폼**을 추가하세요.

<br />

![스크린샷](https://genai-9a990d.gitlab.io/images/2025-06-1011.53.48.png)

<br />

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Blog Post</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        header {
            background-color: #ff9800;
            padding: 20px;
            text-align: center;
            color: white;
        }
        .post-content {
            padding: 20px;
            max-width: 800px;
            margin: 0 auto;
        }
        .comment-section {
            margin-top: 40px;
        }
    </style>
</head>
<body>
    <header>
        <h1>My First Blog Post</h1>
        <p>Written on January 1, 2025</p>
    </header>

    <section class="post-content">
        <h2>Introduction to Web Development</h2>
        <p>In this post, we'll explore the basics of web development. Web development involves <strong>HTML</strong>, <em>CSS</em>, and JavaScript.</p>
        <img src="webdev.jpg" alt="Web Development" width="600">
        <p>HTML provides the structure of the webpage, CSS handles the layout and appearance, and JavaScript brings interactivity.</p>
        <p>To learn more, you can read <a href="https://www.example.com" target="_blank">this article</a> about web development.</p>
    </section>

    <section class="comment-section">
        <h3>Comments</h3>
        <form>
            <label for="comment">Leave a comment:</label><br>
            <textarea id="comment" name="comment" rows="4" cols="50"></textarea><br><br>
            <button type="submit">Post Comment</button>
        </form>
    </section>
</body>
</html>
```
