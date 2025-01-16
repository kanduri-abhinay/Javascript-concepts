function mergeSort(arr, low, high) {
  if (low >= high) return;
  const mid = low + Math.floor((high - low) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, mid, high);
}
function merge(arr, low, mid, high) {
  let n1 = mid - low + 1;
  let n2 = high - mid;
  const temp = [];

  let ptr1 = low,
    ptr2 = mid + 1;
  while (n1 > 0 && n2 > 0) {
    if (arr[ptr1] < arr[ptr2]) {
      temp.push(arr[ptr1++]);
      n1--;
    } else {
      temp.push(arr[ptr2++]);
      n2--;
    }
  }
  while (n1 > 0) {
    temp.push(arr[ptr1++]);
    n1--;
  }
  while (n2 > 0) {
    temp.push(arr[ptr2++]);
    n2--;
  }
  for (let i = 0; i < temp.length; i++) {
    arr[low + i] = temp[i];
  }
}
function sortArray(arr) {
  const n = arr.length;
  mergeSort(arr, 0, n - 1);
  return arr;
}

console.log(sortArray([4, 2, 1, 6, 7]));
console.log(sortArray([3, 2, 8, 5, 1, 4, 23]));
