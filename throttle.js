function throttle(fn, delay) {
  let timer = null;
  return function (arg) {
    if (!timer) {
      fn(arg);
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    }
  };
}

// testing

const throttledLog = throttle(console.log, 1000);
throttledLog(1); // logs 1 immediately
throttledLog(2); // is ignored
throttledLog(3); // is ignored
setTimeout(() => throttledLog(4), 500); // logs 4 after 500ms
setTimeout(() => throttledLog(5), 1000); // logs 5 after 1000ms
