(function () {
  const timeoutIds = new Set();
  const originalSetTimeout = globalThis.setTimeout;
  const originalClearTimeout = globalThis.clearTimeout;
  globalThis.setTimeout = function (callback, delay) {
    const tId = originalSetTimeout(() => {
      timeoutIds.delete(tId);
      callback();
    }, delay);
    timeoutIds.add(tId);
    return tId;
  };
  globalThis.clearTimeout = function (tId) {
    originalClearTimeout(tId);
    timeoutIds.delete(tId);
  };
  globalThis.clearAllTimeout = function () {
    timeoutIds.forEach((tId) => clearTimeout(tId));
    timeoutIds.clear();
  };
})();

setTimeout(() => {
  console.log("func1");
}, 1000);
setTimeout(() => {
  console.log("func2");
}, 1000);
setTimeout(() => {
  console.log("func3");
}, 1000);

setTimeout(() => {
  clearAllTimeout();
  console.log("All timeouts cleared before transition.");
}, 500);
