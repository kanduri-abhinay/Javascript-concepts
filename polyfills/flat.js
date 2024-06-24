const arr = [1, 2, [3, [4, 5, 6], 7], 8];
Array.prototype.customFlat = function (depth = 2) {
  let arr = this;
  if (depth <= 0) return arr;
  let output = [];
  for (const ele of arr) {
    if (Array.isArray(ele)) {
      output = output.concat(ele.customFlat(depth - 1));
    } else {
      output.push(ele);
    }
  }
  return output;
};
console.log(arr.customFlat());
