JavaScript에서 **입력값 검증(유효성 검사, Validation)** 은 폼 제출 전에 사용자의 입력값이 올바른지 확인하여 잘못된 입력을 막는 중요한 절차입니다. 클라이언트 측에서 먼저 검증하여 사용자 경험을 향상시키고, 서버 측에서도 추가 검증으로 보안을 강화합니다.

---

## ✅ 1. 유효성 검사의 종류

| 검사 항목      | 예시 입력값            | 검증 조건                               |
| ---------- | ----------------- | ----------------------------------- |
| 필수 입력      | 빈 문자열             | `value.trim() !== ""`               |
| 이메일 형식     | `abc@example.com` | `/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/` |
| 비밀번호 길이    | `12345`           | `password.length >= 8`              |
| 비밀번호 일치    | `pw1 === pw2`     | 동일한 값                               |
| 숫자만 입력     | `123`             | `/^\d+$/`                           |
| 범위 체크      | `나이 1 ~ 120`      | `age >= 1 && age <= 120`            |
| 체크박스 선택 여부 | 약관 동의             | `checkbox.checked === true`         |

---

## ✅ 2. 기본 검증 예시 코드

```html
<form id="signupForm">
  <input type="text" id="username" placeholder="이름 입력"><br>
  <input type="email" id="email" placeholder="이메일 입력"><br>
  <input type="password" id="password" placeholder="비밀번호 입력"><br>
  <input type="password" id="confirmPassword" placeholder="비밀번호 확인"><br>
  <button type="submit">가입</button>
</form>

<script>
  document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault(); // 폼 제출 막기

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!username) {
      alert("이름을 입력하세요.");
      return;
    }

    const emailRegex = /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert("올바른 이메일을 입력하세요.");
      return;
    }

    if (password.length < 8) {
      alert("비밀번호는 8자 이상이어야 합니다.");
      return;
    }

    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    alert("회원가입 성공!");
    // 이곳에 실제 서버 전송 코드를 추가
  });
</script>
```

---

## ✅ 3. 주요 정규표현식 패턴 예시

| 항목   | 정규식 패턴                                            | 설명                  |
| ---- | ------------------------------------------------- | ------------------- |
| 이메일  | `/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/`               | 기본적인 이메일 형식         |
| 숫자만  | `/^\d+$/`                                         | 숫자만 허용              |
| 한글만  | `/^[가-힣]+$/`                                      | 한글만 허용              |
| 영문만  | `/^[a-zA-Z]+$/`                                   | 영문만 허용              |
| 비밀번호 | `/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/` | 영문+숫자+특수문자 조합 최소 8자 |

---

## ✅ 4. checkValidity()를 활용한 HTML5 검증

HTML 요소에 `required`, `pattern`, `minlength`, `type="email"` 등을 지정하면 자동으로 유효성 검사를 할 수 있고, `checkValidity()`로 검사할 수 있습니다.

```html
<form id="myForm">
  <input type="email" required>
  <button>제출</button>
</form>

<script>
  const form = document.getElementById("myForm");
  form.addEventListener("submit", function(e) {
    if (!form.checkValidity()) {
      e.preventDefault(); // 유효성 통과 못하면 제출 막기
      alert("필드를 올바르게 입력하세요.");
    }
  });
</script>
```

---

## ✅ 요약

| 방법                | 특징                                  |
| ----------------- | ----------------------------------- |
| JavaScript 직접 검증  | 정규표현식 + 조건문 활용, 유연한 커스터마이징 가능       |
| HTML5 기본 속성 검증    | `required`, `pattern` 등으로 간단히 처리 가능 |
| `checkValidity()` | HTML5 유효성 검사 API 활용                 |

---
