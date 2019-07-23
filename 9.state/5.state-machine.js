// 有限状态机对象
// const StateMachine = require('javascript-state-machine');

// 模拟实现有限状态机
class StateMachine {
  constructor(options) {
    let {
      init = 'none',
      transitions = [],
      methods = {}
    } = options;

    this.state = init;

    transitions.forEach(transition => {
      let { from, to, name } = transition;
      this[name] = function () {
        if (this.state === from) {
          this.state = to;
          let onMethod = `on${name.slice(0, 1).toUpperCase()}${name.slice(1)}`;
          methods[onMethod] && methods[onMethod]();
        }
      }
    });
  }
}

let fsm = new StateMachine({
  init: 'solid', // 初始状态（固态）
  transitions: [
    { from: 'solid', to: 'liquid', name: 'melt' },
    { from: 'liquid', to: 'solid', name: 'freeze' },
    { from: 'liquid', to: 'gas', name: 'vaporize' },
    { from: 'gas', to: 'liquid', name: 'condense' }
  ],
  methods: {
    onMelt() {
      console.log('melt');
    },
    onFreeze() {
      console.log('freeze');
    },
    onVaporize() {
      console.log('vaporize');
    },
    onCondense() {
      console.log('condense');
    }
  }
});

// console.log(fsm.state); // solid
// console.log(fsm.can('gas')); // false
// console.log(fsm.cannot('gas')); // true
// console.log(fsm.transitions()); // [ 'melt' ]
// console.log(fsm.allTransitions()); // [ 'init', 'melt', 'freeze', 'vaporize', 'condense' ]
// console.log(fsm.allStates()); // [ 'none', 'solid', 'liquid', 'gas' ]

fsm.melt(); // melt
console.log(fsm.state); // liquid
// console.log(fsm.transitions()); // [ 'freeze', 'vaporize' ]
