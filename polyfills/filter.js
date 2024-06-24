const arr = [-1, -2, -3, 1, 2, 3];
Array.prototype.customFilter = function (callback) {
  let output = [];
  let arr = this;
  for (index = 0; index < arr.length; index++) {
    if (callback(arr[index], index, arr)) output.push(arr[index]);
  }
  return output;
};
console.log(
  arr.customFilter((item) => {
    return item > 0;
  })
);
