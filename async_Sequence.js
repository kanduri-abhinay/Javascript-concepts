const asyncTimes2 = (callback, num) => {
  setTimeout(() => callback(null, num * 2), 100);
};

function sequence(fnArr) {
  return function (callback, data) {
    let index = 0;

    function execute(error, result) {
      if (error || index === fnArr.length) {
        callback(error, result);
        return;
      }
      fnArr[index++](execute, result);
    }
    execute(null, data);
  };
}

const asyncTimes4 = sequence([asyncTimes2, asyncTimes2]);
asyncTimes4((error, data) => {
  console.log(data); // 4
}, 1);
