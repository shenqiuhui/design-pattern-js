const utils = {};

utils.define = function (namespace, fn) {
  const namespaces = namespace.split('.');
  const methodName = namespaces.pop();
  let current = utils;

  for (let i = 0; i < namespaces.length; i++) {
    const currentNamespace = namespaces[i];
    if (!current[currentNamespace]) {
      current[currentNamespace] = {};
    }
    current = current[currentNamespace];
  }

  current[methodName] = fn;
}

utils.define('dom.class.addClass', function () {
  console.log('dom.class.addClass');
});

utils.define('string.trim', function () {
  console.log('string.trim');
});

utils.define('event.prevent', function () {
  console.log('event.prevent');
});

utils.dom.class.addClass('title');
utils.string.trim(' hello ');
utils.event.prevent();
