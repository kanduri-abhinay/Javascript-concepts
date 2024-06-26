function getData() {
  console.log("getting data");
}

const debounce = function (fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    let context = this;
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

const getDataUsingDebounce = debounce(getData, 1000);
getDataUsingDebounce();
