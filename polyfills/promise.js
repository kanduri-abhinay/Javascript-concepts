function myPromise(executor) {
  let state = "pending";
  let value;
  const onResolveCallbacks = [];
  const onRejectCallbacks = [];
  const resolve = (result) => {
    if (state == "pending") {
      state = "fulfilled";
      value = result;
      onResolveCallbacks.forEach((cb) => cb(value));
    }
  };
  const reject = (reason) => {
    if (state == "pending") {
      state = "rejected";
      value = reason;
      onRejectCallbacks.forEach((cb) => cb(value));
    }
  };
  executor(resolve, reject);
  return {
    then: (onResolve, onReject) => {
      if (typeof onResolve === "function") onResolveCallbacks.push(onResolve);
      if (typeof onReject === "function") onRejectCallbacks.push(onReject);
    },
  };
}

const promise = new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("custom polyfill implementation");
  }, 1000);
});
promise.then(
  (res) => {
    console.log(res);
  },
  (error) => {
    console.log(error);
  }
);
