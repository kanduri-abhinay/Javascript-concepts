function shuffle(arr) {
  const n = arr.length;
  for (let curr = n - 1; curr > 0; curr--) {
    const randomIndex = Math.floor(Math.random() * (curr + 1));
    [arr[curr], arr[randomIndex]] = [arr[randomIndex], arr[curr]];
  }
  return arr;
}
const countMap = new Map();
for (let i = 0; i < 100000; i++) {
  const result = shuffle([1, 2, 3]).toString();
  countMap.set(result, (countMap.get(result) ?? 0) + 1);
}
console.log(countMap);
