"use strict";
const name = "hyung";
console.log(name);
console.log("typescript");
function counterClosure() {
    let count = 0;
    return function counter() {
        return (count = count + 1);
    };
}
const counter = counterClosure();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
