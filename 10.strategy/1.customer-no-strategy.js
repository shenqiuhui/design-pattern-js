class Customer {
  constructor(type) {
    this.type = type;
  }
  pay(amount) {
    if (this.type === 'member') {
      return amount * 0.9;
    } else if (this.type === 'vip') {
      return amount * 0.8;
    } else {
      return amount;
    }
  }
}

let c1 = new Customer('normal');
let c2 = new Customer('member');
let c3 = new Customer('vip');

console.log(c1.pay(100)); // 100
console.log(c2.pay(100)); // 90
console.log(c3.pay(100)); // 80

