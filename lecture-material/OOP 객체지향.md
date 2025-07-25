# 🧠 JavaScript 객체 지향 도식

```
📦 클래스(Class): 설계도
┌────────────────────────────┐
│ class Animal {             │
│   sound() {                │ ← 메서드: 동물이 소리 냄
│     console.log("...");    │
│   }                        │
│ }                          │
└────────────────────────────┘

          │
          ▼ (설계도로 만든 실체 = 객체 생성)

🦁 객체(Object): 인스턴스
┌────────────────────────────┐
│ const lion = new Animal(); │
│ lion.sound();              │ → "...” 출력됨
└────────────────────────────┘

          │
          ▼ (클래스를 확장해서 새로운 기능 추가)

🧬 상속(Inheritance): 확장
┌─────────────────────────────────────┐
│ class Dog extends Animal {          │ ← Animal을 기반으로 새 클래스 생성
│   sound() {                         │ ← 같은 이름의 메서드
│     console.log("Bark!");           │ ← 다른 방식으로 동작 (다형성)
│   }                                 │
│ }                                   │
└─────────────────────────────────────┘

          │
          ▼

🎭 다형성(Polymorphism): 같은 이름, 다른 동작
┌────────────────────────────┐
│ let pet = new Dog();       │ ← Dog도 Animal로 취급 가능
│ pet.sound();               │ → "Bark!" 출력됨
└────────────────────────────┘

          │
          ▼

🛡️ 캡슐화(Encapsulation): 데이터 보호
┌────────────────────────────────┐
│ class Car {                    │
│   #engine = "V6";              │ ← 비공개(private) 속성
│                                │
│   getEngine() {                │
│     return this.#engine;       │ ← 안전한 접근 방법
│   }                            │
│ }                              │
└────────────────────────────────┘
```

---

## 🧩 흐름 요약

1. `클래스`를 만들어
2. `객체`를 생성하고
3. `상속`을 통해 클래스를 확장하고
4. `다형성`으로 유연하게 사용하고
5. `캡슐화`로 안전하게 데이터를 보호한다

---

## 🔁 절차지향 vs 객체지향

```
📌 절차지향 프로그래밍 (Procedural)
────────────────────────────────────
🧠 사고방식: "일을 순서대로 처리해라"
📋 구조: 함수 + 데이터 따로 관리
🔧 특징:
  - 순차적 흐름
  - 전역 변수 사용 多
  - 유지보수 어려움 (규모 커질수록)
  - 코드 재사용 낮음

🔄 흐름:
[입력] → [처리 함수1] → [처리 함수2] → [결과 출력]

예시 (JavaScript):
let name = "Alice";
function greet() {
  console.log("Hello, " + name);
}
greet();

────────────────────────────────────

🆚

────────────────────────────────────
📌 객체지향 프로그래밍 (OOP)
────────────────────────────────────
🧠 사고방식: "현실을 객체로 나누어 모델링해라"
📦 구조: 데이터 + 메서드를 객체로 묶음
🧰 특징:
  - 코드 재사용 쉬움 (상속)
  - 유지보수 편리 (캡슐화)
  - 유연한 구조 (다형성)
  - 현실 세계 모델링에 적합

🔄 흐름:
[객체 생성] → [객체의 메서드 호출] → [결과]

예시 (JavaScript):
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log("Hello, " + this.name);
  }
}
const alice = new Person("Alice");
alice.greet();

────────────────────────────────────
```

---

## 📌 핵심 비교 요약

| 항목    | 절차지향        | 객체지향                     |
| ----- | ----------- | ------------------------ |
| 중심 개념 | 함수 중심       | 객체 중심                    |
| 코드 구조 | 순차적 처리      | 클래스/객체 분리 구성             |
| 재사용성  | 낮음          | 높음 (상속/구조화)              |
| 유지보수  | 어렵고 복잡해짐    | 분리 설계로 쉬움                |
| 대표 언어 | C, 초창기 JS 등 | Java, JS(ES6+), Python 등 |

---
