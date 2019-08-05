import React from 'react';

function MyComponent(props) {
    return <div>Hello MyComponent => {props.name}, age: {props.age}, gender: {props.gender}</div>;
}

// 把组件暴露出去
export default MyComponent;