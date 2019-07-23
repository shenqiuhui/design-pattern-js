// 不使用状态模式的实现逻辑
class Battery {
  constructor() {
    this.amount = 'high'; // 电量高
  }
  show() {
    if (this.amount === 'high') {
      console.log('显示绿色');
      this.amount = 'middle';
    } else if (this.amount === 'middle') {
      console.log('显示黄色');
      this.amount = 'low';
    } else if (this.amount === 'low') {
      console.log('显示红色');
    }
  }
}

let battery = new Battery();

battery.show(); // 显示绿色
battery.show(); // 显示黄色
battery.show(); // 显示红色
