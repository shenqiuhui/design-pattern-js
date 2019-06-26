class Animal {
  constructor(name) {
    this.name = name;
  }
  eat(food) {
    console.log(`${this.name} eat ${food}.`);
  }
}

class Dog extends Animal {
  constructor() {
    super('Dog');
  }
  speak() {
    console.log('wang wang wang!');
  }
}

class Cat extends Animal {
  constructor() {
    super('Cat');
  }
  speak() {
    console.log('miao miao miao!');
  }
}

let dog = new Dog();
dog.eat('bone');
dog.speak();

let cat = new Cat();
cat.eat('fish');
cat.speak();
