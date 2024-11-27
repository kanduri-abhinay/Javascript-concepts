function memo(func, resolver = (...args) => args.join("_")) {
  const cache = {};
  return function memoized(...args) {
    const key = resolver(...args);
    if (cache[key]) return cache[key];
    cache[key] = func.apply(null, args);
    return cache[key];
  };
}
const func = (arg1, arg2) => {
  return arg1 + arg2;
};
const memoed = memo(func);
console.log(memoed(1, 2));
// 3, func is called, 3 is cached with key 'samekey'
console.log(memoed(1, 2));
// 3, since key is the same, 3 is returned without calling func
console.log(memoed(1, 3));
