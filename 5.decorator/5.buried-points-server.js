const express = require('express');
const app = express();

// 存储按钮的点击次数
const goods = {};

app.get('/report', function (req, res) {
  let name = req.query.name;
  if (goods[name]) {
    goods[name]++;
  } else {
    goods[name] = 1;
  }

  res.json(goods);
});

app.listen(3000, function () {
  console.log('server start 3000');
});
