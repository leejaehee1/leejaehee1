## 📁 폴더 설명

| 폴더/파일 이름         | 역할 설명                                                                                           |
| ---------------- | ----------------------------------------------------------------------------------------------- |
| `components/`    | **재사용 가능한 UI 컴포넌트**를 보관합니다. 버튼, 카드, 모달 등 화면 조합 요소들이 위치합니다.                                      |
| `contexts/`      | **React Context API**로 전역 상태를 공유하는 로직을 넣습니다. 예: AuthContext, ThemeContext 등                     |
| `copy/`          | 제품 소개, 메시지, 다국어 지원 등 \*\*텍스트 복사본(문구, 문서 등)\*\*을 보관할 수 있는 폴더입니다. 또는 마케팅 문구를 모아둘 수도 있습니다.         |
| `data/`          | JSON/JS 객체 형태의 **정적 데이터** 또는 API mock 데이터 등 외부 의존 없이 사용할 수 있는 데이터 모음입니다.                        |
| `hooks/`         | 사용자 정의 훅(**Custom React Hooks**)을 넣는 공간입니다. 예: `useDarkMode`, `useDebounce`                     |
| `pages/`         | 화면 단위로 구성된 **Route 대응 페이지 컴포넌트**입니다. 예: HomePage, LoginPage 등                                   |
| `routes/`        | **라우팅 관련 설정** 또는 `React Router`의 경로 정보 정의 파일이 위치할 수 있습니다.                                       |
| `store/`         | 전역 상태 관리 로직 저장소입니다. 예: Redux, Zustand, Recoil, Jotai 등 사용하는 상태관리 라이브러리별로 slice/module 등이 위치합니다. |
| `theme/daisyui/` | DaisyUI 또는 Tailwind 관련 **테마 커스터마이징 파일**을 정리한 폴더입니다. 테마 설정, 색상 팔레트, 다크모드 설정 등이 포함될 수 있습니다.       |
| `utils/`         | 날짜 포맷터, 숫자 계산기, 파서 등 **순수 유틸 함수**들을 모아 놓는 폴더입니다. 컴포넌트와 분리된 순수 로직 담당                             |

---

## 📄 파일 설명

| 파일명                  | 역할 설명                                                                        |
| -------------------- | ---------------------------------------------------------------------------- |
| `App.tsx`            | React 앱의 루트 컴포넌트입니다. 모든 라우팅 및 context, 전역 레이아웃이 연결되는 중심입니다.                  |
| `App.test.tsx`       | `App.tsx`에 대한 기본 테스트입니다. `Jest + React Testing Library`로 구성된 테스트 스텁입니다.      |
| `index.tsx`          | React 앱의 **엔트리 포인트**입니다. `ReactDOM.createRoot()`로 App 컴포넌트를 DOM에 마운트합니다.     |
| `index.css`          | 전역 CSS 또는 TailwindCSS 엔트리입니다. `@tailwind base/components/utilities`가 포함되어야 함 |
| `App.css`            | CRA에서 생성된 기본 App 컴포넌트의 스타일 정의 (Tailwind 사용 시 불필요할 수 있음)                      |
| `logo.svg`           | 기본 React 로고 파일입니다. 필요에 따라 로고로 교체 가능                                          |
| `react-app-env.d.ts` | CRA에서 자동 생성하는 타입 선언 파일입니다. 글로벌 타입(예: `.svg`, `.css` 등)을 정의합니다.               |
| `reportWebVitals.ts` | 성능 측정용 Web Vitals 스크립트입니다. GA나 로그 시스템과 연결할 때 사용 가능합니다.                       |
| `setupTests.ts`      | Jest에서 테스트 환경 설정을 위해 실행되는 파일입니다. `@testing-library/jest-dom` 등을 여기서 초기화합니다.  |

---

## ✅ 구조적 특징 요약

