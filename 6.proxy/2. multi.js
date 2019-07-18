function multi(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * multi(n - 1);
  }
}

const sum = (function () {
  const cache = {};
  return (n) => {
    let result = 0;
    let ret;
    for (let i = 1; i <= n; i++) {
      if (!cache[i]) {
        ret = multi(i);
        cache[i] = ret;
      } else {
        ret = cache[i];
      }
      result += ret;
    }
    return result;
  }
})()

console.time('cost');
console.log(sum(100));
console.timeEnd('cost');