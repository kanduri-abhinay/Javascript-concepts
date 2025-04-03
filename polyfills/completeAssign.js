function completeAssign(target, ...sources) {
  if (target === null) throw new Error("invalid target");
  target = Object(target);
  sources.forEach((source) => {
    if (source && typeof source === "object") {
      Object.getOwnPropertyNames(source).forEach((prop) => {
        const descriptor = Object.getOwnPropertyDescriptor(source, prop);
        Object.defineProperty(target, prop, descriptor);
      });
      Object.getOwnPropertySymbols(source).forEach((prop) => {
        const descriptor = Object.getOwnPropertyDescriptor(source, prop);
        Object.defineProperty(target, prop, descriptor);
      });
    }
  });
  return target;
}

const source = Object.create(
  {
    a: 1,
  },
  {
    b: {
      value: 2,
      enumerable: true,
    },
    c: {
      value: 3,
    },
    d: {
      get: function () {
        return this._d;
      },
      set: function (value) {
        this._d = value;
      },
      enumerable: true,
    },
    e: {
      get: function () {
        return this._e;
      },
      set: function (value) {
        this._e = value;
      },
    },
  }
);

source.d = 4;
source.e = 5;

console.log(completeAssign({}, source));
