# 📚 React Hook 수업 교안 – `useState`, `useEffect`

---

## 1️⃣ `useState` – 상태(state)를 만들고 변경하기

### 🎯 학습 목표

* 컴포넌트 내부에서 데이터를 저장하고 조작할 수 있는 방법 이해
* 상태가 변경되면 컴포넌트가 다시 렌더링된다는 개념 체득

---

### 📘 기본 개념

| 항목  | 설명                                                 |
| --- | -------------------------------------------------- |
| 정의  | `useState`는 함수형 컴포넌트에서 **상태 값을 저장**할 수 있는 Hook입니다. |
| 사용법 | `[value, setValue] = useState(initialValue)`       |
| 특징  | 상태 값이 변경되면 **자동으로 리렌더링**됩니다.                       |

---

### 🧪 실습 예제 1: 카운터 버튼

```tsx
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center mt-10">
      <p className="text-xl">현재 카운트: {count}</p>
      <button
        className="btn btn-primary mt-4"
        onClick={() => setCount(count + 1)}
      >
        +1 증가
      </button>
    </div>
  );
}
```

---

### 💬 예상 질문

| 질문                    | 답변 요약                                  |
| --------------------- | -------------------------------------- |
| 왜 `useState`를 써야 하나요? | 변수는 재렌더링 시 초기화되지만 `useState`는 유지됩니다.   |
| 상태가 바뀌면 어떻게 되나요?      | React는 해당 컴포넌트를 다시 렌더링합니다.             |
| 여러 개의 상태를 선언할 수 있나요?  | 네, `useState`는 원하는 만큼 여러 번 사용할 수 있습니다. |

---

### 📌 요약 정리

✅ `useState`는 React 함수 컴포넌트에서 상태를 관리할 수 있게 해준다.
✅ 상태가 변경되면 자동으로 컴포넌트가 다시 그려진다.

---

## 2️⃣ `useEffect` – 부수 효과(side effect) 처리하기

### 🎯 학습 목표

* 컴포넌트의 생명주기(마운트, 업데이트, 언마운트)를 이해한다
* API 호출, 타이머, 이벤트 등록 등 **DOM 외부 작업**에 `useEffect`를 활용하는 방법을 익힌다

---

### 📘 기본 개념

| 항목           | 설명                                              |
| ------------ | ----------------------------------------------- |
| 정의           | `useEffect`는 컴포넌트가 렌더링될 때 실행되는 **부수 효과 함수**입니다. |
| 사용법          | `useEffect(() => { ... }, [deps])`              |
| 의존성 배열(deps) | 어떤 값이 바뀌었을 때만 실행할지를 지정합니다. 생략 시 매번 실행됩니다.       |

---

### 🧪 실습 예제 2: 타이틀 변경

```tsx
import { useState, useEffect } from 'react';

export default function TitleUpdater() {
  const [name, setName] = useState('');

  useEffect(() => {
    document.title = name ? `${name}님 환영합니다!` : 'React App';
  }, [name]);

  return (
    <div className="p-4">
      <input
        type="text"
        className="input input-bordered"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="이름을 입력하세요"
      />
    </div>
  );
}
```

---

### 💬 예상 질문

| 질문                     | 답변 요약                                       |
| ---------------------- | ------------------------------------------- |
| useEffect는 언제 실행되나요?   | 기본적으로 컴포넌트가 처음 렌더링된 후, 그리고 의존성이 바뀔 때 실행됩니다. |
| 의존성 배열이 없으면 어떻게 되나요?   | 매 렌더링마다 실행됩니다.                              |
| 정리(clean-up)은 어떻게 하나요? | `return () => {...}` 형태로 내부에서 정리합니다.        |

---

### 📌 요약 정리

✅ `useEffect`는 DOM 변경 외의 작업(API, 타이머 등)에 사용된다.
✅ 두 번째 인자인 의존성 배열로 실행 조건을 제어할 수 있다.
✅ 타이머나 이벤트 등록은 **clean-up 함수**로 해제해야 메모리 누수를 방지할 수 있다.

---

## 🧠 복습 퀴즈

1. `useState`는 무엇을 하기 위한 Hook인가요?

   * (A) 외부 API 호출
   * (B) 상태 값 저장 및 변경 ✅
   * (C) DOM에 직접 접근
   * (D) 화면 이동 처리

