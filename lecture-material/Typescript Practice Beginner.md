
# 🧪 TypeScript 타입 연습문제 10선

---

### ✅ 문제 1. 문자열 변수 선언

**설명:** 이름을 저장하는 `name`이라는 변수를 선언하고, 타입을 지정하세요. 값은 `"Alice"`로 지정하세요.

---

### ✅ 문제 2. 숫자와 boolean 타입

**설명:**

* 나이를 나타내는 `age` 변수는 숫자 타입
* 학생 여부를 나타내는 `isStudent`는 boolean 타입
  타입을 지정하고 값을 각각 21, true로 설정하세요.

---

### ✅ 문제 3. 함수 매개변수와 반환 타입

**설명:**
두 숫자를 받아서 더한 값을 반환하는 함수 `add`를 작성하세요.
매개변수와 반환값에 모두 타입을 지정하세요.

---

### ✅ 문제 4. 배열 타입

**설명:**
숫자로 구성된 점수 배열 `scores`를 선언하고 `[80, 90, 100]`을 넣으세요.
배열의 타입을 명확히 지정하세요.

---

### ✅ 문제 5. 객체 타입 정의

**설명:**
사람을 나타내는 객체 `person`을 선언하세요.

* 이름: 문자열
* 나이: 숫자
  객체 리터럴에 타입을 직접 지정하세요.

---

### ✅ 문제 6. 유니언 타입

**설명:**
`id`라는 변수는 숫자이거나 문자열일 수 있습니다.
적절한 타입으로 선언하고, `"user123"`을 할당하세요.

---

### ✅ 문제 7. 인터페이스 사용

**설명:**
`Product`라는 인터페이스를 선언하고

* `name`: string
* `price`: number
  속성을 갖도록 한 뒤, 그 타입으로 객체를 만들어보세요.

---

### ✅ 문제 8. 선택적 속성 (optional property)

**설명:**
`User` 인터페이스를 선언하고

* `name`: string
* `email`: string (선택적 속성)
  을 갖도록 정의하세요. 그리고 email이 없는 사용자를 생성하세요.

---

### ✅ 문제 9. 타입 별칭(Type Alias)

**설명:**
`Point`라는 타입 별칭을 만들어

* `x`: number
* `y`: number
  을 포함하도록 하고, 객체를 하나 선언해보세요.

---

### ✅ 문제 10. 함수 타입 정의

**설명:**
문자열을 받아 대문자로 반환하는 함수 `toUpper`를 함수 타입을 명시해서 작성하세요.


---

# ✅ TypeScript 타입 연습문제 – 정답 코드

---

### 1. 문자열 변수 선언

```ts
let name: string = "Alice";
```

---

### 2. 숫자와 boolean 타입

```ts
let age: number = 21;
let isStudent: boolean = true;
```

---

### 3. 함수 매개변수와 반환 타입

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

---

### 4. 배열 타입

```ts
let scores: number[] = [80, 90, 100];
// 또는: Array<number> = [80, 90, 100];
```

---

### 5. 객체 타입 정의

```ts
let person: { name: string; age: number } = {
  name: "Alice",
  age: 21,
};
```

---

### 6. 유니언 타입

```ts
let id: number | string = "user123";
```

---

### 7. 인터페이스 사용

```ts
interface Product {
  name: string;
  price: number;
}

const item: Product = {
  name: "Keyboard",
  price: 35000,
};
```

---

### 8. 선택적 속성 (optional property)

```ts
interface User {
  name: string;
  email?: string; // 선택적 속성
}

const u: User = {
  name: "Lee",
};
```

---

### 9. 타입 별칭(Type Alias)

```ts
type Point = {
  x: number;
  y: number;
};

const p: Point = {
  x: 10,
  y: 20,
};
```

---

### 10. 함수 타입 정의

```ts
const toUpper: (str: string) => string = function (str) {
  return str.toUpperCase();
};

// 또는 화살표 함수 버전:
const toUpper2 = (str: string): string => str.toUpperCase();
```

---

