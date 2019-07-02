// 装饰器模式有时候会优于继承

class Coffee {
  make(water) {
    return `${water} + 咖啡`
  }
  cost() {
    return 10;
  }
}

class MilkCoffee {
  constructor(parent) {
    this.parent = parent;
  }
  make(water) {
    return `${this.parent.make(water)} + 奶`;
  }
  cost() {
    return this.parent.cost() + 3;
  }
}

class SugarCoffee {
  constructor(parent) {
    this.parent = parent;
  }
  make(water) {
    return `${this.parent.make(water)} + 糖`;
  }
  cost() {
    return this.parent.cost() + 2;
  }
}

class IceCoffee {
  constructor(parent) {
    this.parent = parent;
  }
  make(water) {
    return `${this.parent.make(water)} + 冰`;
  }
  cost() {
    return this.parent.cost() + 1;
  }
}

let coffee = new Coffee();
let milkCoffee = new MilkCoffee(coffee);
let sugarCoffee = new SugarCoffee(milkCoffee);
let iceCoffee = new IceCoffee(sugarCoffee);

console.log(milkCoffee.make('水'), milkCoffee.cost());
console.log(sugarCoffee.make('水'), sugarCoffee.cost());
console.log(iceCoffee.make('水'), iceCoffee.cost());