* `components/`, `pages/`, `routes/`, `store/`, `contexts/`, `hooks/` → **Clean Architecture / Atomic Design**에 기반한 관심사 분리
* `theme/daisyui/` → **Tailwind + DaisyUI 커스터마이징 구조 분리**
* `data/`, `copy/` → **정적 데이터**와 **문구 텍스트**를 분리해 관리
* `utils/` → 도메인과 UI에 종속되지 않는 순수 함수 집합

---

## ✨ 추천 추가 구성 (선택 사항)

| 폴더명          | 설명                                      |
| ------------ | --------------------------------------- |
| `assets/`    | 이미지, 폰트, svg 등 정적 리소스 정리                |
| `types/`     | 프로젝트 전역 타입 정의 (`User`, `ThemeConfig` 등) |
| `constants/` | 라우트 이름, 색상 코드, 메시지 상수 등 상수 집합           |


# 🌱 초보자를 위한 폴더 구조 활용 가이드

## 🧭 비유: "React 앱은 웹 페이지를 만드는 공장이다!"

* `pages/`는 **웹 페이지** (공장에서 만드는 완성품)
* `components/`는 **부품** (버튼, 카드, 리스트 등)
* `hooks/`, `utils/`, `data/`는 **기계나 도구**
* `store/`, `contexts/`는 **공장 전체가 공유하는 메모장**
* `theme/daisyui/`는 **제품의 외형 색상/디자인 설계도**
* `routes/`는 **주소 시스템** (누르면 어디로 가는지)

---

## 🧩 실제 구성 흐름

### 예: 로그인 화면 만들기 흐름

```text
📄 pages/LoginPage.tsx
  └─ 사용: <LoginForm />

📁 components/LoginForm.tsx
  └─ 내부: <InputField /> <SubmitButton />
  └─ 상태: useState 사용
  └─ API 요청: utils/api.ts 또는 hooks/useLogin.ts

📁 hooks/useLogin.ts
  └─ 로그인 요청 처리 및 결과 상태 반환

📁 store/ or contexts/AuthContext.tsx
  └─ 로그인 상태를 전역으로 저장해서 페이지 전환 등에서 활용

📁 theme/daisyui/
  └─ 다크모드, 폰트, 색상 등 설정 반영

📁 routes/index.tsx
  └─ "/login" → <LoginPage /> 연결
```

---

## 🧠 초보자에게 추천하는 폴더별 사용 요령

| 폴더               | 초보자용 설명                                          |
| ---------------- | ------------------------------------------------ |
| `pages/`         | 각각의 **URL에 대응하는 페이지** (로그인, 마이페이지, 메인 등)         |
| `components/`    | 재사용 가능한 **작은 단위 UI** (버튼, 입력창, 카드 등)             |
| `hooks/`         | 상태나 로직을 재사용하고 싶을 때 만듦. 처음엔 없어도 OK                |
| `utils/`         | 자주 쓰는 함수 (날짜 포맷, 숫자 변환 등)를 모음                    |
| `contexts/`      | 여러 페이지/컴포넌트가 같이 쓰는 상태 (예: 로그인 상태)                |
| `routes/`        | 어떤 URL에 어떤 페이지를 보여줄지 정의                          |
| `store/`         | Redux 같은 상태관리 라이브러리를 쓸 경우 사용 (처음엔 contexts로도 충분) |
| `data/`          | 화면에 보여줄 예제 데이터나 더미 데이터 (배열, 객체)                  |
| `theme/daisyui/` | DaisyUI의 테마를 **내 취향대로 꾸미고 싶을 때** 수정              |

---

## 🎨 Tailwind + DaisyUI 스타일 적용 흐름

1. `index.css`에 기본 Tailwind 지시어:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

2. DaisyUI 버튼 사용:

   ```tsx
   <button className="btn btn-primary">로그인</button>
   ```

