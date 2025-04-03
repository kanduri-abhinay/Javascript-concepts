function completeAssign(target, ...sources) {
  if (target === null || typeof target !== "object") {
    throw new Error("Invalid target");
  }

  target = Object(target);

  sources.forEach((source) => {
    if (source && typeof source === "object") {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
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
const target = completeAssign({}, source);
console.log(target);
