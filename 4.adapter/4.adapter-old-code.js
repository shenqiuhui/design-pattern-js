// 适配器
window.$ = {
  ajax(options) {
    return fetch(options.url, {
      method: options.type || 'GET',
      body: JSON.stringifily(options.data || {})
    }).then(res => res.json());
  }
};

// $.ajax 的旧代码
$.ajax({
  url: 'pandashen.com/info',
  type: 'POST',
  dataType: 'json',
  data: { id: 1 }
}).then(function (data) {
  console.log(data);
});
