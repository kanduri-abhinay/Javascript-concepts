function throttle(func, delay, options = { leading: true, trailing: true }) {
  let timer;
  let lastArgs;
  let { leading, trailing } = options;

  function timeOut() {
    if (trailing && lastArgs) {
      func(...lastArgs);
      lastArgs = null;
      timer = setTimeout(timeOut, delay);
    } else {
      timer = null;
    }
  }
  return function (...args) {
    if (!timer) {
      if (leading) {
        func(...args);
      }
      timer = setTimeout(timeOut, delay);
    } else {
      lastArgs = args;
    }
  };
}

const throttledFunc = throttle(
  (...args) => {
    console.log(...args);
  },
  3000,
  { leading: true, trailing: true }
);

let count = 0;
setInterval(() => {
  throttledFunc(count, "sec");
  count++;
}, 1000);
