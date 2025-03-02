const versions = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1];

let low = 0;
let high = versions.length - 1;

let result;
while (low <= high) {
  const mid = low + Math.floor((high - low) / 2);

  if (versions[mid] === -1) {
    result = mid;
    high = mid - 1;
  } else {
    low = mid + 1;
  }
}
console.log("first bad version found at index", result);
