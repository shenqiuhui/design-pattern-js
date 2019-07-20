class Event {
  constructor() {
    this.events = {};
  }
  on(type, fn) {
    if (!this.events[type]) {
      this.events[type] = [ fn ];
    } else {
      this.events[type].push(fn);
    }
  }
  emit(type) {
    if (this.events[type]) {
      this.events[type].forEach(fn => fn());
    }
  }
}

let event = new Event();

// 订阅事件
event.on('say', () => console.log('hello'));
event.on('say', () => console.log('world'));

// 发布事件
event.emit('say');
