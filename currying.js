// one way to do is using bind
let multiply = function (x, y) {
  return x * y;
};
const multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(5));

// another way is using closures
multiply = function (x) {
  return function (y) {
    return x * y;
  };
};

const multiplyByThree = multiply(3);
console.log(multiplyByThree(5));