3. 나만의 테마 만들기 (`tailwind.config.js`)

   ```js
   plugins: [require('daisyui')],
   daisyui: {
     themes: [
       {
         mytheme: {
           primary: "#570df8",
           secondary: "#f000b8",
           accent: "#37cdbe",
           neutral: "#3d4451",
           "base-100": "#ffffff",
         },
       },
     ],
   },
   ```

---

## ✏️ 연습 과제 예시

### 로그인 화면 구성하기

```
pages/LoginPage.tsx
components/LoginForm.tsx
utils/api.ts
contexts/AuthContext.tsx
```

---

## 🔁 요약 정리: 파일과 폴더를 조합하는 3단계

| 단계                                          | 설명                       |
| ------------------------------------------- | ------------------------ |
| 1️⃣ 화면 구성 (`pages/`)                        | 로그인, 마이페이지, 홈 화면 등 전체 구조 |
| 2️⃣ 재사용 컴포넌트 (`components/`)                | 입력 폼, 버튼 등 쪼개서 만든 UI     |
| 3️⃣ 기능 연결 (`hooks/`, `utils/`, `contexts/`) | 상태 관리와 로직 처리 연결          |

---

# ✅ 예제 1: `GreetingPage` – 인사말 페이지

### 📁 `data/messages.ts`

```ts
export const welcomeMessages = [
  "환영합니다!",
  "안녕하세요!",
  "오늘도 좋은 하루 되세요!",
];
```

### 📁 `components/GreetingList.tsx`

```tsx
import { welcomeMessages } from "../data/messages";

export default function GreetingList() {
  return (
    <ul className="space-y-2">
      {welcomeMessages.map((msg, idx) => (
        <li key={idx} className="p-3 bg-blue-100 rounded shadow">
          {msg}
        </li>
      ))}
    </ul>
  );
}
```

### 📁 `pages/GreetingPage.tsx`

```tsx
import GreetingList from "../components/GreetingList";

export default function GreetingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-4">👋 인사 메시지</h1>
      <GreetingList />
    </main>
  );
}
```

---

# ✅ 예제 2: `ProductListPage` – 상품 리스트 보기

### 📁 `data/products.ts`

```ts
export const products = [
  { id: 1, name: "딸기", price: 3000 },
  { id: 2, name: "사과", price: 2500 },
  { id: 3, name: "바나나", price: 2000 },
];
```

### 📁 `components/ProductItem.tsx`

```tsx
type Product = { name: string; price: number };

export default function ProductItem({ name, price }: Product) {
  return (
    <div className="border p-4 rounded shadow bg-white">
      <h2 className="font-semibold">{name}</h2>
      <p className="text-gray-600">{price.toLocaleString()}원</p>
    </div>
  );
}
```

### 📁 `pages/ProductListPage.tsx`

```tsx
import { products } from "../data/products";
import ProductItem from "../components/ProductItem";

export default function ProductListPage() {
  return (
    <main className="p-6 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((item) => (
        <ProductItem key={item.id} name={item.name} price={item.price} />
      ))}
    </main>
  );
}
```

---

# ✅ 예제 3: `QuotePage` – 명언 보여주기

### 📁 `data/quotes.ts`

```ts
export const quotes = [
  "행복은 습관이다. 그것을 몸에 지녀라. – 허버트",
  "가장 어두운 밤도 끝나고 해는 떠오른다. – 빅토르 위고",
  "성공은 준비와 기회의 만남이다. – 세네카",
];
```

### 📁 `components/QuoteCard.tsx`

```tsx
type Props = { text: string };

export default function QuoteCard({ text }: Props) {
  return (
    <blockquote className="p-4 border-l-4 border-green-400 bg-green-50 text-gray-800 italic">
      {text}
    </blockquote>
  );
}
```

### 📁 `pages/QuotePage.tsx`

```tsx
import { quotes } from "../data/quotes";
import QuoteCard from "../components/QuoteCard";

export default function QuotePage() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">🌟 오늘의 명언</h1>
      {quotes.map((quote, i) => (
        <QuoteCard key={i} text={quote} />
      ))}
    </div>
  );
}
```

