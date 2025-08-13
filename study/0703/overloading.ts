class Calculator {
  add(a: number, b: number): void {
    console.log(a + b);
  }

  add(a: string, b: string): void {
    console.log(a + b);
  }
}

let calculator = new Calculator();
calculator.add(1, 2);
calculator.add("1", "2");
