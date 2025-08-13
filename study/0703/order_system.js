var User2 = /** @class */ (function () {
    function User2() {
    }
    return User2;
}());
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
var Order = /** @class */ (function () {
    function Order() {
    }
    Order.prototype.summary = function () {
        console.log("\uC0AC\uC6A9\uC790 ".concat(this.user.username, "\uAC00 ").concat(this.product.productName, " \uC744 \uC8FC\uBB38\uD588\uC2B5\uB2C8\uB2E4."));
    };
    return Order;
}());
var user2 = new User2();
user2.username = "홍길동";
var product = new Product();
product.productName = "책";
var order = new Order();
order.user = user2;
order.product = product;
order.summary();
