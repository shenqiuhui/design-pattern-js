// 把类实例的创建逻辑和单例逻辑分开
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  console.log(this.name);
}

const CreatePerson = (function () {
  let instance;

  return function (name) {
    if (!instance) {
      instance = new Person(name);
    }
    return instance;
  }
})();

let w1 = new CreatePerson('hello');
let w2 = new CreatePerson('world');

console.log(w1 === w2); // true
