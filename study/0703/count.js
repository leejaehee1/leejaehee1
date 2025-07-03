var Counter = /** @class */ (function () {
    function Counter() {
        this.count = 0;
    }
    Counter.prototype.increase = function () {
        this.count++;
    };
    Counter.prototype.show = function () {
        console.log(this.count);
    };
    return Counter;
}());
var counter = new Counter();
counter.increase();
counter.increase();
counter.increase();
counter.show();
