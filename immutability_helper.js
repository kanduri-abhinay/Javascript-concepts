function update(target, command) {
  if (typeof command !== "object") {
    return command;
  }
  if (command.$push !== undefined) {
    return [...target, ...command.$push];
  }
  if (command.$set !== undefined) {
    return command.$set;
  }
  if (command.$merge !== undefined) {
    return { ...target, ...command.$merge };
  }
  if (command.$apply !== undefined) {
    return command.$apply(target);
  }
  const nextState = { ...target };
  for (const key in command) {
    nextState[key] = update(target[key], command[key]);
  }
  return Array.isArray(target) ? Object.values(nextState) : nextState;
}

// {$push: array} push() all the items in array on the target.
const arr = [1, 2, 3, 4];
const newArr = update(arr, { $push: [5, 6] });
console.log(newArr);
const arr2 = [
  1,
  2,
  3,
  {
    b: [1, 2],
  },
];
const newArr2 = update(arr2, { 3: { b: { $push: [5, 6] } } });
console.log(newArr2);

//{$set: any} replace the target
const arr3 = {
  a: {
    b: {
      c: 1,
    },
  },
  d: 2,
};
const newArr3 = update(arr3, { a: { b: { c: { $set: 3 } } } });
console.log(newArr3);
const arr4 = [1, 2, 3, 4];
const newArr4 = update(arr4, { 0: { $set: 0 } });
console.log(newArr4);

//{$merge: object} merge object to the location
const arr5 = {
  a: {
    b: {
      c: 1,
    },
  },
  d: 2,
};
const newArr5 = update(arr5, { a: { b: { $merge: { e: 5 } } } });
console.log(newArr5);

//{$apply: function} custom replacer
const arr6 = [1, 2, 3, 4];
const newArr6 = update(arr6, { 0: { $apply: (item) => item * 2 } });
console.log(newArr6);
