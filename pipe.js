const times = (y) => (x) => x * y;
const plus = (y) => (x) => x + y;
const subtract = (y) => (x) => x - y;
const divide = (y) => (x) => x / y;

function pipe(fns) {
  return function (arg) {
    return fns.reduce((acc, fn) => fn(acc), arg);
  };
}
const fn1 = pipe([times(2), times(3)]);
// x * 2 * 3
const fn2 = pipe([times(2), plus(3), times(4)]);
// (x * 2 + 3) * 4
const fn3 = pipe([times(2), subtract(3), divide(4)]);
// (x * 2 - 3) / 4

console.log(fn1(5));
console.log(fn2(5));
console.log(fn3(5));
