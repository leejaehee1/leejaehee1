# 🧾 Tailwind CSS 요약표

| 카테고리      | 클래스 예시                                    | 의미/역할                      | 예시 설명                                                    |
| --------- | ----------------------------------------- | -------------------------- | -------------------------------------------------------- |
| ✅ 레이아웃    | `container`, `mx-auto`, `p-4`             | 박스 크기 지정, 가운데 정렬, 패딩 등     | `.container mx-auto p-4` — 가운데 정렬된 컨테이너                  |
| ✅ 여백      | `m-4`, `mt-2`, `px-6`                     | margin, padding, 방향별 여백 조정 | `mt-2` (top margin 0.5rem), `px-6` (양쪽 패딩)               |
| ✅ 텍스트     | `text-lg`, `font-bold`, `text-gray-600`   | 글자 크기, 두께, 색상 설정           | `text-lg` (글자 큼), `font-bold` (굵게), `text-gray-600` (회색) |
| ✅ 배경      | `bg-blue-500`, `bg-white`                 | 배경색 설정                     | `bg-blue-500` (파란 배경)                                    |
| ✅ 테두리     | `border`, `border-gray-300`, `rounded-lg` | 테두리, 색상, 둥근 모서리 설정         | `border rounded-lg` (얇은 테두리 + 둥근 모서리)                    |
| ✅ 플렉스박스   | `flex`, `justify-between`, `items-center` | 요소 가로 배치, 정렬 방식 제어         | `flex justify-between items-center`                      |
| ✅ 그리드     | `grid`, `grid-cols-2`, `gap-4`            | 격자 배치 구성                   | `grid grid-cols-2 gap-4` — 두 열, 간격 1rem                  |
| ✅ 버튼 효과   | `hover:bg-blue-600`, `active:scale-95`    | 마우스/클릭 시 상태 스타일 적용         | `hover:bg-...`, `active:` 등 상태 대응 클래스                    |
| ✅ 반응형     | `sm:`, `md:`, `lg:`, `xl:`                | 화면 크기별 스타일 분기              | `md:p-4` — 중간 화면 이상일 때 패딩 1rem 적용                        |
| ✅ 그림자     | `shadow`, `shadow-md`, `shadow-lg`        | 요소에 그림자 추가                 | `shadow-lg` — 진한 그림자                                     |
| ✅ 위치/정렬   | `absolute`, `relative`, `z-10`, `top-0`   | 위치 지정 및 z-index, 위치값 설정    | `absolute top-0 left-0` — 좌상단 고정                         |
| ✅ 크기      | `w-64`, `h-10`, `max-w-md`                | 요소의 너비/높이/최대 너비 설정         | `w-64` (너비 16rem), `h-10` (높이 2.5rem)                    |
| ✅ 아이콘/이미지 | `object-cover`, `rounded-full`            | 이미지/아이콘 스타일링               | `object-cover` (잘림 없이 채우기), `rounded-full` (원형)          |

---

## 🎯 유용한 패턴 요약

| 목적       | 추천 클래스 예시                                                                  |
| -------- | -------------------------------------------------------------------------- |
| 카드 박스    | `bg-white p-4 rounded shadow`                                              |
| 네비게이션 바  | `flex justify-between items-center px-6 py-4 bg-gray-800 text-white`       |
| 버튼 스타일   | `bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded` |
| 입력 폼 스타일 | `border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400`   |
| 중앙 정렬    | `flex justify-center items-center` 또는 `mx-auto text-center`                |

---

## 📘 반응형 접두사 요약

| 접두사    | 의미        |
| ------ | --------- |
| `sm:`  | 640px 이상  |
| `md:`  | 768px 이상  |
| `lg:`  | 1024px 이상 |
| `xl:`  | 1280px 이상 |
| `2xl:` | 1536px 이상 |

예: `sm:text-sm md:text-base lg:text-lg` — 화면 크기에 따라 글자 크기 변경

---

## 🛠 실무 팁

* ✅ 자주 쓰는 클래스는 **컴포넌트화**하거나 `@apply`로 추출하면 유지보수에 좋습니다.
* ✅ 조건부 Tailwind는 `clsx`나 `classnames`로 조합하는 것이 유용합니다.
* ✅ 다크모드는 `dark:` 접두사를 활용합니다. (`dark:bg-black` 등)
