import React, {Component} from 'react';


export default class Counter extends Component {

    constructor() {
        super();
        this.state = {
            value: 1,
        }
    }

    render() {
        return <div>
            <button onClick={() => this.count()}>Count</button>
            <h3>{this.state.value}</h3>
            </div>;
    }

    count() {
        // 在 React 中，若想修改 state 中的数据，不要使用 this.state.xxx = yyy 的方式
        // 应调用 this.setState()
        // 注意：this.setState() 方法是异步的，可以使用回调函数来获取更新后的 state
        this.setState({
            value: this.state.value + 1,
        }, () => {console.log(this.state)});
    }
}