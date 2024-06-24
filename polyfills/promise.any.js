const pr1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("pr1");
  }, 1000);
});
const pr2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("pr2");
  }, 2000);
});
const pr3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("pr3");
  }, 3000);
});

Promise.myAny = function (promises) {
  const finalPromise = new Promise((resolve, reject) => {
    let completed = 0;
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((res) => {
          resolve(res);
        })
        .catch((e) => {
          completed++;
          if (completed == promises.length)
            reject("No Promise in Promise.any was resolved");
        });
    });
  });
  return finalPromise;
};

Promise.myAny([pr1, pr2, pr3])
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
