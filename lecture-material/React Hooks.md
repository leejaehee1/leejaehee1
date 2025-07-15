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

## 🧠 핵심 훅 요약

### 1. `useState`

```tsx
const [count, setCount] = useState(0);
```

* 상태를 저장하고 업데이트
* 비동기적 동작

---

### 2. `useEffect`

```tsx
useEffect(() => {
  console.log("컴포넌트가 마운트되거나 count가 바뀔 때 실행");
  return () => console.log("언마운트 또는 업데이트 전 정리");
}, [count]);
```

* 부수 효과(side effect) 처리
* mount, update, unmount 타이밍 제어

---

### 3. `useMemo`

```tsx
const expensive = useMemo(() => computeHeavy(input), [input]);
```

* input 값이 바뀌지 않으면 `computeHeavy()`는 다시 실행되지 않음
* 값의 재계산을 방지

---

### 4. `useCallback`

```tsx
const handleClick = useCallback(() => console.log("클릭"), []);
```

* 함수를 메모이제이션하여 자식 컴포넌트의 불필요한 리렌더링 방지

---

### 5. `useRef`

```tsx
const inputRef = useRef<HTMLInputElement>(null);
inputRef.current?.focus();
```

* DOM 접근 or 변하지 않는 값 참조용
* 렌더링에는 영향을 주지 않음

---

### 6. `useReducer`

```tsx
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    default: return state;
  }
};

const [state, dispatch] = useReducer(reducer, { count: 0 });
```

* 복잡한 상태를 `dispatch(action)` 방식으로 업데이트
* Redux와 유사한 구조

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

