let lucy = {
  name: 'lucy',
  age: 20,
  height: 165
};

let lucyMother = new Proxy(lucy, {
  get(target, key) {
    if (key === 'age') {
      return target.age - 2;
    } else if (key === 'height') {
      return target.height + 5;
    } else {
      return target[key];
    }
  },
  set(target, key, val) {
    if (key === 'boyfriend') {
      if (val.age > 40) {
        console.log('太老了');
      } else if (val.salary < 20000) {
        console.log('太穷了');
      } else {
        target[key] = val;
      }
    }
  }
});

console.log(lucyMother.name);
console.log(lucyMother.age);
console.log(lucyMother.height);

lucyMother.boyfriend = {
  age: 42,
  salary: 25000
}

lucyMother.boyfriend = {
  age: 36,
  salary: 18000
}

