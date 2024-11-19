const arr = [1, 2, [3, [4, 5, 6], 7], 8];
Array.prototype.myFlat = function (depth = 2) {
  let arr = this;
  if (depth <= 0) return arr;
  let output = [];
  for (const ele of arr) {
    if (Array.isArray(ele)) {
      output = output.concat(ele.myFlat(depth - 1));
    } else {
      output.push(ele);
    }
  }
  return output;
};
console.log(arr.myFlat());

function flat(arr, depth = 1) {
  if (depth <= 0) return arr;
  const output = [];
  for (const item of arr) {
    if (Array.isArray(item)) output = output.concat(flat(item, depth - 1));
    else output.push(item);
  }
  return output;
}
console.log(arr.myFlat());
