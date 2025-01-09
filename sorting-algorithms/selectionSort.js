function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  console.log(arr);
}

selectionSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
selectionSort([38, 31, 20, 14, 30]);
