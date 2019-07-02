class Duck {
  constructor(name) {
    this.name = name;
  }
  eat(food) {
    console.log(`${this.name}吃${food}`);
  }
}

class TangDuck {
  constructor(name) {
    this.duck = new Duck(name);
  }
  eat(food) {
    this.duck.eat(food);
    console.log('说谢谢');
  }
}

let tangDuck = new TangDuck('唐老鸭');
tangDuck.eat('苹果');
