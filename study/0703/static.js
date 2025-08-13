var Counter2 = /** @class */ (function () {
    function Counter2() {
    }
    Counter2.increment = function () {
        Counter2.count++;
    };
    Counter2.getCount = function () {
        console.log(Counter2.count);
    };
    Counter2.count = 0;
    return Counter2;
}());
// let counter1 = new Counter2();
Counter2.increment();
Counter2.increment();
Counter2.increment();
Counter2.getCount();
