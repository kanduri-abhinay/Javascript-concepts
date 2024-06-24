const arr = [-1, -2, -3, 1, 2, 3];
Array.prototype.myMap = function (callback) {
  let output = [];
  let arr = this;
  for (index = 0; index < arr.length; index++) {
    output.push(callback(arr[index], index, arr));
  }
  return output;
};
console.log(
  arr.myMap((item) => {
    return item * item;
  })
);
