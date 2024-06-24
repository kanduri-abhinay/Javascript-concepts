const pr1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("pr1");
  }, 1000);
});
const pr2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("pr2");
  }, 2000);
});
const pr3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("pr3");
  }, 3000);
});

Promise.customAllSettled = function (promises) {
  const finalPromise = new Promise((resolve, reject) => {
    const output = [];
    let completed = 0;
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((res) => {
          output[index] = res;
          completed++;
          if (completed == promises.length) resolve(output);
        })
        .catch((e) => {
          output[index] = e;
          completed++;
          if (completed == promises.length) resolve(output);
        });
    });
  });
  return finalPromise;
};

Promise.customAllSettled([pr1, pr2, pr3])
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
