console.log("hello world");

import React from 'react';
import ReactDOM from 'react-dom';

// Create virtual dom
const myH1 = React.createElement('h1', null, 'Test H1');
const myDiv = React.createElement('div', null, 'Test div', myH1);


// Render virtual dom
ReactDOM.render(myDiv, document.getElementById('app'));
