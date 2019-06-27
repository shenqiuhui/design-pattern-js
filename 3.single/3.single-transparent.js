const Person = (function () {
  let instance;

  return function (name) {
    if (instance) {
      return instance;
    } else {
      this.name = name;
      instance = this;
    }
  }
})();

let w1 = new Person('hello');
let w2 = new Person('world');

console.log(w1 === w2); // true
