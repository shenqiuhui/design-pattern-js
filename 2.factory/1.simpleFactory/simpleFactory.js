class Plant {
  constructor(name) {
    this.name = name;
  }
  grow() {
    console.log('I am growing!');
  }
}

class Apple extends Plant {
  constructor(name, flavour) {
    super(name);
    this.flavour = flavour;
  }
}

class Orange extends Plant {
  constructor(name, flavour) {
    super(name);
    this.flavour = flavour;
  }
}

// let apple = new Apple('苹果', '甜');
// let orange = new Orange('橘子', '酸');

// 直接 new 有什么缺点
// 1、耦合    2、依赖具体的实现
// 简单工厂

class Factory {
  static create(type) {
    switch (type) {
      case 'apple':
        return new Apple('苹果', '甜');
      case 'orange':
        return new Orange('桔子', '酸');
      default:
        throw new Error('no constructor!');
    }
  }
}

let apple = Factory.create('apple');
let orange = Factory.create('orange');

console.log(apple.flavour); // 甜
console.log(orange.flavour); // 酸

// 简单工厂的好处
// 1、隐藏实现，不用关心具体类的实现，只需要提供需要的需要实例的类型
// 2、让创建实例的过程与具体对应的类进行解耦

// 经典场景 jquery
class JQuery {
  constructor (selector) {
    this.selector = selector;
    let elements = document.querySelectorAll(selector);
    this.length = elements.length;

    for (let i = 0; i < this.length; i++) {
      this[i] = elements[i];
    }
  }
  html() {
    return this[0].innerHTML;
  }
}

// 简单工厂
window.$ = function (selector) {
  return new JQuery(selector);
}

let html = $('li').html();

// 经典场景 React 虚拟 Dom
class VNode {
  constructor(tagName, attrs, children) {
    this.tagName = tagName;
    this.attrs = attrs;
    this.children = children;
  }
}

// 挂在 React 对象上的简单工厂函数
React.createElement = function (tagName, attrs, children) {
  return new VNode(tagName, attrs, children);
}
