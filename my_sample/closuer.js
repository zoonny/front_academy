const userName = "hyung";
console.log(userName);

function createClosure() {
  let count = 0;
  return function counter() {
    return (count = count + 1);
  };
}

const counter = createClosure();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
