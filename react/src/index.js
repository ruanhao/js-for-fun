console.log("hello world");

import React from 'react';
import ReactDOM from 'react-dom';

// Create virtual dom
// const myDom = React.createElement('h1', null, 'Test H1');
const myDom = React.createElement('h2', {"id": "myh2", "title": "This is h2"}, 'Test H2');

// Render virtual dom
ReactDOM.render(myDom, document.getElementById('app'));
