import { createDOM, createElement, render } from './react';

const vdom = createElement('p', {}, 
  createElement('h1', {}, "React 만들기"),
  createElement('ul', {}, 
    createElement('li', { style: "color:red" }, "첫 번째 아이템"),
    createElement('li', { style: "color:blue" }, "두 번째 아이템"),
    createElement('li', { style: "color:green" }, "세 번째 아이템"),
    )
  );

console.log(vdom);

render(vdom, document.querySelector('#root'));