2. `useEffect`의 의존성 배열(\[])을 비우면 언제 실행되나요?

   * (A) 상태가 변경될 때마다
   * (B) 이벤트가 발생할 때
   * (C) 최초 한 번 ✅
   * (D) 절대 실행되지 않음

---

## 🧪 `useState` 예제 10선

---

### 1. **카운터 증가 버튼**

```tsx
const [count, setCount] = useState(0);
<button onClick={() => setCount(count + 1)}>Count: {count}</button>
```

✅ 숫자형 상태 변경

---

### 2. **입력창 실시간 반영**

```tsx
const [name, setName] = useState('');
<input value={name} onChange={(e) => setName(e.target.value)} />
<p>안녕하세요, {name}님!</p>
```

✅ 문자열 상태 변경, 이벤트 처리

---

### 3. **다크모드 토글**

```tsx
const [dark, setDark] = useState(false);
<button onClick={() => setDark(!dark)}>테마: {dark ? '다크' : '라이트'}</button>
```

✅ 불리언 상태 토글

---

### 4. **숫자 증가/감소 버튼**

```tsx
const [num, setNum] = useState(0);
<button onClick={() => setNum(num - 1)}>-</button>
<span>{num}</span>
<button onClick={() => setNum(num + 1)}>+</button>
```

✅ 숫자 상태 조작

---

### 5. **배열에 아이템 추가**

```tsx
const [items, setItems] = useState<string[]>([]);
<input onKeyDown={(e) => {
  if (e.key === 'Enter') setItems([...items, e.currentTarget.value]);
}} />
<ul>{items.map((item, i) => <li key={i}>{item}</li>)}</ul>
```

✅ 배열 상태 추가

---

### 6. **체크박스 상태**

```tsx
const [checked, setChecked] = useState(false);
<input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
<label>{checked ? '체크됨' : '체크 안됨'}</label>
```

✅ `boolean` 타입 상태

---

### 7. **객체 상태 업데이트 (프로필 정보)**

```tsx
const [user, setUser] = useState({ name: '', age: 0 });
<input onChange={(e) => setUser({ ...user, name: e.target.value })} />
<input type="number" onChange={(e) => setUser({ ...user, age: +e.target.value })} />
<p>{user.name} ({user.age}세)</p>
```

✅ 객체 상태 변경

---

### 8. **탭 선택 상태**

```tsx
const [tab, setTab] = useState<'home' | 'about' | 'contact'>('home');
<button onClick={() => setTab('home')}>홈</button>
<button onClick={() => setTab('about')}>소개</button>
<button onClick={() => setTab('contact')}>연락처</button>
<div>현재 탭: {tab}</div>
```

✅ 문자열 or 리터럴 유니언 타입

---

### 9. **랜덤 숫자 생성기**

```tsx
const [num, setNum] = useState(0);
<button onClick={() => setNum(Math.floor(Math.random() * 100))}>랜덤 생성</button>
<p>숫자: {num}</p>
```

✅ `setState`에 함수 적용

---

### 10. **카운트 초기화 기능 포함**

```tsx
const [count, setCount] = useState(0);
<button onClick={() => setCount(count + 1)}>+1</button>
<button onClick={() => setCount(0)}>초기화</button>
```

✅ 상태 초기화

---

## 📦 보너스: 상태 + 스타일 변경

```tsx
const [active, setActive] = useState(false);
<button
  className={active ? 'btn btn-success' : 'btn btn-outline'}
  onClick={() => setActive(!active)}
>
  {active ? '활성화됨' : '비활성화됨'}
</button>
```

---

## 🧩 `useEffect` 연습문제 10선

---

### 1. ✅ **페이지 진입 시 콘솔에 "페이지가 열렸습니다" 출력하기**

**목표**: `useEffect(() => {}, [])` 기본 구조 익히기

```tsx
// 힌트: 컴포넌트가 마운트될 때 한 번만 실행
```

---

### 2. ⏰ **페이지 진입 3초 후에 "환영합니다!" 알림창 띄우기**

**목표**: `setTimeout`과 clean-up 연습

