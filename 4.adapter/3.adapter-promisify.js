const fs = require('fs');

function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn.call(null, ...args, function (err, data) {
        err ? reject(err) : resolve(data);
      });
    });
  }
}

const readFile = promisify(fs.readFile);
