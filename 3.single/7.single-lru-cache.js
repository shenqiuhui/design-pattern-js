/**
 * 用一个数组来存储数据，给每一个数据项标记一个访问时间戳
 * 每次插入新数据项的时候，先把数组中存在的数据项的时间戳自增,并将新数据项的时间戳置为0并插入到数组中
 * 每次访问数组中的数据项的时候，将被访问的数据项的时间戳置为0。
 * 当数组空间已满时，将时间戳最大的数据项淘汰。
*/

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.members = [];
  }
  put(key, val) {
    let oldestIndex = -1;
    let oldestAge = -1;
    let found = false;

    for (let i = 0; i < this.members.length; i++) {
      let member = this.members[i];

      if (member.age > oldestAge) {
        oldestAge = member.age;
        oldestIndex = i;
      }

      if (member.key === key) {
        this.members[i] = { key, val, age: 0 };
        found = true;
      } else {
        member.age++;
      }
    }

    if (!found) {
      if (this.members.length >= this.capacity) {
        this.members.splice(oldestIndex, 1);
      }
      this.members.push({ key, val, age: 0 });
    }
  }
  get(key) {
    for (let i = 0; i < this.members.length; i++) {
      let member = this.members[i];

      if (member.key === key) {
        member.age = 0;
        return member.val;
      }
    }
    return -1;
  }
}

const cache = new LRUCache(2);

cache.put('1', 1);
console.log(cache.members);
cache.put('2', 2);
console.log(cache.members);
cache.put('3', 3);
console.log(cache.members);
cache.put('2', 'hello');
console.log(cache.members);
