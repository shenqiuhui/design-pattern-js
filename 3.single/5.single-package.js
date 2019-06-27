function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHi = function () {
  console.log(this.name + '：' + this.age);
}

function Dailog(name) {
  this.name = name
}

Dailog.prototype.getName = function () {
  console.log(this.name);
}

const CreateSingle = function (Constructor) {
  let instance;

  const SingleConstructor = function () {
    if (!instance) {
      Constructor.apply(this, arguments);
      Object.setPrototypeOf(this, Constructor.prototype);
      instance = this;
    }
    return instance;
  }

  SingleConstructor.prototype = Object.create(Constructor.prototype);

  return SingleConstructor;
}

// 创建构造函数
const CreatePerson = CreateSingle(Person);
let w1 = new CreatePerson('hello', 18);
let w2 = new CreatePerson('world', 20);

const CreateDailog = CreateSingle(Dailog);
let s1 = new CreateDailog('model');
let s2 = new CreateDailog('view');

console.log(w1 === w2); // true
console.log(s1 === s2); // true


