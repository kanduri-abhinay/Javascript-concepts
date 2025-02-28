const arr1 = [4, 1, 7, 9, 3];
const arr2 = [4, 6, 2, 5, 7, 9, 1, 3];

function partition(arr, low, high) {
  let i = low;
  let j = high;
  const pivot = arr[low];
  while (i < j) {
    while (i <= high && arr[i] <= pivot) i++;
    while (j >= low && arr[j] > pivot) j--;
    if (i < j) [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  [arr[low], arr[j]] = [arr[j], arr[low]];
  return j;
}
function quickSort(arr, low, high) {
  if (low < high) {
    const pIndex = partition(arr, low, high);
    quickSort(arr, low, pIndex - 1);
    quickSort(arr, pIndex + 1, high);
  }
}
function sort(arr) {
  quickSort(arr, 0, arr.length - 1);
}

sort(arr1);
sort(arr2);
console.log(arr1);
console.log(arr2);
