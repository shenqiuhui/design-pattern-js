class Animal {
  constructor(name) {
    this.name = name;
  }
  eat(food) {
    console.log(`${this.name} eat ${food}.`);
  }
}

let dog = new Animal('Dog');
dog.eat('bone');

