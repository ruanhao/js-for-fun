console.log("hello world");

import React from 'react';
import ReactDOM from 'react-dom';
// 第二种创建组件的方式
import MyComponent from './components/MyComponent.jsx';

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

ReactDOM.render(<div>
                Component Test
                <Hello {...user}></Hello>
                <Hello name="Mary" age="20" gender="female"></Hello>
                <MyComponent name="Linda" age="22" gender="female"></MyComponent>
                </div>, document.getElementById('component'));