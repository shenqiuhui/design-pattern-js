// 提供工厂类所共有的内容（依赖倒置原则，依赖抽象而不依赖实现）
class Factory {
  create () {}
}

module.exports = Factory;