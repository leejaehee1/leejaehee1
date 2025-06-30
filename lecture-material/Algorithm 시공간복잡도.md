
## ✅ 시간복잡도 (Time Complexity)

**시간복잡도**는 **입력 크기(n)가 커질 때, 알고리즘이 수행하는 연산 횟수가 얼마나 증가하는지**를 나타냅니다. 즉, **성능을 수치적으로 추정하는 기준**이에요.

[빅오 표기법](https://noahlogs.tistory.com/27)

### 예시 1: O(1) – 상수 시간

```js
function printFirst(arr) {
  console.log(arr[0]); // 항상 1번만 실행
}
```

* 입력 크기와 상관없이 **한 번만 실행**되므로 **O(1)**

---

### 예시 2: O(n) – 선형 시간

```js
function printAll(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
```

* 배열의 길이 `n`만큼 반복 → **O(n)**

---

### 예시 3: O(n²) – 이중 반복문 (제곱 시간)

```js
function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}
```

* 반복문이 2번 중첩 → **O(n²)**

---

### 주요 시간복잡도 종류

| 시간복잡도      | 설명               | 예시                          |
| ---------- | ---------------- | --------------------------- |
| O(1)       | 입력 크기와 무관한 상수 시간 | 배열 접근, 변수 선언 등              |
| O(log n)   | 로그 시간            | 이진 탐색                       |
| O(n)       | 선형 시간            | 단순 반복문                      |
| O(n log n) | 빠른 정렬 (퀵, 병합 등)  | 대부분의 효율적 정렬 알고리즘            |
| O(n²)      | 이중 반복문           | 버블 정렬, 삽입 정렬                |
| O(2ⁿ)      | 지수 시간            | 피보나치 재귀, 백트래킹 탐색            |
| O(n!)      | 팩토리얼 시간          | 순열 생성, 완전탐색 문제 (예: N-Queen) |

![그래프](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99EF1E395C7EB4B601)

---

## ✅ 공간복잡도 (Space Complexity)

**공간복잡도**는 **알고리즘이 사용하는 메모리의 양**을 의미합니다. 변수, 배열, 함수 호출 스택 등이 이에 포함돼요.

### 예시 1: O(1)

```js
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
```

* 아무리 입력이 커져도 **추가 변수 하나만 사용** → **O(1)**

---

### 예시 2: O(n)

```js
function copyArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
}
```

* 입력 크기만큼 새로운 배열 생성 → **O(n)**

---

## ✅ 시간복잡도 vs 공간복잡도

| 항목     | 시간복잡도           | 공간복잡도            |
| ------ | --------------- | ---------------- |
| 의미     | 연산 수행 횟수        | 사용하는 메모리 크기      |
| 최적화 방법 | 반복문, 알고리즘 구조 개선 | 변수/자료구조 최소화      |
| 비교 대상  | 얼마나 빠른가?        | 얼마나 메모리를 적게 쓰는가? |

---

## ✅ 결론

* **시간복잡도는 효율성(속도)** 을 판단하는 기준
* **공간복잡도는 메모리 사용량**을 판단하는 기준
* 알고리즘 문제에서는 보통 **시간복잡도를 더 중요하게 고려**하지만, 제한 메모리가 적은 환경에서는 공간복잡도도 중요해요.
