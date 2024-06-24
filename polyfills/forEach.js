const arr = [-1, -2, -3, 1, 2, 3];
Array.prototype.myForEach = function (callback) {
  let arr = this;
  for (index = 0; index < arr.length; index++) {
    callback(arr[index], index, arr);
  }
};
console.log(
  arr.myForEach((item) => {
    console.log(item);
  })
);
