다음은 **JavaScript의 변수, 조건문, 반복문을 처음 배우는 사람**을 위한 **쉬운 연습문제 10개**입니다.

---

### ✅ 변수 (1\~3)

**1. 숫자 두 개를 변수로 저장하고 더한 결과를 출력해보세요.**

```js
let a = 5;
let b = 3;
// 여기에 더한 결과를 출력해보세요
```

**2. 이름과 나이를 저장하고 다음과 같은 문장을 출력해보세요.**
`"홍길동님은 20살입니다."`

```js
let name = "홍길동";
let age = 20;
// 여기에 출력 코드를 작성해보세요
```

**3. 정사각형의 한 변 길이를 변수로 저장하고 넓이를 출력해보세요.**

```js
let side = 4;
// 정사각형 넓이: 한 변 × 한 변
```

---

### ✅ 조건문 (4\~6)

**4. 숫자 하나가 짝수인지 홀수인지 출력해보세요.**

```js
let number = 7;
// 출력: "짝수입니다." 또는 "홀수입니다."
```

**5. 나이에 따라 아래 문장을 출력해보세요.**

* 19세 미만: "미성년자입니다."
* 19세 이상: "성인입니다."

```js
let age = 16;
// 조건문을 작성해보세요
```

**6. 비밀번호가 맞는지 확인하는 코드를 작성해보세요.**

```js
let password = "1234";
let input = "1234"; // 이 값이 같으면 "로그인 성공", 아니면 "로그인 실패"
```

---

### ✅ 반복문 (7\~10)

**7. 1부터 10까지 숫자를 차례대로 출력해보세요.**

```js
// for문을 사용해보세요
```

**8. 1부터 100까지 숫자 중에서 5의 배수만 출력해보세요.**

**9. 사용자가 입력한 숫자까지 1씩 증가하면서 출력해보세요.**

```js
let input = 5;
// 예: 1, 2, 3, 4, 5
```

**10. 구구단 2단을 출력해보세요.**

```
2 x 1 = 2  
2 x 2 = 4  
...  
2 x 9 = 18
```

---

아래는 앞서 드린 **JavaScript 초급 연습문제 10개**의 정답 예시입니다.

---

### ✅ 변수 문제 정답

**1. 숫자 두 개를 변수로 저장하고 더한 결과를 출력**

```js
let a = 5;
let b = 3;
console.log(a + b); // 8
```

**2. 이름과 나이를 저장하고 문장 출력**

```js
let name = "홍길동";
let age = 20;
console.log(name + "님은 " + age + "살입니다.");
```

**3. 정사각형 넓이 출력**

```js
let side = 4;
let area = side * side;
console.log("넓이: " + area);
```

---

### ✅ 조건문 문제 정답

**4. 숫자가 짝수인지 홀수인지**

```js
let number = 7;
if (number % 2 === 0) {
  console.log("짝수입니다.");
} else {
  console.log("홀수입니다.");
}
```

**5. 나이에 따라 문장 출력**

```js
let age = 16;
if (age < 19) {
  console.log("미성년자입니다.");
} else {
  console.log("성인입니다.");
}
```

**6. 비밀번호가 맞는지 확인**

```js
let password = "1234";
let input = "1234";

if (input === password) {
  console.log("로그인 성공");
} else {
  console.log("로그인 실패");
}
```

---

### ✅ 반복문 문제 정답

**7. 1부터 10까지 출력**

```js
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

**8. 1부터 100까지 5의 배수만 출력**

```js
for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}
```

**9. 입력한 숫자까지 1씩 증가 출력**

```js
let input = 5;
for (let i = 1; i <= input; i++) {
  console.log(i);
}
```

**10. 구구단 2단 출력**

```js
for (let i = 1; i <= 9; i++) {
  console.log("2 x " + i + " = " + (2 * i));
}
```

---
