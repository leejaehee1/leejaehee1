class BankAccount {
  #balance: number = 100;

  deposit(amount: number) {
    // 200
    this.#balance += amount;
    // this.#balance = this.#balance % amount;
    // 좌측(300) = 우측(100 + 200)
  }

  getBalance() {
    console.log(this.#balance);
  }

  setBalance(amount: number) {
    amount = amount * 1.1;
    this.#balance = amount;
  }
}

let account = new BankAccount();
// account.balance = 1000;
account.setBalance(1000);
account.getBalance();
