// 被观察者类
class Star {
  constructor(name) {
    this.name = name;
    this.state = '';
    this.observers = [];
  }
  getState() {
    return this.state;
  }
  setState(state) {
    this.state = state;
    this.notify();
  }
  attach(observer) {
    this.observers.push(observer);
  }
  notify() {
    this.observers.forEach(observer => observer.update());
  }
}

// 观察者类
class Fan {
  constructor(name, star) {
    this.name = name;
    this.star = star;
    this.star.attach(this);
  }
  update() {
    console.log(`我喜欢的明星喜欢${this.star.getState()}，我也喜欢。`);
  }
}

let star = new Star('Angular Baby');
let fan = new Fan('张三', star);

star.setState('绿色');

