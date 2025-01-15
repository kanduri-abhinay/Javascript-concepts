Object.myAssign = function (target, ...sources) {
  if (sources) {
    sources.forEach((source) => {
      Object.keys(source).forEach((key) => {
        target[key] = source[key];
      });
    });
  }
  return target;
};

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.myAssign(target, source);

console.log(target);

console.log(returnedTarget === target);
