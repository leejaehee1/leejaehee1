
## 🧪 OOP 쉬운 연습문제 (TypeScript 기준)

### ✅ 문제 1. 간단한 클래스 만들기

**설명:** `Dog`라는 클래스를 만들어서 "멍멍!"이라고 출력하는 `bark()` 메서드를 만들어보세요.

```ts
// 출력 결과:
// 멍멍!
```

---

### ✅ 문제 2. 생성자 연습

**설명:** `User` 클래스를 만들어 생성자에서 `name`을 받고,
`greet()` 메서드에서 `"안녕하세요, 제 이름은 홍길동입니다."`와 같이 출력되도록 하세요.

```ts
// 출력 결과 (예):
// 안녕하세요, 제 이름은 홍길동입니다.
```

---

### ✅ 문제 3. 속성 변경하기

**설명:** `Counter` 클래스를 만들고 `count`라는 숫자 속성을 가지며,
`increase()` 메서드를 호출할 때마다 1씩 증가하게 만드세요.
`show()` 메서드로 현재 숫자를 출력합니다.

```ts
// 출력 결과 예시:
// 현재 값: 1
// 현재 값: 2
```

---

### ✅ 문제 4. 클래스 간 관계 만들기

**설명:** `Car` 클래스와 `Driver` 클래스를 만들고,
`Driver`가 `Car`를 운전한다는 구조로 `drive()` 메서드를 구현하세요.
"홍길동이 자동차를 운전합니다." 라고 출력되면 됩니다.

---

### ✅ 문제 5. 배열과 객체

**설명:** `Book` 클래스를 만들고 `title`, `author` 속성을 가지게 한 뒤,
여러 개의 책 객체를 배열에 넣고, 모든 책 정보를 출력하세요.

```ts
// 출력 결과 예시:
// 책 제목: TypeScript 기본, 저자: 이지스
// 책 제목: 모던 자바스크립트, 저자: 김코딩
```

---

## 📌 연습 포인트 요약

| 문제 | 연습 내용        |
| -- | ------------ |
| 1  | 클래스 & 메서드    |
| 2  | 생성자 & 속성 초기화 |
| 3  | 속성 값 변경 & 출력 |
| 4  | 객체 간 관계      |
| 5  | 객체 배열 & 반복문  |

---

## ✅ 문제 1. 간단한 클래스 만들기

```ts
class Dog {
  bark(): void {
    console.log("멍멍!");
  }
}

const myDog = new Dog();
myDog.bark(); // 출력: 멍멍!
```

---

## ✅ 문제 2. 생성자 연습

```ts
class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(): void {
    console.log(`안녕하세요, 제 이름은 ${this.name}입니다.`);
  }
}

const user = new User("홍길동");
user.greet(); // 출력: 안녕하세요, 제 이름은 홍길동입니다.
```

---

## ✅ 문제 3. 속성 변경하기

```ts
class Counter {
  count: number = 0;

  increase(): void {
    this.count++;
  }

  show(): void {
    console.log(`현재 값: ${this.count}`);
  }
}

const counter = new Counter();
counter.increase();
counter.show(); // 출력: 현재 값: 1
counter.increase();
counter.show(); // 출력: 현재 값: 2
```

---

## ✅ 문제 4. 클래스 간 관계 만들기

```ts
class Car {
  model: string;

  constructor(model: string) {
    this.model = model;
  }
}

class Driver {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  drive(car: Car): void {
    console.log(`${this.name}이(가) ${car.model} 자동차를 운전합니다.`);
  }
}

const car = new Car("현대 아반떼");
const driver = new Driver("홍길동");
driver.drive(car); // 출력: 홍길동이(가) 현대 아반떼 자동차를 운전합니다.
```

---

## ✅ 문제 5. 배열과 객체

```ts
class Book {
  constructor(public title: string, public author: string) {}
}

const books: Book[] = [
  new Book("TypeScript 기본", "이지스"),
  new Book("모던 자바스크립트", "김코딩"),
];

for (const book of books) {
  console.log(`책 제목: ${book.title}, 저자: ${book.author}`);
}
// 출력:
// 책 제목: TypeScript 기본, 저자: 이지스
// 책 제목: 모던 자바스크립트, 저자: 김코딩
```

---


# 🧪 TypeScript 객체지향 연습문제

## ✅ 1단계: 클래스와 객체 만들기

> **목표:** 클래스를 만들고 객체를 생성해보기

**문제:**
`Person`이라는 클래스를 만들고, 이름(`name`)과 나이(`age`)를 속성으로 가진 후, `introduce()` 메서드를 만들어 "안녕하세요, 저는 20살의 Alice입니다."와 같은 문장을 출력하세요.

---

## ✅ 2단계: 생성자(Constructor) 사용

> **목표:** 생성자를 통해 속성 초기화 연습

**문제:**
`Product` 클래스를 만들고, 생성자를 통해 `name`과 `price`를 입력받아 초기화하세요. 그리고 `display()`라는 메서드를 만들어 "제품명: MacBook, 가격: 150만원"을 출력하세요.

---

## ✅ 3단계: 접근 제한자 (캡슐화)

> **목표:** `private` 속성 사용해보기

**문제:**
`BankAccount` 클래스를 만들고, `#balance`(잔액)를 private 속성으로 선언하세요.

* `deposit(amount: number)`와 `getBalance()` 메서드를 구현해 입금 및 조회 기능을 제공합니다.

---

## ✅ 4단계: 상속(Inheritance)

> **목표:** 클래스를 상속해서 기능 확장하기

**문제:**
`Animal` 클래스를 만들고 `sound()` 메서드를 정의하세요.
`Dog`, `Cat` 클래스를 `Animal`로부터 상속받아 각각 `"멍멍!"`, `"야옹!"`을 출력하도록 오버라이딩하세요.

