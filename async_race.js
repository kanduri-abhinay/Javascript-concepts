const async1 = (callback) => {
  setTimeout(() => callback(undefined, 1), 300);
};
const async2 = (callback) => {
  setTimeout(() => callback(undefined, 2), 100);
};
const async3 = (callback) => {
  setTimeout(() => callback(undefined, 3), 200);
};

function race(fnArr) {
  return function (callback, data) {
    let isCompleted = false;
    function execute(error, result) {
      if (!isCompleted) {
        isCompleted = true;
        callback(error, result);
      }
    }
    fnArr.forEach((fn) => {
      fn(execute, data);
    });
  };
}

const first = race([async1, async2, async3]);
first((error, data) => {
  console.log(data); // 2, since 2 is the first to be given
}, 1);
