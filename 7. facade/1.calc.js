// 子系统角色 Sum
class Sum {
  sum(a, b) {
    return a + b;
  }
}

// 子系统角色 Minus
class Minus {
  minus(a, b) {
    return a - b;
  }
}

// 子系统角色 Multipy
class Multipy {
  multipy(a, b) {
    return a * b;
  }
}

// 子系统角色 Divide
class Divide {
  divide(a, b) {
    return a / b;
  }
}

// 门面角色 Calculator
class Calculator {
  constructor() {
    this.sumObj = new Sum();
    this.minusObj = new Minus();
    this.multipyObj = new Multipy();
    this.divideObj = new Divide();
  }
  sum(...args) {
    return this.sumObj.sum(...args);
  }
  minus(...args) {
    return this.minusObj.minus(...args);
  }
  multipy(...args) {
    return this.multipyObj.multipy(...args);
  }
  divide(...args) {
    return this.divideObj.divide(...args);
  }
}

// 客户角色
let calculator = new Calculator();

console.log(calculator.sum(1, 2)); // 3
console.log(calculator.minus(1, 2)); // -1
console.log(calculator.multipy(1, 2)); // 2
console.log(calculator.divide(1, 2)); // 0.5