---

## ✅ 5단계: 다형성(Polymorphism)

> **목표:** 하나의 타입으로 여러 객체 다루기

**문제:**
위에서 만든 `Animal` 클래스를 이용해 `const animals: Animal[] = [new Dog(), new Cat()]` 배열을 만들고, 반복문을 통해 `sound()`를 호출하여 각각의 소리를 출력하세요.

---

## ✅ 6단계: 추상 클래스(Abstract)

> **목표:** 공통 구조 정의와 구현 강제화

**문제:**
`Shape`라는 추상 클래스를 만들고, `getArea(): number` 추상 메서드를 정의하세요.
`Rectangle`, `Circle` 클래스를 상속받아 각각 면적을 계산하는 로직을 구현하세요.

---

## ✅ 7단계: 인터페이스(Interface)

> **목표:** 객체의 형태를 정의하고 클래스에 구현

**문제:**
`Movable`이라는 인터페이스를 만들고 `move(): void` 메서드를 포함하세요.
`Car`, `Robot` 클래스에 이 인터페이스를 구현하고 각각 다르게 `move()`를 정의하세요.

---

## ✅ 8단계: 메서드 오버로딩

> **목표:** 하나의 메서드 이름으로 다양한 인자 처리

**문제:**
`Calculator` 클래스를 만들고 `add()` 메서드를 오버로딩하여

* 숫자 2개를 더할 수 있도록 하고,
* 문자열 2개도 연결할 수 있도록 구현하세요.

---

## ✅ 9단계: 정적 속성/메서드 (static)

> **목표:** 클래스 소속 메서드와 속성 다루기

**문제:**
`Counter` 클래스를 만들고 모든 객체가 공유하는 `count` 값을 가지게 하세요.

* `increment()`를 호출할 때마다 `count`가 1씩 증가하도록 하세요.
* `getCount()` 메서드로 현재 값을 출력합니다.

---

## ✅ 10단계: 종합 실습 프로젝트 (간단한 주문 시스템)

> **목표:** 객체지향 종합 적용

**문제:**

* `User`, `Product`, `Order` 클래스를 만들어
* 사용자 `User`가 제품 `Product`를 주문하여 `Order`를 생성하고
* `Order` 클래스에 `summary()` 메서드를 만들어 "사용자 A가 상품 B를 구매했습니다."를 출력하세요.

---

## ✅ 1단계: 클래스와 객체 만들기

```ts
class Person {
  name: string = "Alice";
  age: number = 20;

  introduce(): void {
    console.log(`안녕하세요, 저는 ${this.age}살의 ${this.name}입니다.`);
  }
}

const p = new Person();
p.introduce();
```

---

## ✅ 2단계: 생성자 사용

```ts
class Product {
  constructor(public name: string, public price: number) {}

  display(): void {
    console.log(`제품명: ${this.name}, 가격: ${this.price}만원`);
  }
}

const product = new Product("MacBook", 150);
product.display();
```

---

## ✅ 3단계: 접근 제한자 (캡슐화)

```ts
class BankAccount {
  private balance: number = 0;

  deposit(amount: number): void {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount();
account.deposit(50000);
console.log(account.getBalance()); // 50000
```

---

## ✅ 4단계: 상속

```ts
class Animal {
  sound(): void {
    console.log("Some generic animal sound");
  }
}

class Dog extends Animal {
  sound(): void {
    console.log("멍멍!");
  }
}

class Cat extends Animal {
  sound(): void {
    console.log("야옹!");
  }
}

const dog = new Dog();
dog.sound();

const cat = new Cat();
cat.sound();
```

---

## ✅ 5단계: 다형성

```ts
const animals: Animal[] = [new Dog(), new Cat()];

for (const a of animals) {
  a.sound(); // 각각 멍멍! 야옹!
}
```

---

## ✅ 6단계: 추상 클래스

```ts
abstract class Shape {
  abstract getArea(): number;
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  getArea(): number {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

const r = new Rectangle(5, 4);
console.log(r.getArea());

const c = new Circle(3);
console.log(c.getArea());
```

---

## ✅ 7단계: 인터페이스

```ts
interface Movable {
  move(): void;
}

class Car implements Movable {
  move(): void {
    console.log("차가 도로를 달립니다.");
  }
}

class Robot implements Movable {
  move(): void {
    console.log("로봇이 걷습니다.");
  }
}

const things: Movable[] = [new Car(), new Robot()];
things.forEach(t => t.move());
```

---

## ✅ 8단계: 메서드 오버로딩

```ts
class Calculator {
  add(a: number, b: number): number;
  add(a: string, b: string): string;
  add(a: any, b: any): any {
    return a + b;
  }
}

const calc = new Calculator();
console.log(calc.add(2, 3));        // 5
console.log(calc.add("안녕, ", "세상!")); // "안녕, 세상!"
```

---

## ✅ 9단계: 정적 속성/메서드

```ts
class Counter {
  private static count = 0;

  static increment(): void {
    Counter.count += 1;
  }

  static getCount(): number {
    return Counter.count;
  }
}

Counter.increment();
Counter.increment();
console.log(Counter.getCount()); // 2
```

---

## ✅ 10단계: 종합 실습 - 주문 시스템

```ts
class User {
  constructor(public name: string) {}
}

class Product {
  constructor(public name: string) {}
}

class Order {
  constructor(public user: User, public product: Product) {}

  summary(): void {
    console.log(`${this.user.name}가(이) ${this.product.name}을(를) 구매했습니다.`);
  }
}

const user = new User("Jaehee");
const product = new Product("iPhone 15");
const order = new Order(user, product);
order.summary();  // Jaehee가(이) iPhone 15을(를) 구매했습니다.
```
