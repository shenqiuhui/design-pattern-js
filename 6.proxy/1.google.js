// 假设无法客户端无法直接使用这个类
class Google {
  get(url) {
    return `${url} is google`;
  }
}

// 只能通过代理操作 Google 类
class Proxy {
  constructor() {
    this.google = new Google();
  }
  get(url) {
    return this.google.get(url);
  }
}

let proxy = new Proxy();
let result = proxy.get('http://www.google.com');
console.log(result); // http://www.google.com is google
