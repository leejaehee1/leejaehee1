JavaScript에서 `Date` 객체는 날짜와 시간을 다룰 수 있도록 해주는 매우 유용한 내장 객체입니다. 아래에 **기본 사용 요령**, **포맷팅**, **계산**, **비교**, **유용한 메서드 예시**를 단계별로 정리했습니다.

---

## ✅ 1. Date 객체 생성 방법

```javascript
const now = new Date();                          // 현재 시간
const fromString = new Date("2024-12-25");       // 문자열로 생성
const fromNumbers = new Date(2024, 11, 25);      // 월은 0부터 시작 (12월은 11)
const fromTimestamp = new Date(1700000000000);   // 타임스탬프(ms)
```

---

## ✅ 2. 날짜와 시간 정보 추출

```javascript
const d = new Date();

console.log(d.getFullYear());  // 연도 (예: 2025)
console.log(d.getMonth());     // 월 (0~11)
console.log(d.getDate());      // 일 (1~31)
console.log(d.getDay());       // 요일 (0: 일요일 ~ 6: 토요일)

console.log(d.getHours());     // 시 (0~23)
console.log(d.getMinutes());   // 분 (0~59)
console.log(d.getSeconds());   // 초 (0~59)
console.log(d.getMilliseconds()); // 밀리초 (0~999)
```

---

## ✅ 3. 날짜 및 시간 설정

```javascript
const d = new Date();

d.setFullYear(2026);
d.setMonth(5);       // 6월
d.setDate(15);       // 15일

d.setHours(10);
d.setMinutes(30);
```

---

## ✅ 4. 날짜 연산 (시간 더하기/빼기)

```javascript
const d = new Date();
d.setDate(d.getDate() + 7);  // 7일 뒤
d.setMonth(d.getMonth() - 1); // 1개월 전
```

---

## ✅ 5. 날짜 차이 계산

```javascript
const date1 = new Date("2025-06-01");
const date2 = new Date("2025-06-11");

const diffInMs = date2 - date1;
const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
console.log(diffInDays);  // 10
```

---

## ✅ 6. 날짜 포맷팅 (간단하게)

```javascript
const d = new Date();

const formatted = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
console.log(formatted); // 예: 2025-06-11
```

📌 *실무에서는 `date-fns`, `dayjs`, `moment.js` 등의 라이브러리 활용 권장*

---

## ✅ 7. 요일 이름 출력

```javascript
const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
const d = new Date();
console.log(`오늘은 ${dayNames[d.getDay()]}요일입니다.`);
```

---

## ✅ 8. Date 예제 모음

### 🎯 오늘부터 일주일 뒤 날짜 구하기

```javascript
const today = new Date();
const oneWeekLater = new Date();
oneWeekLater.setDate(today.getDate() + 7);
console.log(oneWeekLater.toDateString());
```

---

### 🎯 생일까지 남은 날짜 계산

```javascript
const today = new Date();
const birthday = new Date(today.getFullYear(), 11, 25); // 12월 25일

if (birthday < today) {
  birthday.setFullYear(birthday.getFullYear() + 1);
}

const diff = Math.ceil((birthday - today) / (1000 * 60 * 60 * 24));
console.log(`생일까지 ${diff}일 남았습니다.`);
```

---

### 🎯 오전/오후 표시

```javascript
const d = new Date();
const hour = d.getHours();
const ampm = hour >= 12 ? "오후" : "오전";
console.log(`${ampm} ${hour % 12 || 12}시`);
```

---

### 🎯 타임스탬프 사용

```javascript
console.log(Date.now());  // 현재 시각의 밀리초
```

---

## 📌 요약 정리

| 기능          | 메서드 또는 예시                           |
| ----------- | ----------------------------------- |
| 현재 시각       | `new Date()`                        |
| 날짜 구성 요소 추출 | `getFullYear()`, `getMonth()`, etc. |
| 설정          | `setDate()`, `setHours()` 등         |
| 계산/차이       | `date1 - date2` → 밀리초, 일 단위 변환 필요   |
| 포맷          | 템플릿 문자열 + `padStart()` 등 활용         |
| 라이브러리 사용    | `date-fns`, `dayjs`, `luxon` 등 추천   |

---

