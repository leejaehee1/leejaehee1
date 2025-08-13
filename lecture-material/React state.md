## 🧩 연습문제 1 – 버튼 클릭 수 카운트하기

### 🎯 목표

* `useState`를 사용하여 클릭 수를 상태로 저장
* props를 통해 상태와 set함수를 자식 컴포넌트에 전달
* DaisyUI 버튼 사용
* `data/`에 초기값 정의

### 📁 요구 폴더 구조

```
src/
├── pages/
│   └── CounterPage.tsx
├── components/
│   └── CounterButton.tsx
├── data/
│   └── initialCount.ts
```

### ✅ 요구사항

1. `initialCount.ts`에 기본 카운트 `0`을 export 할 것
2. `CounterPage.tsx`에서 `useState`로 count 상태를 선언할 것
3. `CounterButton.tsx` 컴포넌트는 버튼 클릭 시 count 증가
4. 버튼은 `btn btn-primary` 클래스를 사용할 것
5. 버튼에는 `"클릭 수: 0"` 형태의 텍스트가 표시되어야 함

### 📘 주요 문법

* `useState<number>()`
* `props: { count: number; onClick: () => void }`
* TailwindCSS + DaisyUI 버튼 스타일

---

## 🧩 연습문제 2 – 입력된 이름 실시간 출력하기

### 🎯 목표

* 사용자가 입력한 이름을 상태로 저장하고 실시간 반영
* `input` 컴포넌트 분리
* `data/`에 초기 이름 저장

### 📁 요구 폴더 구조

```
src/
├── pages/
│   └── NamePage.tsx
├── components/
│   └── NameInput.tsx
├── data/
│   └── defaultName.ts
```

### ✅ 요구사항

1. `defaultName.ts`에는 빈 문자열 `""`을 기본 이름으로 export
2. `NamePage.tsx`에서 `name` 상태를 선언하고 변경 함수 `setName` 정의
3. `NameInput.tsx`는 `value`와 `onChange`를 props로 받아 input 구성
4. 사용자가 이름을 입력하면 아래에 `안녕하세요, 홍길동님!` 식으로 실시간 표시
5. input에는 `input input-bordered` 클래스를 사용할 것

### 📘 주요 문법

* `useState<string>()`
* `onChange={(e) => setName(e.target.value)}`
* props: `{ value: string; onChange: (v: string) => void }`

---

## 🧩 연습문제 3 – 다크모드 토글 버튼 만들기

### 🎯 목표

* `"light"` 또는 `"dark"` 값을 가지는 테마 상태 만들기
* 버튼 클릭 시 다크/라이트 전환
* TailwindCSS 배경색/텍스트 색 다르게 지정
* DaisyUI 버튼 사용

### 📁 요구 폴더 구조

```
src/
├── pages/
│   └── ThemePage.tsx
├── components/
│   └── ThemeToggle.tsx
├── data/
│   └── defaultTheme.ts
```

### ✅ 요구사항

1. `defaultTheme.ts`에서 `"light"`을 기본 테마로 export
2. `ThemePage.tsx`에서 `theme` 상태를 `useState`로 선언
3. 테마 상태가 `"dark"`이면 `bg-gray-800 text-white`, 아니면 `bg-white text-black` 사용
4. 버튼 클릭 시 테마가 반전되고, 텍스트는 `현재 테마: light → 클릭 시 dark` 형태로 출력
5. 버튼에는 `btn btn-secondary` 클래스 사용

### 📘 주요 문법

* `useState<'light' | 'dark'>()`
* 삼항 연산자: `theme === 'dark' ? '...' : '...'`
* props 전달: `{ theme: string; toggle: () => void }`

---

# ✅ 예제 1: 버튼 클릭 수 세기

### 📁 폴더 구조

```
src/
├── pages/
│   └── CounterPage.tsx
├── components/
│   └── CounterButton.tsx
├── data/
│   └── initialCount.ts
```