---

## 🔄 구성 요약

| 폴더            | 역할                |
| ------------- | ----------------- |
| `pages/`      | 실제 라우트 화면 페이지     |
| `components/` | 각 화면에서 사용되는 UI 조각 |
| `data/`       | 하드코딩된 더미 데이터 저장   |

---

아래는 `theme/daisyui/` 폴더 안에서 DaisyUI 컴포넌트(Button, Modal, Input 등)를 **재사용 가능한 UI로 구성**하고, 이를 \*\*`pages/ContactPage.tsx`\*\*에서 활용하는 예제입니다.

---

## 🧩 예제 목표

* `theme/daisyui/`에 **UI 컴포넌트**를 만들고
* 다른 화면(`pages/ContactPage.tsx`)에서 **재사용**
* DaisyUI 기반의 **입력폼 + 모달 팝업** 구현

---

## 📁 폴더 구조

```
src/
├── theme/
│   └── daisyui/
│       ├── Button.tsx
│       ├── Input.tsx
│       └── Modal.tsx
├── pages/
│   └── ContactPage.tsx
```

---

## 1️⃣ `theme/daisyui/Button.tsx`

```tsx
type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function Button({ children, onClick, className }: Props) {
  return (
    <button className={`btn btn-primary ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
```

---

## 2️⃣ `theme/daisyui/Input.tsx`

```tsx
type Props = {
  label: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
};

