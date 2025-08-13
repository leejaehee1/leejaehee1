class User2 {
  username: string;
}

class Product {
  productName: string;
}

class Order {
  user: User2;
  product: Product;

  summary() {
    console.log(
      `사용자 ${this.user.username}가 ${this.product.productName} 을 주문했습니다.`
    );
  }
}

let user2 = new User2();
user2.username = "홍길동";

let product = new Product();
product.productName = "책";

let order = new Order();
order.user = user2;
order.product = product;

order.summary();
