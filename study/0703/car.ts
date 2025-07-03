class Car2 {
  drive(driver: Driver) {
    console.log(`${driver.name}님, 운전을 시작합니다.`);
  }
}

class Driver {
  name: string;
}

let car = new Car2();
let driver = new Driver();
driver.name = "홍길동";
car.drive(driver);
// car.drive(new Driver());
