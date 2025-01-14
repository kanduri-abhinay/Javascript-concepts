function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      j--;
    }
    arr[j + 1] = key;
  }

  return arr;
}

console.log(insertionSort([13, 46, 24, 52, 20, 9]));
console.log(insertionSort([5, 4, 3, 2, 1]));
