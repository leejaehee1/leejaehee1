## 🧪 연습문제 1. 프로필 카드 만들기

### 📘 설명

* 원형 프로필 이미지
* 사용자 이름, 직업, 짧은 소개
* 배경이 흰색이고 가운데 정렬된 카드 형태
* `border`, `rounded`, `shadow`, `text-center`, `p-6` 등의 클래스 사용

### 🖼️ 예시 화면 설명

> 화면 중앙에 흰색 박스가 있고, 위에는 둥근 프로필 사진이, 그 아래에는 굵은 이름과 회색 직업명, 간단한 소개 문구가 적혀 있는 형태입니다.

---

## 🧪 연습문제 2. 버튼 그룹 만들기

### 📘 설명

* 세 개의 버튼: \[홈], \[소개], \[연락]
* 파란색, 초록색, 보라색 배경
* 마우스를 올리면 hover 색이 조금 진해짐
* 가운데 정렬되며 버튼 간의 간격 있음

### 🖼️ 예시 화면 설명

> 세 개의 색깔 버튼이 가로로 나란히 있고, 각각 "홈", "소개", "연락"이라고 쓰여 있으며 버튼 간에는 일정한 여백이 있음.

---

## 🧪 연습문제 3. 반응형 카드 레이아웃 만들기

### 📘 설명

* 카드 3개를 `grid`로 배치
* sm 화면에서는 1열, md에서는 2열, lg에서는 3열
* 각 카드에는 이모지 아이콘, 제목, 설명이 포함됨

### 🖼️ 예시 화면 설명

> 작은 화면에서는 세 카드가 세로로, 큰 화면에서는 가로로 여러 개 배치됩니다. 각각의 카드에는 예를 들어 식물 아이콘, 캘린더 아이콘, 말풍선 아이콘 등이 포함되어 있습니다.

---

## 🧪 연습문제 4. 네비게이션 바 만들기

### 📘 설명

* 좌측에는 로고 텍스트
* 우측에는 메뉴 항목 3개 (Home, About, Contact)
* 배경은 짙은 회색, 텍스트는 흰색
* 메뉴에 마우스를 올리면 색이 살짝 변함

### 🖼️ 예시 화면 설명

> 웹사이트 상단에 어두운 배경색 바가 있고, 왼쪽에는 "MySite", 오른쪽에는 "Home | About | Contact"가 나란히 정렬되어 있음.

---

## 🧪 연습문제 5. 로그인 폼 만들기

### 📘 설명

* 가운데 정렬된 로그인 박스
* 이메일과 비밀번호 입력창
* 아래에 파란색 버튼으로 "로그인"
* 입력창에는 `border`, `rounded`, `focus:outline-none` 등 사용

### 🖼️ 예시 화면 설명

> 흰색 상자 안에 입력창 두 개(이메일, 비밀번호)가 위아래로 있고, 아래에는 파란색의 "로그인" 버튼이 있습니다.

---

<br>

---

## ✅ \[정답 모음 – JSX 코드]

```jsx
// 1. 프로필 카드
function ProfileCard() {
  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white border rounded-lg shadow text-center">
      <img src="https://via.placeholder.com/100" className="rounded-full mx-auto mb-4" />
      <h2 className="text-xl font-semibold">홍길동</h2>
      <p className="text-gray-500">Frontend Developer</p>
      <p className="mt-2 text-sm text-gray-700">React와 Tailwind를 배우는 중입니다.</p>
    </div>
  );
}

// 2. 버튼 그룹
function ButtonGroup() {
  return (
    <div className="flex justify-center mt-10 space-x-2">
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">홈</button>
      <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">소개</button>
      <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">연락</button>
    </div>
  );
}

// 3. 카드 그리드
function CardGrid() {
  return (
    <div className="grid gap-4 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="p-4 border rounded shadow bg-white">
        <div className="text-3xl">🌱</div>
        <h3 className="text-lg font-bold mt-2">식물 가꾸기</h3>
        <p className="text-sm text-gray-600">매일 물을 주세요.</p>
      </div>
      <div className="p-4 border rounded shadow bg-white">
        <div className="text-3xl">📅</div>
        <h3 className="text-lg font-bold mt-2">캘린더</h3>
        <p className="text-sm text-gray-600">일정을 기록해요.</p>
      </div>
      <div className="p-4 border rounded shadow bg-white">
        <div className="text-3xl">💬</div>
        <h3 className="text-lg font-bold mt-2">커뮤니티</h3>
        <p className="text-sm text-gray-600">자유롭게 이야기 나눠요.</p>
      </div>
    </div>
  );
}

// 4. 네비게이션 바
function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">MySite</div>
      <div className="space-x-4">
        <a href="#" className="hover:text-gray-300">Home</a>
        <a href="#" className="hover:text-gray-300">About</a>
        <a href="#" className="hover:text-gray-300">Contact</a>
      </div>
    </nav>
  );
}

// 5. 로그인 폼
function LoginForm() {
  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white border rounded shadow">
      <h2 className="text-lg font-bold mb-4 text-center">로그인</h2>
      <div className="mb-4">
        <input className="w-full border p-2 rounded focus:outline-none" type="email" placeholder="이메일" />
      </div>
      <div className="mb-4">
        <input className="w-full border p-2 rounded focus:outline-none" type="password" placeholder="비밀번호" />
      </div>
      <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">로그인</button>
    </div>
  );
}
```
