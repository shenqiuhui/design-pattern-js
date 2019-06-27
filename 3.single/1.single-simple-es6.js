// ES6
class Person {
  constructor(name) {
    this.name = name;
  }
  static getInstance(name) {
    if (!this.instance) {
      this.instance = new Person(name);
    }
    return this.instance;
  }
}

let w1 = Person.getInstance('hello');
let w2 = Person.getInstance('world');

console.log(w1 === w2); // true