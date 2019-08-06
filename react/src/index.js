console.log("hello world");

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// 第二种创建组件的方式
// @ 表示项目根目录中的 src 目录
import MyComponent from '@/components/MyComponent';

// Create virtual dom
// const myDiv = React.createElement('div', {"id": "mydiv"}, 'Test div');

let a = 10;
let str = "hello shanghai";
let b = true;
const h1 = <h1>H1</h1>;
// React 中，需要把 key 添加给被 forEach, map 或 for 循环直接控制的元素
const arr = [
    <h2 key="0">H2</h2>,
    <h3 key="1">H3</h3>,
];
const strArr = [ 'a', 'b', 'c' ];
// const myDiv = <div id='mydiv'>Test div</div>;


// Render virtual dom
ReactDOM.render(<div>
                {a * 10}
                <hr/>
                {str}
                <hr/>
                {b.toString()}
                <hr/>
                {b ? '真' : '假'}
                <hr/>
                {h1}
                <hr/>
                {arr}
                <hr/>
                {strArr.map((str, index) => <h5 key={index}>{str}</h5>)}
                </div>, document.getElementById('app'));

// 第一种创建组件的方式
function Hello(props) {
    return <div>Hello {props.name}, age: {props.age}, gender: {props.gender}</div>;
}

const user = {
    "name": "Peter",
    "age": 30,
    "gender": "male"
};

// // 使用 class 创建组件的方式
class MyComponent2 extends Component {
    render() {
        return <div>Hello {this.props.name} ({this.props.age})</div>;
    }
}

ReactDOM.render(<div>
                Component Test
                <Hello {...user}></Hello>
                <Hello name="Mary" age="20" gender="female"></Hello>
                <MyComponent name="Linda" age="22" gender="female"></MyComponent>
                </div>, document.getElementById('component'));


ReactDOM.render(<div>
                <h1>Create Component by class</h1>
                <MyComponent2 name="Jolin" age="10"></MyComponent2>
                </div>, document.getElementById('component2'));