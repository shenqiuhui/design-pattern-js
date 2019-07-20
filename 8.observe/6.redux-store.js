function createStore(reducer) {
  let state;
  let listeners = [];

  // 获取 store
  const getState = () => JSON.parse(JSON.stringify(state));

  // 订阅方法
  const subscribe = fn => {
    listeners.push(fn);

    // 取消订阅方法
    return () => {
      listeners = listeners.filter(listener => listener !== fn);
    };
  }

  // 派发动作
  const dispatch = action => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  }

  dispatch({ type: '@INIT' });

  return {
    getState,
    subscribe,
    dispatch
  };
}