```tsx
// useEffect 내부에서 setTimeout 설정 → 컴포넌트 언마운트 시 clearTimeout
```

---

### 3. 🔄 **버튼 클릭 시 숫자 증가 → useEffect로 숫자 변경 감지해서 콘솔에 출력**

**목표**: 의존성 배열 `[count]` 활용

```tsx
// useState로 count 선언 → useEffect에서 count 변경 시마다 console.log
```

---

### 4. 🧹 **컴포넌트가 언마운트될 때 콘솔에 "종료됨" 출력하기**

**목표**: clean-up 함수 (`return () => {}`) 사용

```tsx
// 힌트: useEffect 안에서 return 함수로 클린업 정의
```

---

### 5. 🔍 **input에 입력한 이름을 감지해서 실시간으로 문서 타이틀(title) 변경하기**

**목표**: DOM API 조작

```tsx
// useState로 name 상태 만들고 → useEffect에서 document.title 변경
```

---

### 6. 🌐 **페이지 진입 시 외부 API 호출하여 유저 이름 가져오기 (예: jsonplaceholder.typicode.com/users/1)**

**목표**: 비동기 API 호출

```tsx
// fetch 또는 axios 사용 + async 함수는 useEffect 내부에서 따로 정의
```

---

### 7. 📆 **1초마다 현재 시간을 업데이트하여 실시간 시계 만들기**

**목표**: `setInterval` 활용 + 클린업

```tsx
// useState로 time 저장 + useEffect에서 setInterval, 언마운트 시 clearInterval
```

---

### 8. 📱 **윈도우 창 너비를 감지하여 width 상태에 저장하고 리사이즈 될 때마다 업데이트**

**목표**: 이벤트 리스너 등록/해제

```tsx
// window.addEventListener('resize', ...) + clean-up에서 removeEventListener
```

---

### 9. 🗑 **다른 상태를 바꿀 때 불필요하게 실행되지 않도록 의존성 배열 최적화하기**

**목표**: `[state]`, `[]`, 생략 등 비교

```tsx
// count와 text 두 상태가 있을 때 → count 변경만 감지하도록 설정
```

---

### 10. 💡 **다크모드 상태를 감지해서 body에 클래스 추가/제거 하기**

**목표**: 조건부 DOM 조작

```tsx
// 예: dark일 때 document.body.classList.add('dark') / light일 때 제거
```

---

## 📌 보너스 정리

| 주제          | 관련 문제 번호 |
| ----------- | -------- |
| 마운트/언마운트 감지 | 1, 2, 4  |
| 상태 변경 감지    | 3, 5, 9  |
| DOM 조작      | 5, 10    |
| 비동기 API     | 6        |
| 타이머         | 2, 7     |
| 이벤트 리스너     | 8        |

---


# 📘 `useEffect` 연습문제 정답 예제 모음

---

## ✅ 1. 페이지 진입 시 콘솔 출력

```tsx
import { useEffect } from 'react';

export default function Example1() {
  useEffect(() => {
    console.log('페이지가 열렸습니다');
  }, []);

  return <p>페이지가 열렸는지 콘솔을 확인하세요.</p>;
}
```

---

## ✅ 2. 3초 후 환영 알림

```tsx
import { useEffect } from 'react';

export default function Example2() {
  useEffect(() => {
    const timer = setTimeout(() => {
      alert('환영합니다!');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return <p>3초 후 알림이 표시됩니다.</p>;
}
```

---

## ✅ 3. 버튼 클릭 시 count 변화 감지

```tsx
import { useEffect, useState } from 'react';

export default function Example3() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('count 변경됨:', count);
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

---

## ✅ 4. 컴포넌트 언마운트 시 로그 출력

```tsx
import { useEffect } from 'react';

export default function Example4() {
  useEffect(() => {
    return () => {
      console.log('컴포넌트가 종료됨');
    };
  }, []);

  return <p>이 컴포넌트를 제거하면 콘솔에 로그가 찍힙니다.</p>;
}
```

---

## ✅ 5. 이름 입력 → 문서 제목 변경

```tsx
import { useEffect, useState } from 'react';

