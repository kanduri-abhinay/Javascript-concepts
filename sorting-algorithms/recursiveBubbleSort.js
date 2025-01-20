function recursiveBubbleSort(arr, n) {
  if (n <= 1) return arr;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  }
  return recursiveBubbleSort(arr, n - 1);
}
console.log(recursiveBubbleSort([13, 46, 24, 52, 20, 9], 6));
console.log(recursiveBubbleSort([5, 4, 3, 2, 1], 5));
