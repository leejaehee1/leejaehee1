## 🌍 스토리 배경

> 어느 날, 당신은 낡은 책상 서랍에서 빛나는 **마법의 버튼**을 발견합니다.
> 그 버튼을 누르면… 세상이 밤에서 낮으로, 또 다른 세계로 바뀝니다!
> 여러 번 누를수록 새로운 변화가 펼쳐지며 이야기가 전개됩니다.

---

## 🧑‍💻 구현 기능 요약

| 요소           | 설명                               |
| ------------ | -------------------------------- |
| `HTML`       | 버튼과 이야기 텍스트, 배경 박스               |
| `CSS`        | 배경색과 애니메이션 전환 효과                 |
| `JavaScript` | 버튼 클릭 시 상태 순환 (낮 → 밤 → 우주 → 초기화) |

---

## 📦 코드 예제

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>마법의 버튼</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: 'Pretendard', sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      transition: background 1s, color 1s;
      background: #f5f5dc;
      color: #222;
    }

    .story-box {
      text-align: center;
      max-width: 600px;
      margin: 20px;
      padding: 20px;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.8);
      transition: background 1s;
    }

    .magic-button {
      padding: 12px 24px;
      font-size: 1.2rem;
      border: none;
      border-radius: 8px;
      background: #6a5acd;
      color: white;
      cursor: pointer;
      transition: background 0.3s;
    }

    .magic-button:hover {
      background: #483d8b;
    }

    /* 상태별 배경 */
    .state-day {
      background: linear-gradient(to top, #87cefa, #ffffff);
      color: #222;
    }

    .state-night {
      background: linear-gradient(to top, #0f2027, #203a43, #2c5364);
      color: #f0f0f0;
    }

    .state-space {
      background: radial-gradient(ellipse at center, #000000 0%, #1a1a1a 100%);
      color: #00ffcc;
    }
  </style>
</head>
<body>
  <div class="story-box" id="story">
    🌞 **아침이 밝았습니다!** 마법의 버튼을 눌러보세요.
  </div>
  <button class="magic-button" onclick="changeWorld()">✨ 마법의 버튼</button>

  <script>
    const body = document.body;
    const story = document.getElementById('story');

    let state = 0;
    const stories = [
      {
        className: 'state-day',
        text: '🌞 **아침이 밝았습니다!** 마법의 버튼을 눌러보세요.',
      },
      {
        className: 'state-night',
        text: '🌙 **밤이 찾아왔습니다.** 별빛이 반짝입니다.',
      },
      {
        className: 'state-space',
        text: '🚀 **당신은 우주로 떠났습니다!** 새로운 세계가 펼쳐집니다.',
      },
      {
        className: '',
        text: '🔁 **모든 것이 원래대로 돌아왔습니다.** 다시 시작해볼까요?',
      }
    ];

    function changeWorld() {
      state = (state + 1) % stories.length;
      const { className, text } = stories[state];

      // Reset classes
      body.className = '';
      if (className) body.classList.add(className);
      story.innerHTML = text;
    }
  </script>
</body>
</html>
```

---

## 🧠 확장 아이디어

* 🌦 날씨 상태 추가 (비, 눈, 무지개 등)
* 🕹 인터랙티브 요소 (배경음, 애니메이션 등)
* 🔐 마지막에 퀴즈 또는 엔딩 분기
* 💾 localStorage로 마지막 상태 저장하기

---

좋습니다! 기존 마법의 버튼 예제에 날씨 상태를 확장하여 **🌧️ 비, ❄️ 눈, 🌈 무지개** 상태를 추가해보겠습니다.
각 날씨 상태는 다음과 같은 연출을 포함합니다:

* 배경 색상 변화
* 이야기 텍스트 변경
* 날씨 애니메이션 (비, 눈, 무지개 배경)

---

## 💡 업데이트 내용 요약

| 상태     | 클래스명            | 특징                |
| ------ | --------------- | ----------------- |
| ☀️ 낮   | `state-day`     | 파란 하늘 배경          |
| 🌙 밤   | `state-night`   | 어두운 배경, 별 느낌      |
| 🚀 우주  | `state-space`   | 검은 우주             |
| 🌧️ 비  | `state-rain`    | 흐린 하늘 + 비 애니메이션   |
| ❄️ 눈   | `state-snow`    | 하얀 배경 + 눈송이 애니메이션 |
| 🌈 무지개 | `state-rainbow` | 무지개 배경            |

---

## 🧑‍💻 전체 코드

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>마법의 버튼 - 날씨 확장</title>
  <style>
    html, body {
      margin: 0;
      padding: 0;
      font-family: 'Pretendard', sans-serif;
      height: 100vh;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: background 1s, color 1s;
    }

    .story-box {
      text-align: center;
      max-width: 600px;
      margin: 20px;
      padding: 20px;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.7);
    }

    .magic-button {
      padding: 12px 24px;
      font-size: 1.2rem;
      border: none;
      border-radius: 8px;
      background: #6a5acd;
      color: white;
      cursor: pointer;
    }

    .magic-button:hover {
      background: #483d8b;
    }

    /* 상태별 배경 */
    .state-day {
      background: linear-gradient(to top, #87cefa, #ffffff);
      color: #222;
    }

    .state-night {
      background: linear-gradient(to top, #0f2027, #203a43, #2c5364);
      color: #f0f0f0;
    }

    .state-space {
      background: radial-gradient(circle, #000000, #111);
      color: #00ffcc;
    }

    .state-rain {
      background: linear-gradient(to top, #4e5d6c, #a3b1c6);
      color: #fff;
    }

    .state-snow {
      background: linear-gradient(to bottom, #f0f8ff, #e6f7ff);
      color: #333;
    }

    .state-rainbow {
      background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
      color: #000;
    }

    /* 비 애니메이션 */
    .rain::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: repeating-linear-gradient(transparent, transparent 10px, rgba(255,255,255,0.3) 11px);
      animation: rain 0.5s linear infinite;
    }

    @keyframes rain {
      from { transform: translateY(-100%); }
      to { transform: translateY(100%); }
    }

    /* 눈 애니메이션 */
    .snow::before {
      content: "❄️ ❄️ ❄️ ❄️ ❄️";
      font-size: 3rem;
      position: absolute;
      top: -50px;
      animation: snow 3s linear infinite;
    }

    @keyframes snow {
      from { top: -50px; }
      to { top: 100%; }
    }

  </style>
</head>
<body>
  <div class="story-box" id="story">
    🌞 아침이 밝았습니다! 마법의 버튼을 눌러보세요.
  </div>
  <button class="magic-button" onclick="changeWorld()">✨ 마법의 버튼</button>

  <script>
    const body = document.body;
    const story = document.getElementById('story');

    let state = 0;
    const stories = [
      { className: 'state-day', text: '🌞 아침이 밝았습니다!' },
      { className: 'state-night', text: '🌙 밤이 찾아왔습니다. 별빛이 반짝입니다.' },
      { className: 'state-space', text: '🚀 우주로 떠났습니다! 별들이 당신을 반깁니다.' },
      { className: 'state-rain rain', text: '🌧️ 비가 내리기 시작합니다. 우산을 챙기세요.' },
      { className: 'state-snow snow', text: '❄️ 눈이 펑펑 내립니다. 겨울왕국 같아요!' },
      { className: 'state-rainbow', text: '🌈 비가 그치고 무지개가 떴습니다. 희망의 메시지 같아요.' },
    ];

    function changeWorld() {
      state = (state + 1) % stories.length;
      const { className, text } = stories[state];

      body.className = className;
      story.innerHTML = text;
    }
  </script>
</body>
</html>
```

---

## ✅ 실행 결과 요약

* 버튼을 누를 때마다 다음 순서로 화면 전환:
  낮 → 밤 → 우주 → 비 → 눈 → 무지개 → 다시 낮…
* 비/눈 상태에는 간단한 애니메이션 연출 포함
* CSS 클래스 이름에 따라 시각 효과가 다르게 적용됨

---

## 📈 확장 가능성

* 🎵 날씨별 배경 음악
* 🌤️ 날씨 상태를 랜덤으로 바꾸기
* ⏰ 자동 전환 (setInterval)
* ☁️ 날씨 API 연동 (실제 날씨에 맞춰 보여주기)

---