export default function Example5() {
  const [name, setName] = useState('');

  useEffect(() => {
    document.title = name ? `${name}님 환영합니다!` : 'React App';
  }, [name]);

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="이름을 입력하세요"
    />
  );
}
```

---

## ✅ 6. API 호출 → 유저 이름 표시

```tsx
import { useEffect, useState } from 'react';

export default function Example6() {
  const [name, setName] = useState('');

  useEffect(() => {
    async function fetchUser() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const data = await res.json();
      setName(data.name);
    }

    fetchUser();
  }, []);

  return <p>유저 이름: {name}</p>;
}
```

---

## ✅ 7. 1초마다 현재 시간 표시

```tsx
import { useEffect, useState } from 'react';

export default function Example7() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <p>현재 시각: {time}</p>;
}
```

---

## ✅ 8. 창 너비 감지하여 표시

```tsx
import { useEffect, useState } from 'react';

export default function Example8() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <p>창 너비: {width}px</p>;
}
```

---

## ✅ 9. 상태 변경 감지 최적화

```tsx
import { useEffect, useState } from 'react';

export default function Example9() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    console.log('count 변경됨:', count);
  }, [count]);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </>
  );
}
```

---

## ✅ 10. 다크모드 → body 클래스 토글

```tsx
import { useEffect, useState } from 'react';

export default function Example10() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <button onClick={() => setDark(!dark)}>
      현재 테마: {dark ? '다크' : '라이트'}
    </button>
  );
}
```

## 📁 예제 개요

> 💡 **기능**: 유저 이름을 입력하면 API에서 간단한 데이터를 받아와서 화면에 표시하고, 입력할 때마다 문서 제목(`document.title`)을 바꿉니다.

---

## 📁 폴더 구조

```
my-app/
├── src/
│   ├── components/
│   │   └── UserInput.tsx         # 이름 입력 컴포넌트 (useState 사용)
│   ├── pages/
│   │   └── Home.tsx              # 전체 페이지 구성 (useEffect 포함)
│   ├── data/
│   │   └── getUser.ts            # API 호출 함수
│   ├── App.tsx                   # 라우팅 없이 단일 화면
│   └── main.tsx
├── index.html
├── package.json
└── tsconfig.json
```

---

## 📄 src/data/getUser.ts

```ts
export async function getUser() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const data = await res.json();
  return data;
}
```

---

## 📄 src/components/UserInput.tsx

```tsx
import { useState } from 'react';

interface Props {
  onNameChange: (name: string) => void;
}

export default function UserInput({ onNameChange }: Props) {
  const [name, setName] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setName(newName);
    onNameChange(newName); // 부모로 전달
  };

  return (
    <div>
      <label>이름 입력: </label>
      <input value={name} onChange={handleChange} placeholder="이름을 입력하세요" />
    </div>
  );
}
```

---

## 📄 src/pages/Home.tsx

```tsx
import { useEffect, useState } from 'react';
import UserInput from '../components/UserInput';
import { getUser } from '../data/getUser';

export default function Home() {
  const [name, setName] = useState('');
  const [apiUser, setApiUser] = useState('');

  useEffect(() => {
    document.title = name ? `${name}님 환영합니다!` : 'React App';
  }, [name]);

  useEffect(() => {
    getUser().then(user => setApiUser(user.name));
  }, []);

  return (
    <div className="p-4">
      <h1>홈 페이지</h1>
      <UserInput onNameChange={setName} />
      <p>입력된 이름: {name || '없음'}</p>
      <p>API에서 가져온 유저 이름: {apiUser}</p>
    </div>
  );
}
```

---

## 📄 src/App.tsx

```tsx
import Home from './pages/Home';

export default function App() {
  return (
    <div>
      <Home />
    </div>
  );
}
```

---

## 📄 src/main.tsx (Vite 기준)

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

## 🧠 주요 포인트

| 기능             | 사용 훅        | 설명                     |
| -------------- | ----------- | ---------------------- |
| 이름 입력          | `useState`  | 입력값을 상태로 저장            |
| 입력값에 따라 타이틀 변경 | `useEffect` | name 상태가 변경될 때 실행      |
| API 데이터 가져오기   | `useEffect` | 컴포넌트 마운트 시 한 번 실행      |
| 상태 상위 전달       | `props`     | `onNameChange`으로 상태 전달 |
