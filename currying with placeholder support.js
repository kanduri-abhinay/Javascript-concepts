const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};

function curry(fn) {
  return function curried(...args) {
    if (isArgsMet(args, fn, curry.placeholder)) return fn.apply(null, args);
    return function (...nextArgs) {
      return curried.apply(null, mergeArgs(args, nextArgs, curry.placeholder));
    };
  };
}

function isArgsMet(args, fn, placeholder) {
  if (args.length < fn.length) return false;
  return args.slice(0, fn.length).every((item) => item !== placeholder);
}

function mergeArgs(argsTo, argsFrom, placeholder) {
  const mappedArgsTo = argsTo.map((item) =>
    item === placeholder && argsFrom.length > 0 ? argsFrom.shift() : item
  );
  return [...mappedArgsTo, ...argsFrom];
}

curry.placeholder = Symbol();

const curriedJoin = curry(join);
const _ = curry.placeholder;
curriedJoin(1, 2, 3); // '1_2_3'
curriedJoin(_, 2)(1, 3); // '1_2_3'
curriedJoin(_, _, _)(1)(_, 3)(2); // '1_2_3'