### 📘 설명

* `data/initialCount.ts`: 초기값 지정
* `CounterButton`: 클릭 시 count 증가
* `CounterPage`: 상태를 보관하고 버튼과 count 표시

### ✅ 코드

**📂 data/initialCount.ts**

```ts
export const initialCount = 0;
```

**📂 components/CounterButton.tsx**

```tsx
type Props = {
  count: number;
  onClick: () => void;
};

export default function CounterButton({ count, onClick }: Props) {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      클릭 수: {count}
    </button>
  );
}
```

**📂 pages/CounterPage.tsx**

```tsx
import { useState } from "react";
import CounterButton from "../components/CounterButton";
import { initialCount } from "../data/initialCount";

export default function CounterPage() {
  const [count, setCount] = useState(initialCount);

  return (
    <div className="p-6 flex flex-col items-center gap-4">
      <h2 className="text-2xl font-bold">🎯 클릭 카운터</h2>
      <CounterButton count={count} onClick={() => setCount(count + 1)} />
    </div>
  );
}
```

---

# ✅ 예제 2: 이름 입력받기

### 📁 폴더 구조

```
src/
├── pages/
│   └── NamePage.tsx
├── components/
│   └── NameInput.tsx
├── data/
│   └── defaultName.ts
```

### 📘 설명

* `NameInput`: 텍스트 입력
* `NamePage`: 상태 관리 + 실시간 표시

### ✅ 코드

**📂 data/defaultName.ts**

```ts
export const defaultName = "";
```

**📂 components/NameInput.tsx**

```tsx
type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function NameInput({ value, onChange }: Props) {
  return (
    <input
      type="text"
      placeholder="이름을 입력하세요"
      className="input input-bordered w-full max-w-xs"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
```

**📂 pages/NamePage.tsx**

```tsx
import { useState } from "react";
import NameInput from "../components/NameInput";
import { defaultName } from "../data/defaultName";

export default function NamePage() {
  const [name, setName] = useState(defaultName);

  return (
    <div className="p-6 text-center">
      <h2 className="text-xl font-semibold mb-4">😊 이름 입력하기</h2>
      <NameInput value={name} onChange={setName} />
      <p className="mt-4">안녕하세요, <strong>{name || "..."}</strong>님!</p>
    </div>
  );
}
```

---

# ✅ 예제 3: 다크모드 ON/OFF

### 📁 폴더 구조

```
src/
├── pages/
│   └── ThemePage.tsx
├── components/
│   └── ThemeToggle.tsx
├── data/
│   └── defaultTheme.ts
```

### 📘 설명

* `defaultTheme.ts`: 초기 테마 상태 ("light")
* `ThemeToggle`: 버튼 클릭 시 토글
* `ThemePage`: 배경색과 메시지 출력

### ✅ 코드

**📂 data/defaultTheme.ts**

```ts
export const defaultTheme = "light"; // 또는 "dark"
```

**📂 components/ThemeToggle.tsx**

```tsx
type Props = {
  theme: string;
  toggle: () => void;
};

export default function ThemeToggle({ theme, toggle }: Props) {
  return (
    <button className="btn btn-secondary" onClick={toggle}>
      현재 테마: {theme} → 전환
    </button>
  );
}
```

**📂 pages/ThemePage.tsx**

```tsx
import { useState } from "react";
import ThemeToggle from "../components/ThemeToggle";
import { defaultTheme } from "../data/defaultTheme";

export default function ThemePage() {
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <div className={`p-6 text-center ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
      <h2 className="text-2xl font-bold mb-4">🌓 테마 전환</h2>
      <ThemeToggle theme={theme} toggle={toggleTheme} />
    </div>
  );
}
```

---

## 📌 사용법

`App.tsx`에서 각 페이지를 호출해서 확인해보세요:

```tsx
import ThemePage from "./pages/ThemePage";

function App() {
  return <ThemePage />;
}
```
