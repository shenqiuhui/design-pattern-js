class Icon {
  render() {}
}

class Button {
  render() {}
}

class AppleIcon extends Icon {
  render() {
    console.log('绘制 Mac 的图标');
  }
}

class AppleButton extends Button {
  render() {
    console.log('绘制 Mac 的按钮');
  }
}

class WindowsIcon extends Icon {
  render() {
    console.log('绘制 Windows 的图标');
  }
}

class WindowsButton extends Button {
  render() {
    console.log('绘制 Windows 的按钮');
  }
}

class Factory {
  createIcon() {} // 创建图标
  createButton() {} // 创建按钮
}

class AppleFactory extends Factory {
  createIcon() {
    return new AppleIcon();
  }
  createButton() {
    return new AppleButton();
  }
}

class WindowsFactory extends Factory {
  createIcon() {
    return new WindowsIcon();
  }
  createButton() {
    return new WindowsButton();
  }
}

let wondowsFactory = new WindowsFactory();
wondowsFactory.createIcon().render(); // 绘制 Windows 的图标
wondowsFactory.createButton().render(); // 绘制 Windows 的按钮

let appleFactory = new AppleFactory();
appleFactory.createIcon().render(); // 绘制 Mac 的图标
appleFactory.createButton().render(); // 绘制 Mac 的按钮
