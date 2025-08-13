// alert("Hello World");
// console.log("Hello World");
// document.write("<h1>Document Write</h1>");

// let currentYear = 2025;
// let birthYear = prompt("태어난 해를 입력하세요");
// let age = currentYear - birthYear + 1;
// alert("당신의 나이는 " + age + "살 입니다.");

// let name = "철수";
// let age = 20;
// let isStudent = true;

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isStudent);

// let price = 10000;
// let rate = 0.2;
// let discount = price * rate;
// let finalPrice = price - discount;

// console.log("할인된 가격은 " + finalPrice + "원입니다.");

// let name = "영희";
// console.log(`안녕하세요, ${name}님!`);
// console.log("안녕하세요, " + name + "님!");

// let a = 10;
// console.log(a);
// a += 5;
// console.log(a);
// a -= 3;
// console.log(a);
// a *= 2;
// console.log(a);
// a /= 4;
// console.log(a);
// console.log(`최종 값은 ${a} 입니다.`);

// 1. 이름과 나이를 입력받아 인사말 출력하기

// 2. 두 수를 입력받아 사칙연산 결과를 각각 출력하기

// 3. == vs === 비교 실험하기

// 실습: 3의 배수 검사기
// let num = prompt("숫자를 입력하세요.");
// if (num % 5 === 0) {
//   alert("3의 배수입니다.");
// } else {
//   alert("3의 배수가 아닙니다.");
// }

// + - * / %

let day = prompt("요일을 입력하세요");
switch (day) {
  case "월요일":
    alert("한 주의 시작!");
    break;
  case "금요일":
    alert("불타는 금요일!");
    break;
  default:
    alert("평범한 하루네요.");
}
