// 请求方法
function ajax(options) {
  const defaultOptions = {
    method: 'GET',
    dataType: 'JSON'
  };

  initParams(options, defaultOptions); // 适配参数
}

// 参数适配器
function initParams(options, defaultOptions) {
  for (let attr in options) {
    defaultOptions[attr] = options[attr] || defaultOptions[attr];
  }

  return defaultOptions;
}

// 数据适配器
function tranformData(data) {
  return JSON.parse(data);
}

// 使用适配器
ajax({
  url: 'www.pandashen.com',
  method: 'POST',
  success(json) {
    let result = tranformData(json); // 适配返回数据
    console.log(result);
  }
});