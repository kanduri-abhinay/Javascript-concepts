(function () {
  let timers = {};
  function mySetTimeout(callback, delay) {
    const id = Math.random().toString(36).slice(2);
    timers[id] = callback;
    requestIdleCallback(
      () => {
        if (timers[id]) {
          timers[id]();
          delete timers[id];
        }
      },
      { timeout: delay }
    );
    return id;
  }
  function myClearTimeout(timerId) {
    if (timerId) delete timers[timerId];
  }
  window.myClearTimeout = myClearTimeout;
  window.mySetTimeout = mySetTimeout;
})();

mySetTimeout(() => {
  console.log("implemented mysettimeout");
}, 3000);
