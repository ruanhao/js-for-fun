console.log("hello world");

import React from 'react';
import ReactDOM from 'react-dom';

// Create virtual dom
// const myDiv = React.createElement('div', {"id": "mydiv"}, 'Test div');

const myDiv = <div id='mydiv'>Test div</div>;


// Render virtual dom
ReactDOM.render(myDiv, document.getElementById('app'));
