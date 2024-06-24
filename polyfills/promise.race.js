const pr1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("pr1");
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

Promise.myRace = function (promises) {
  const finalPromise = new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((res) => {
          resolve(res);
        })
        .catch((e) => {
          resolve(e);
        });
    });
  });
  return finalPromise;
};

Promise.myRace([pr1, pr2, pr3])
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
