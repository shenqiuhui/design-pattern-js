// 使用状态模式进行优化

class Battery {
  constructor() {
    this.amount = 'high'; // 电量高
    this.state = new SuccessState(); // 绿色状态
  }
  show() {
    // 把显示逻辑委托给状态对象
    this.state.show();
    if (this.amount === 'high') {
      this.amount = 'middle'; // 电量中等
      this.state = new WarningState(); // 黄色状态
    } else if(this.amount === 'middle') {
      this.amount = 'low'; // 电量低
      this.state = new ErrorState(); // 红色状态
    }
  }
}

class SuccessState {
  show() {
    console.log('显示绿色');
  }
}

class WarningState {
  show() {
    console.log('显示黄色');
  }
}

class ErrorState {
  show() {
    console.log('显示红色');
  }
}

let battery = new Battery();

battery.show();
battery.show();
battery.show();
