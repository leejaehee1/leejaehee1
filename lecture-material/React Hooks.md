## 🧩 React Hooks 정리표

| 훅 이름                  | 기능 설명                                 | 주요 사용 시점                            |
| --------------------- | ------------------------------------- | ----------------------------------- |
| `useState`            | 컴포넌트 내부 상태를 관리                        | 숫자, 문자열, 객체 등 상태 저장 및 업데이트가 필요할 때   |
| `useEffect`           | 컴포넌트가 마운트/업데이트/언마운트 될 때 실행되는 부수 효과 처리 | 데이터 fetching, 구독 설정, 이벤트 등록 등       |
| `useContext`          | Context API에 저장된 값을 꺼내 사용             | 전역 상태 (예: 로그인 정보, 테마 등) 사용 시        |
| `useReducer`          | 복잡한 상태 로직을 액션 기반으로 구조화                | 여러 상태를 조건문 없이 일관되게 업데이트할 때          |
| `useMemo`             | 값 계산 결과를 메모이제이션 (캐싱)                  | 무거운 계산 결과를 다시 계산하지 않도록 할 때          |
| `useCallback`         | 함수를 메모이제이션 (함수 재생성 방지)                | 자식 컴포넌트에 함수를 props로 전달할 때           |
| `useRef`              | DOM 요소 또는 변경되지 않는 참조값 저장              | 포커스 설정, 이전 값 기억, setTimeout ID 저장 등 |
| `useImperativeHandle` | ref를 통해 외부에서 특정 함수를 노출 (커스텀 컴포넌트용)    | 외부에서 특정 메서드를 호출하도록 만들고 싶을 때         |
| `useLayoutEffect`     | DOM이 그려지기 **직전**에 동기적으로 실행            | 레이아웃 계산 또는 DOM 조작 필요 시              |
| `useDebugValue`       | 개발자 도구에 커스텀 디버그 정보 표시                 | 커스텀 훅 개발 시 상태 확인용 표시                |
| `useId`               | 고유한 ID를 생성                            | label / input 연결 시 고유 ID가 필요할 때     |
| `useDeferredValue`    | 입력값 업데이트를 비동기로 지연 처리                  | 성능 최적화를 위한 비동기 렌더링                  |
| `useTransition`       | 상태 업데이트를 우선순위 낮게 처리 (UI 응답성 향상)       | 대규모 상태 변경 시 사용자 입력 반응 우선 처리         |

---

### 1. **useState**

```js
import { useState } from 'react';
// 컴포넌트 내부에서 값(상태) 관리
const [count, setCount] = useState(0);

setCount(count + 1);
```

> 숫자, 문자열, 객체 등 상태를 저장·변경하고 싶을 때

---

### 2. **useEffect**

```js
import { useEffect } from 'react';
// 컴포넌트가 렌더링될 때 부수 효과 실행
useEffect(() => {
  console.log('컴포넌트 마운트/업데이트!');
}, []);
```

> 데이터 불러오기, 구독, 타이머 등 “렌더 이후”에 실행할 코드

---

### 3. **useContext**

```js
import { useContext } from 'react';
// Context 값을 쉽게 꺼내 쓸 때
const theme = useContext(ThemeContext);
```

> 전역 데이터(테마, 로그인 등) 사용할 때

---

### 4. **useReducer**

```js
import { useReducer } from 'react';
// 액션 기반 복잡한 상태 관리
const [state, dispatch] = useReducer(reducer, 초기값);

dispatch({ type: 'INCREMENT' });
```

> 여러 상태, 조건문 없는 업데이트, Redux 비슷하게 쓸 때

---

### 5. **useMemo**

```js
import { useMemo } from 'react';
// 무거운 연산 결과를 기억(캐싱)
const total = useMemo(() => price * count, [price, count]);
```

> 값 계산이 비싸고, 불필요한 재계산을 피하고 싶을 때

---

### 6. **useCallback**

```js
import { useCallback } from 'react';
// 함수를 기억(재생성 방지)
const handleClick = useCallback(() => {
  alert('clicked!');
}, []);
```

> 함수를 props로 넘겨줄 때, 불필요한 렌더 방지

---

### 7. **useRef**

```js
import { useRef } from 'react';
// DOM 또는 값 참조(변경돼도 리렌더 없음)
const inputRef = useRef();

<input ref={inputRef} />
```

> DOM 직접 접근, 이전 값 저장, setTimeout ID 보관 등

---

### 8. **useImperativeHandle**

```js
import { useImperativeHandle, forwardRef } from 'react';
// ref로 외부에 함수/값 노출 (커스텀 컴포넌트)
useImperativeHandle(ref, () => ({
  focus: () => { /* ... */ }
}));
```

> 커스텀 컴포넌트를 ref로 제어하고 싶을 때

---

### 9. **useLayoutEffect**

```js
import { useLayoutEffect } from 'react';
// DOM 변경 직후 동기 실행 (깜빡임 방지 등)
useLayoutEffect(() => {
  // 레이아웃 계산, DOM 조작
}, []);
```

> 화면 깜빡임 방지, DOM 레이아웃 조작 필요시

---

### 10. **useDebugValue**

```js
import { useDebugValue } from 'react';
// 개발자도구에서 커스텀 훅 값 표시
useDebugValue(count);
```

> 커스텀 훅 내부 값 확인(디버깅 용도)

---

### 11. **useId**

```js
import { useId } from 'react';
// 고유 ID 생성 (접근성, 라벨-인풋 연결)
const id = useId();

<label htmlFor={id}>이름</label>
<input id={id} />
```

> label/input 등 자동으로 유일한 ID 필요할 때

---

### 12. **useDeferredValue**

```js
import { useDeferredValue } from 'react';
// 입력값을 비동기로 천천히 반영
const deferred = useDeferredValue(value);
```

> 검색어 입력 등 즉시 반영하지 않고, 느리게 처리할 때

---

### 13. **useTransition**

```js
import { useTransition } from 'react';
// 상태 변경을 낮은 우선순위로 처리 (UI 응답성↑)
const [isPending, startTransition] = useTransition();

startTransition(() => {
  setList(heavyData);
});
```

> 무거운 상태 변경 시, 입력/애니메이션을 부드럽게 처리

---

## 🔍 사용 가이드라인 요약

| 상황                       | 추천 훅                     |
| ------------------------ | ------------------------ |
| 단순 숫자/문자 상태              | `useState`               |
| 복잡한 조건/여러 상태             | `useReducer`             |
| 부수 효과 필요 (fetch, 이벤트 등록) | `useEffect`              |
| DOM 직접 참조 필요             | `useRef`                 |
| 전역 상태 공유                 | `useContext`             |
| 렌더링 성능 최적화               | `useMemo`, `useCallback` |
| 외부에서 메서드 호출 허용           | `useImperativeHandle`    |

---

## 📚 참고 팁

* **모든 훅은 컴포넌트 최상단에서만 호출**해야 합니다.
* 조건문/반복문 안에서는 훅을 호출하지 않아야 합니다.
* 커스텀 훅을 만들어 공통 로직을 재사용할 수 있습니다.

