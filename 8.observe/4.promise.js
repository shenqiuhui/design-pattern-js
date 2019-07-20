let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('res'), 3000);
});

promise.then(data => console.log(1, data));
promise.then(data => console.log(2, data));
