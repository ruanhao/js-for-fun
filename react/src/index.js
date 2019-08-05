console.log("hello world");

import React from 'react';
import ReactDOM from 'react-dom';

// Create virtual dom
// const myDiv = React.createElement('div', {"id": "mydiv"}, 'Test div');

let a = 10;
let str = "hello shanghai";
let b = true;
const h1 = <h1>H1</h1>;
// React 中，需要把 key 添加给被 forEach, map 或 for 循环直接控制的元素
const arr = [
    <h2 id="0">H2</h2>,
    <h3 id="1">H3</h3>,
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
                {strArr.map((str, index) => <h5 id={index}>{str}</h5>)}
                </div>, document.getElementById('app'));
