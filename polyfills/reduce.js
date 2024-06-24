const arr = [1, 2, 3, 4, 5, 6];
Array.prototype.myReduce = function (callback, initialValue) {
  const arr = this;
  let output = initialValue;
  for (ind = 0; ind < arr.length; ind++) {
    output = callback(output, arr[ind], ind, arr);
  }
  return output;
};
const sum = arr.myReduce((total, ele) => {
  return total + ele;
}, 0);
console.log(sum);
