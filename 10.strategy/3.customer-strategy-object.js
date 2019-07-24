class Customer {
  constructor() {
    // 策略对象
    this.kinds = {
      normal(amount) {
        return amount;
      },
      member(amount) {
        return amount * 0.9;
      },
      vip(amount) {
        return amount * 0.8;
      }
    };
  }
  pay(kind, amount) {
    return this.kinds[kind](amount);
  }
}

let c1 = new Customer();
let c2 = new Customer();
let c3 = new Customer();

console.log(c1.pay('normal', 100)); // 100
console.log(c2.pay('member', 100)); // 90
console.log(c3.pay('vip', 100)); // 80
