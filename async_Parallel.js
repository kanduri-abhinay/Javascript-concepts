function parallel(fnArr) {
  return function (cb, data) {
    let completed = 0;
    const res = new Array(fnArr.length); // Ensure order is maintained

    function execute(index, error, result) {
      if (error) {
        cb(error, res);
        return;
      }
      res[index] = result; // Store result at correct index
      completed++;
      if (completed === fnArr.length) {
        cb(null, res); // Ensure error is null for successful execution
      }
    }

    // Call each function with an index reference
    fnArr.forEach((fn, i) =>
      fn((error, result) => execute(i, error, result), data)
    );
  };
}

// Example async functions
const async1 = (callback) => {
  setTimeout(() => callback(undefined, 1), 100);
};
const async2 = (callback) => {
  setTimeout(() => callback(undefined, 2), 50);
};
const async3 = (callback) => {
  setTimeout(() => callback(undefined, 3), 150);
};

const all = parallel([async1, async2, async3]);
all((error, data) => {
  console.log(data); // Expected output: [1, 2, 3], preserving the order
});
