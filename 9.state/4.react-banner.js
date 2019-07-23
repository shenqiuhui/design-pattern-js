// React 导航
import React from 'react';
import ReactDOM from 'react-dom';

// 状态管理对象
const States = {
  show() {
    console.log('显示 Banner');
    this.setState({ isShow: false });
  },
  hide() {
    console.log('隐藏 Banner');
    this.setState({ isShow: true });
  }
};

class Banner extends React.Component {
  state = { isShow: true }
  toggle = () => {
    let currentState = this.setState.isShow;
    States[currentState] && States[currentState].apply(this);
  }
  render() {
    return (
      <div>
        {
          isShow && (
            <nav>导航</nav>
          )
        }
        <button>toggle</button>
      </div>
    )
  }
}

ReactDOM.render(<Banner />, document.getElementById('root'));
