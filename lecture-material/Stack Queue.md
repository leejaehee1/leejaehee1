
**Stack과 Queue**는 프로그래밍에서 가장 기본이 되는 **선형 자료구조(linear data structures)** 로, 각각의 특징과 작동 원리를 **시각적으로** 정리해 드리겠습니다.

---

## 🧱 1. Stack (스택)

### ✅ 정의

* **LIFO**: Last In, First Out (마지막에 들어간 게 가장 먼저 나옴)
* 책 더미, 접시 더미와 같은 구조
* 데이터를 **위에서 쌓고 위에서 꺼냄**

---

[큐, 스택, 트리 자료구조 참조 자료](https://helloworldjavascript.net/pages/282-data-structures.html)

### ✅ 주요 연산

| 연산                  | 설명                    |
| ------------------- | --------------------- |
| `push()`            | 스택의 맨 위에 추가           |
| `pop()`             | 스택의 맨 위에서 제거 (반환)     |
| `peek()` 또는 `top()` | 스택의 맨 위 값을 조회만 (제거 X) |

---

### ✅ 시각적 예시

```text
Stack 상태 (맨 위가 오른쪽):

[1] -> push(2)  
[1, 2] -> push(3)  
[1, 2, 3] -> pop() => 3 반환됨  
[1, 2] -> peek() => 2
```

### ✅ JS 코드 예시

```javascript
const stack = [];

stack.push(1);  // [1]
stack.push(2);  // [1, 2]
stack.push(3);  // [1, 2, 3]

console.log(stack.pop());  // 3
console.log(stack);        // [1, 2]

console.log(stack[stack.length - 1]); // 2 (peek)
```

---

## 🧱 2. Queue (큐)

### ✅ 정의

* **FIFO**: First In, First Out (처음 들어간 게 가장 먼저 나옴)
* 줄 서기, 프린터 대기열과 같은 구조
* 데이터를 **뒤에서 넣고 앞에서 꺼냄**

---

### ✅ 주요 연산

| 연산          | 설명                    |
| ----------- | --------------------- |
| `enqueue()` | 뒤쪽에 데이터 추가            |
| `dequeue()` | 앞쪽에서 데이터 제거 (반환)      |
| `front()`   | 가장 앞의 데이터를 조회만 (제거 X) |

---

### ✅ 시각적 예시

```text
Queue 상태 (왼쪽이 앞, 오른쪽이 뒤):

[] -> enqueue('A')  
['A'] -> enqueue('B')  
['A', 'B'] -> dequeue() => 'A' 반환됨  
['B'] -> front() => 'B'
```

### ✅ JS 코드 예시

```javascript
const queue = [];

queue.push("A");  // enqueue
queue.push("B");
console.log(queue.shift());  // dequeue -> 'A'
console.log(queue);          // ['B']
console.log(queue[0]);       // front -> 'B'
```

---

## 📊 Stack vs Queue 비교 요약

| 항목    | Stack           | Queue               |
| ----- | --------------- | ------------------- |
| 구조    | LIFO (후입선출)     | FIFO (선입선출)         |
| 추가 위치 | 맨 위 (push)      | 맨 뒤 (enqueue/push)  |
| 제거 위치 | 맨 위 (pop)       | 맨 앞 (dequeue/shift) |
| 사용 예시 | 함수 호출 스택, 뒤로 가기 | 작업 대기열, 인쇄 큐, 메시지   |

---

### 🧠 실습 팁

| 유형       | 실습 아이디어                           |
| -------- | --------------------------------- |
| Stack 실습 | 브라우저 "뒤로 가기" 버튼 구현 (페이지 방문 기록 쌓기) |
| Queue 실습 | 프린터 작업 요청 대기열 만들기                 |

---

