Object.myAssign = function (target, ...sources) {
  if (target == null) {
    throw new TypeError("Cannot convert null or undefined to object");
  }

  target = Object(target); // Convert primitives to objects

  if (sources) {
    sources.forEach((source) => {
      if (source) {
        // Copy enumerable own properties (both string and symbol keys)
        Object.keys(source).forEach((key) => {
          target[key] = source[key];
        });

        Object.getOwnPropertySymbols(source).forEach((symbol) => {
          if (Object.prototype.propertyIsEnumerable.call(source, symbol)) {
            target[symbol] = source[symbol];
          }
        });
      }
    });
  }

  return target;
};

// Example usage
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.myAssign(target, source);

console.log(target); // Output: { a: 1, b: 4, c: 5 }
console.log(returnedTarget === target); // Output: true