export default function Input({ label, value, onChange, placeholder }: Props) {
  return (
    <div className="form-control w-full max-w-md">
      <label className="label">
        <span className="label-text font-semibold">{label}</span>
      </label>
      <input
        type="text"
        placeholder={placeholder || ""}
        className="input input-bordered w-full"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
```

---

## 3️⃣ `theme/daisyui/Modal.tsx`

```tsx
type Props = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, title, children }: Props) {
  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{title}</h3>
        <div className="py-4">{children}</div>
        <div className="modal-action">
          <button className="btn btn-sm btn-error" onClick={onClose}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
```

---

## 4️⃣ `pages/ContactPage.tsx`

```tsx
import { useState } from "react";
import Button from "../theme/daisyui/Button";
import Input from "../theme/daisyui/Input";
import Modal from "../theme/daisyui/Modal";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen p-6 flex flex-col items-center gap-4">
      <h1 className="text-3xl font-bold mb-4">✉️ 문의하기</h1>

      <Input label="이름" value={name} onChange={setName} placeholder="홍길동" />
      <Input label="메시지" value={message} onChange={setMessage} placeholder="내용을 입력하세요" />

      <Button onClick={() => setModalOpen(true)} className="mt-4">
        제출하기
      </Button>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="확인">
        <p>이름: <strong>{name}</strong></p>
        <p>메시지: <strong>{message}</strong></p>
      </Modal>
    </div>
  );
}
```

---

## 🧪 실행 결과

* `이름`과 `메시지` 입력 → `제출하기` 클릭 → 모달 창에서 내용 확인
* 모든 UI는 `theme/daisyui/` 안의 재사용 가능한 컴포넌트 사용
* TailwindCSS + DaisyUI 스타일 적용

---

## 📦 장점

* 공통 UI 컴포넌트를 `theme/daisyui/`에 분리해 두면 프로젝트 전반에서 재사용 가능
* 디자인 일관성 유지
* 유지보수성 향상

---

# 🚗 폐차 신청 시스템 – 연습문제 구성

## 🎯 학습 목표

* 페이지별로 역할을 나눠 폴더 구조 설계 연습
* 각 단계의 입력/출력 컴포넌트를 분리
* 하드코딩된 데이터(`data/`)를 기반으로 동적 UI 구성

---

## 🧩 연습문제 시나리오

당신은 폐차 시스템의 5단계 프로세스를 구현하는 프로젝트를 진행 중입니다. 다음의 폴더 구조에 맞게 각각의 기능과 UI를 `pages/`, `components/`, `data/` 중심으로 구성하세요.

---

## 📁 폴더 구조 설계 문제

### 다음 요구사항에 따라 아래 3개의 폴더(`pages/`, `components/`, `data/`)에 파일을 배치하세요.

---

### ✅ 단계 1: 폐차 신청

**목표**: 사용자가 차량 정보를 입력하고 폐차를 신청합니다.

| 폴더            | 파일명                  | 설명                                |
| ------------- | -------------------- | --------------------------------- |
| `pages/`      | `ApplyScrapPage.tsx` | 폐차 신청 폼 전체를 구성하는 페이지              |
| `components/` | `ScrapForm.tsx`      | 이름, 연락처, 차량번호 입력 필드               |
| `data/`       | `initialFormData.ts` | 폼의 초기값 객체 (`name`, `carNum`, ...) |

---

### ✅ 단계 2: 최종 견적 전송

**목표**: 견적 내용을 확인하고 '최종 견적 전송' 버튼을 클릭합니다.

| 폴더            | 파일명                 | 설명                          |
| ------------- | ------------------- | --------------------------- |
| `pages/`      | `QuotationPage.tsx` | 견적 요약을 보여주는 페이지             |
| `components/` | `QuotationCard.tsx` | 차량명, 연식, 예상금액을 보여주는 카드 컴포넌트 |
| `data/`       | `quotationMock.ts`  | 견적 관련 더미 데이터 (예: 견적 리스트)    |

---

### ✅ 단계 3: 폐차 진행 상태 확인

**목표**: 현재 폐차 진행 상태를 확인합니다.

| 폴더            | 파일명                     | 설명                                       |
| ------------- | ----------------------- | ---------------------------------------- |
| `pages/`      | `ScrapProgressPage.tsx` | 전체 진행 상태를 보여주는 페이지                       |
| `components/` | `ProgressStepList.tsx`  | "신청 완료" → "견적 전송" → "차량 인수 중" 등 Step 리스트 |
| `data/`       | `scrapSteps.ts`         | 각 단계 이름과 완료 여부를 가진 배열                    |

---

### ✅ 단계 4: 차량 인수 위치 입력

**목표**: 지도 또는 주소 입력창을 통해 차량 인수 위치를 입력합니다.

| 폴더            | 파일명                      | 설명                                   |
| ------------- | ------------------------ | ------------------------------------ |
| `pages/`      | `PickupLocationPage.tsx` | 위치 입력/선택 페이지                         |
| `components/` | `LocationInput.tsx`      | 지도 or 텍스트 기반 주소 입력창                  |
| `data/`       | `defaultLocation.ts`     | 기본 위치 값 (`lat`, `lng`, `address`) 저장 |

---

### ✅ 단계 5: 폐차 완료 요약 보기

**목표**: 전체 폐차 과정 요약을 확인합니다.

| 폴더            | 파일명                     | 설명                                 |
| ------------- | ----------------------- | ---------------------------------- |
| `pages/`      | `ScrapCompletePage.tsx` | 폐차 완료 후 화면                         |
| `components/` | `SummaryTable.tsx`      | 사용자 정보, 차량 정보, 견적, 날짜 등 표시         |
| `data/`       | `completedData.ts`      | 완료된 데이터 예시 (`user`, `car`, `date`) |

---

## ✏️ 추가 지시사항 (실습 방식)

1. 각 `pages/` 파일은 해당 단계의 `components/`를 import 하여 화면을 구성해야 합니다.
2. `data/`의 더미 데이터를 기반으로 화면에 동적 정보를 출력하세요.
3. 컴포넌트에는 TailwindCSS와 DaisyUI를 활용하여 스타일링하세요.
4. 전체 흐름은 `App.tsx` 또는 라우터에서 `/apply`, `/quotation`, `/progress`, `/pickup`, `/complete`로 연결하세요.

---

## 🧠 기대 효과

* 폴더와 역할을 분리한 구조에 익숙해짐
* props와 컴포넌트 조합 능력 향상
* 실제 서비스 흐름에 맞춘 UI 설계 감각 증진

---

# 🚗 폐차 프로세스 – `App.tsx`에서 상태로 흐름 전환하기

## 🎯 학습 목표

* 상태(state)를 기반으로 다중 페이지 흐름 구현
* 단일 페이지 내에서 조건부 렌더링으로 단계 전환
* 각 페이지는 컴포넌트화되어 `App.tsx`에서 연결

---

## 🧩 단계 기반 화면 흐름 설계

우리는 총 **5단계**로 구성된 폐차 신청 프로세스를 만들었습니다.

| 단계 번호 | 단계 이름       | 컴포넌트 파일              |
| ----- | ----------- | -------------------- |
| 1     | 폐차 신청       | `ApplyScrapPage`     |
| 2     | 최종 견적 전송    | `QuotationPage`      |
| 3     | 폐차 진행 상태 확인 | `ScrapProgressPage`  |
| 4     | 차량 인수 위치 입력 | `PickupLocationPage` |
| 5     | 폐차 완료 요약 보기 | `ScrapCompletePage`  |

---

## 📁 예시 디렉토리 구조

```
src/
├── pages/
│   ├── ApplyScrapPage.tsx
│   ├── QuotationPage.tsx
│   ├── ScrapProgressPage.tsx
│   ├── PickupLocationPage.tsx
│   └── ScrapCompletePage.tsx
└── App.tsx
```

---

## 🔧 `App.tsx` 예시 코드

```tsx
import { useState } from "react";
import ApplyScrapPage from "./pages/ApplyScrapPage";
import QuotationPage from "./pages/QuotationPage";
import ScrapProgressPage from "./pages/ScrapProgressPage";
import PickupLocationPage from "./pages/PickupLocationPage";
import ScrapCompletePage from "./pages/ScrapCompletePage";

