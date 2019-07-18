const express = require('express');
const path = require('path');

const app = express();

app.get('/loading.gif', function (req, res) {
  res.sendFile(path.resolve('img', 'loading.gif'));
});

app.get('/img/:name', function (req, res) {
  setTimeout(function () {
    res.sendFile(path.join(__dirname, req.path));
  }, 3000);
});

app.use(express.static(__dirname));

app.listen(3000, function () {
  console.log('server start 3000');
});
