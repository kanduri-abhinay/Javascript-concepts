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

const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) return fn.apply(null, args);
    else {
      return function (...args2) {
        return curried.apply(null, [...args, ...args2]);
      };
    }
  };
}
const curriedJoin = curry(join);
const _ = curry.placeholder;
console.log(curriedJoin(1, 2, 3)); // '1_2_3'
console.log(curriedJoin(1, 2)(3)); // '1_2_3'
console.log(curriedJoin(1)(2, 3)); // '1_2_3'