export default function App() {
  const [step, setStep] = useState(1);

  const goNext = () => setStep((prev) => Math.min(prev + 1, 5));
  const goBack = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded shadow p-6">
        <div className="mb-4 text-right text-sm text-gray-600">
          현재 단계: {step} / 5
        </div>

        {step === 1 && <ApplyScrapPage onNext={goNext} />}
        {step === 2 && <QuotationPage onNext={goNext} onBack={goBack} />}
        {step === 3 && <ScrapProgressPage onNext={goNext} onBack={goBack} />}
        {step === 4 && <PickupLocationPage onNext={goNext} onBack={goBack} />}
        {step === 5 && <ScrapCompletePage onBack={goBack} />}
      </div>
    </div>
  );
}
```

---

## 🔗 각 페이지 컴포넌트에서 `onNext` / `onBack` 사용 예

```tsx
// pages/QuotationPage.tsx
type Props = {
  onNext: () => void;
  onBack: () => void;
};

export default function QuotationPage({ onNext, onBack }: Props) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">🚗 최종 견적 확인</h2>
      {/* 견적 카드, 정보 등 렌더링 */}
      <div className="flex gap-2 mt-6">
        <button className="btn btn-outline" onClick={onBack}>이전</button>
        <button className="btn btn-primary" onClick={onNext}>다음</button>
      </div>
    </div>
  );
}
```

다른 페이지들도 동일한 방식으로 `props.onNext()` 또는 `props.onBack()`을 버튼에 연결하면 됩니다.

---

## ✅ 이 방식의 장점

* **React Router 없이도 단계 흐름을 자연스럽게 구현**
* 페이지 이동 로직을 `App.tsx` 단일 파일로 통제
* 사용자 플로우 이해에 매우 효과적 (입문자용)

---

