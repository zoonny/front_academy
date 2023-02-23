const name: string = "hyung";
console.log(name);
console.log("typescript");

function counterClosure() {
  let count: number = 0;
  return function counter() {
    count += 1;
    return count;
  };
}

const counter = counterClosure();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());


