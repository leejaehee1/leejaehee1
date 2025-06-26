아래는 **JavaScript 변수, 조건문, 반복문을 모두 활용하는 중급 난이도 문제 10개**입니다. 초급을 벗어난 수준의 논리와 문제 해결력을 요구합니다.

---

### 🧠 JavaScript 중급 연습문제 10선

#### ✅ 1. 1부터 100까지의 숫자 중 3과 5의 공배수만 출력하세요.

#### ✅ 2. 사용자로부터 입력받은 문자열이 회문인지(앞뒤가 같은지) 확인하세요. 예: "level", "racecar"

#### ✅ 3. 1부터 입력한 숫자까지의 합계를 구하세요. 예: 입력 10 → 결과 55

#### ✅ 4. 배열에서 짝수만 찾아 새로운 배열로 만들고 출력하세요.

`예: [1, 2, 3, 4, 5, 6] → [2, 4, 6]`

#### ✅ 5. 숫자로 이루어진 배열에서 최대값과 최소값을 찾아 출력하세요.

#### ✅ 6. 주어진 문자열에서 모음(a, e, i, o, u)의 개수를 세어 출력하세요.

#### ✅ 7. 구구단 전체(2단부터 9단까지)를 출력하세요.

#### ✅ 8. 배열에 있는 숫자를 모두 더해서 평균을 구하세요.

#### ✅ 9. 입력받은 문자열을 뒤집어서 출력하세요.

예: "hello" → "olleh"

#### ✅ 10. 100 이하의 소수를 모두 출력하세요.

---

### 📘 사용 예시 지시

* `prompt()`는 브라우저 환경에서 사용자 입력을 받을 때 사용합니다.
* Node.js 환경이라면 `readline` 패키지로 처리하거나 값을 직접 설정하세요.

---

아래는 앞에서 드린 **JavaScript 중급 문제 10개에 대한 정답 예제 코드**입니다.

---

### ✅ 1. 1부터 100까지의 숫자 중 3과 5의 공배수 출력

```javascript
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}
```

---

### ✅ 2. 회문인지 확인

```javascript
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

console.log(isPalindrome("level")); // true
console.log(isPalindrome("hello")); // false
```

---

### ✅ 3. 1부터 입력한 숫자까지의 합계

```javascript
const num = 10;
let sum = 0;
for (let i = 1; i <= num; i++) {
  sum += i;
}
console.log(sum); // 55
```

---

### ✅ 4. 짝수만 새로운 배열로 만들기

```javascript
const arr = [1, 2, 3, 4, 5, 6];
const evenNumbers = arr.filter(n => n % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]
```

---

### ✅ 5. 배열에서 최대값과 최소값 찾기

```javascript
const numbers = [10, 3, 45, 7, 22];
const max = Math.max(...numbers);
const min = Math.min(...numbers);
console.log("최대:", max, "최소:", min);
```

---

### ✅ 6. 문자열 내 모음 개수 세기

```javascript
const str = "hello world";
const vowels = ['a', 'e', 'i', 'o', 'u'];
let count = 0;

for (let char of str.toLowerCase()) {
  if (vowels.includes(char)) count++;
}
console.log("모음 개수:", count);
```

---

### ✅ 7. 구구단 전체 출력

```javascript
for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}
```

---

### ✅ 8. 배열의 평균 구하기

```javascript
const nums = [10, 20, 30, 40];
const sum = nums.reduce((acc, cur) => acc + cur, 0);
const avg = sum / nums.length;
console.log("평균:", avg); // 25
```

---

### ✅ 9. 문자열 뒤집기

```javascript
const input = "javascript";
const reversed = input.split('').reverse().join('');
console.log(reversed); // tpircsavaj
```

---

### ✅ 10. 100 이하의 소수 출력

```javascript
for (let i = 2; i <= 100; i++) {
  let isPrime = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) console.log(i);
}
```

---

