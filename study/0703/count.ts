class Counter {
  count: number = 0;

  increase() {
    this.count++;
  }

  show() {
    console.log(this.count);
  }
}

let counter = new Counter();
counter.increase();
counter.increase();
counter.increase();
counter.show();
