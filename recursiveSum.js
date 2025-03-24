const sum = function (a) {
  const inner = function (b) {
    if (b) return sum(a + b);
    return a;
  };

  inner.valueOf = () => a;

  return inner;
};

console.log(sum(1)(2)(3)());
console.log(sum(1)(2) == 3);
