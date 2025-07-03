var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.bark = function () {
        console.log("멍멍");
    };
    return Dog;
}());
var dog = new Dog();
dog.bark();
