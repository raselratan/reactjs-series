import React from 'react';
import ReactDOM from 'react-dom';

// These are same
const reactElement = React.createElement('h1', null, 'Hello world'); 
const reactElement2 = <h1>Hello world 2</h1> // using jsx

console.log(reactElement);
console.log(reactElement2);

ReactDOM.render(reactElement, document.getElementById('root'));