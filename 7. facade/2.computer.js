// 子系统角色 CPU
class CPU {
  start() {
    console.log('CPU 启动');
  }
}

// 子系统角色 Memory
class Memory {
  start() {
    console.log('内存启动');
  }
}

// 子系统角色 Disk
class Disk {
  start() {
    console.log('硬盘启动');
  }
}

// 门面角色 Computer
class Computer {
  constructor() {
    this.cpu = new CPU();
    this.memory = new Memory();
    this.disk = new Disk();
  }
  start() {
    this.cpu.start();
    this.memory.start();
    this.disk.start();
  }
}

// 客户角色
let computer = new Computer();

computer.start();
// CPU 启动
// 内存启动
// 硬盘启动
