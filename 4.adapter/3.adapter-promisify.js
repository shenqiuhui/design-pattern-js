const fs = require('fs');

(async function () {
  let one = await fs.readFile('a.txt', 'utf8');
  let two = await fs.readFile('b.txt', 'utf8');
  let three = await fs.readFile('c.txt', 'utf8');
  console.log(one, two, three);
})();
