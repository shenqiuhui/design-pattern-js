// 类 Power
class Power {
  charge() {
    return '220V';
  }
}

// 适配器
class Adaptor {
  constructor(Power) {
    this.power = new Power();
  }
  charge() {
    let v = this.power.charge();
    return `${v} => 12V`;
  }
}

// 类 Power 的使用者
class Notepad {
  constructor(Power) {
    this.adaptor = new Adaptor(Power);
  }
  use() {
    console.log(this.adaptor.chargeTransform());
  }
}

let notepad = new Notepad(Power);
notepad.use(); // 220V => 12V
