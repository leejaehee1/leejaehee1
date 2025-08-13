var Car2 = /** @class */ (function () {
    function Car2() {
    }
    Car2.prototype.drive = function (driver) {
        console.log("".concat(driver.name, "\uB2D8, \uC6B4\uC804\uC744 \uC2DC\uC791\uD569\uB2C8\uB2E4."));
    };
    return Car2;
}());
var Driver = /** @class */ (function () {
    function Driver() {
    }
    return Driver;
}());
var car = new Car2();
var driver = new Driver();
driver.name = "홍길동";
car.drive(driver);
// car.drive(new Driver());
