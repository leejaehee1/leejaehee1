# html 화면 구성하는 연습문제

[온라인 HTML 에디터](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_editor)

### **연습문제 1: 텍스트 태그 활용하기**

**목표**: 텍스트 관련 태그를 이용해 텍스트를 구조적으로 표현할 수 있다.

#### 문제:

1. **`<p>`** 태그를 사용하여 문단을 작성하고, 각 문단에는 간단한 설명을 넣으세요.
2. **`<ul>`**, **`<ol>`**, **`<li>`** 를 이용하여 "My favorite hobbies" 목록을 작성하세요.
3. **`<h1>`\~`<h3>`** 태그를 사용하여 제목을 구조적으로 작성하고, 각 제목에 맞는 설명을 추가하세요.

<br />

![스크린샷](https://genai-9a990d.gitlab.io/images/2025-06-10_11.21.46.png)

<br />

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Hobbies</title>
</head>
<body>
    <h1>My Favorite Hobbies</h1>
    <p>여기서는 내가 좋아하는 취미를 소개합니다.</p>
    
    <h2>Outdoor Hobbies</h2>
    <ul>
        <li>산책</li>
        <li>자전거 타기</li>
        <li>등산</li>
    </ul>
    
    <h2>Indoor Hobbies</h2>
    <ol>
        <li>독서</li>
        <li>게임</li>
        <li>영화 보기</li>
    </ol>
</body>
</html>
```

### **연습문제 2: 이미지와 링크 만들기**

**목표**: 이미지를 삽입하고, 하이퍼링크를 생성할 수 있다.

#### 문제:

1. 웹 페이지에 **`<img>`** 태그를 사용하여 이미지를 삽입하고, **`alt`** 속성을 사용해 이미지 설명을 추가하세요.
2. **`<a>`** 태그를 사용하여 "Go to Google"이라는 링크를 만들고, 클릭 시 Google 홈페이지로 이동하도록 설정하세요.
3. 이미지를 클릭하면 Google로 이동하도록 하는 **이미지 링크**를 만들세요.

<br />

![스크린샷](https://genai-9a990d.gitlab.io/images/2025-06-10_11.27.55.png)

<br />

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image and Link Example</title>
</head>
<body>
    <h1>Image and Link Example</h1>

    <!-- 이미지 삽입 -->
    <img src="image.jpg" alt="예시 이미지" width="300">
    
    <!-- 링크 만들기 -->
    <p><a href="https://www.google.com" target="_blank">Go to Google</a></p>
    
    <!-- 이미지로 링크 만들기 -->
    <a href="https://www.google.com" target="_blank">
        <img src="image.jpg" alt="예시 이미지 링크" width="300">
    </a>
</body>
</html>
```

# 이미지를 보고 html 화면 구성하는 연습문제 1

[연습문제 출처](https://hyejin.tistory.com/93)

### ✅ 연습문제 1

오늘 배운 내용을 바탕으로 이미지와 동일한 페이지를 만드시오.

![이미지설명](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FceDkaM%2Fbtrhdk90bS8%2FIi8HXDcvlk3OaCKJWzSK9K%2Fimg.png)

### ✅ 연습문제 2

오늘 배운 내용을 바탕으로 이미지와 동일한 페이지를 만드시오.

![이미지설명](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnqibN%2FbtrhglGu8iE%2Fzy1cJcvObhwsJt9R2SCRLK%2Fimg.png)


# 이미지를 보고 html 화면 구성하는 연습문제 2

[연습문제 출처](https://velog.io/@layssingcar/HTML-%EC%97%B0%EC%8A%B5%EB%AC%B8%EC%A0%9C)

### ✅ 연습문제 1

오늘 배운 내용을 바탕으로 이미지와 동일한 페이지를 만드시오.

![이미지설명](https://velog.velcdn.com/images%2Flayssingcar%2Fpost%2F6725dd86-84e5-48f3-b301-dbb29af1530d%2F10_HTML%EC%97%B0%EC%8A%B5%EB%AC%B8%EC%A0%9C_1.png)

### ✅ 연습문제 2

오늘 배운 내용을 바탕으로 이미지와 동일한 페이지를 만드시오.

![이미지설명](https://velog.velcdn.com/images%2Flayssingcar%2Fpost%2Fd13bdf79-7455-4389-beaa-4f71523f0b30%2F11_HTML%EC%97%B0%EC%8A%B5%EB%AC%B8%EC%A0%9C_2.png)

### ✅ 연습문제 3

오늘 배운 내용을 바탕으로 이미지와 동일한 페이지를 만드시오.

그리고 github 에 commit & push 하시오.

이 페이지의 제일 아래에 있는 가이드라인에 따라 github pages 를 설정하고 public 폴더에 join.html 로 호스팅하시오.

![이미지설명](https://velog.velcdn.com/images%2Flayssingcar%2Fpost%2F4d7c46bc-9f68-4726-8690-443817e00083%2F12_HTML%EC%97%B0%EC%8A%B5%EB%AC%B8%EC%A0%9C_3.png)

---
