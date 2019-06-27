// ES5
function Person(name) {
  this.name = name;
}

Person.getInstance = (function () {
  let instance;
  return function (name) {
    if (!instance) {
      instance = new Person(name);
    }
    return instance;
  }
})();

let w1 = Person.getInstance('hello');
let w2 = Person.getInstance('world');

console.log(w1 === w2); // true
