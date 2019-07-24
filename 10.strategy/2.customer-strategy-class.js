class Customer {
  constructor(kind) {
    this.kind = kind;
  }
  pay(amount) {
    return this.kind.pay(amount);
  }
}

// 策略类
class Normal {
  pay(amount) {
    return amount;
  }
}

class Member {
  pay(amount) {
    return amount * 0.9;
  }
}

class VIP {
  pay(amount) {
    return amount * 0.8;
  }
}

let c1 = new Customer(new Normal());
let c2 = new Customer(new Member());
let c3 = new Customer(new VIP());

console.log(c1.pay(100)); // 100
console.log(c2.pay(100)); // 90
console.log(c3.pay(100)); // 80
