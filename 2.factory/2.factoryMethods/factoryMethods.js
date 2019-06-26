const setting = require('./setting');

let apple = require(setting['apple']).create();
let orange = require(setting['orange']).create();

console.log(apple.flavour); // 甜
console.log(orange.flavour); // 酸

// 缺点：不耦合具体创建实例的类，但是耦合工厂
