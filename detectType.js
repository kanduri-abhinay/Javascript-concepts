function detectType(value) {
  let result;
  if (typeof value != "object") result = typeof value;
  else if (value === null) result = "null";
  else if (value.constructor === Array) result = "array";
  else if (value.constructor === ArrayBuffer) result = "arrayBuffer";
  else if (value.constructor === Map) result = "map";
  else if (value.constructor === Set) result = "set";
  else if (value.constructor === Date) result = "date";
  else if (value.constructor === Function) result = "function";
  return result;
}

console.log(detectType(1));
console.log(detectType("1"));
console.log(detectType(true));
console.log(detectType(undefined));
console.log(detectType(null));
console.log(detectType(new Array()));
console.log(detectType(new ArrayBuffer()));
console.log(detectType(new Map()));
console.log(detectType(new Set()));
console.log(detectType(new Date()));
console.log(detectType(new Function()));
