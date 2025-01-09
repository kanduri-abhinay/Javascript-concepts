class PriorityQueue {
  constructor(comparator = (a, b) => a - b) {
    this._heap = [];
    this._comparator = comparator;
  }
  parent(index) {
    return Math.floor((index - 1) / 2);
  }
  leftChildIndex(index) {
    return 2 * index + 1;
  }
  rightChildIndex(index) {
    return 2 * index + 2;
  }
  swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  heapify(index) {
    let swappedIndex = index;
    const leftChildIndex = this.leftChildIndex(index);
    const rightChildIndex = this.rightChildIndex(index);
    let l = this._heap[leftChildIndex];
    let r = this._heap[rightChildIndex];
    const n = this.size();

    if (
      leftChildIndex < n &&
      this._comparator(l, this._heap[swappedIndex]) < 0
    ) {
      swappedIndex = leftChildIndex;
    }
    if (
      rightChildIndex < n &&
      this._comparator(r, this._heap[swappedIndex]) < 0
    ) {
      swappedIndex = rightChildIndex;
    }
    if (swappedIndex != index) {
      this.swap(this._heap, index, swappedIndex);
      this.heapify(swappedIndex);
    }
  }
  add(element) {
    this._heap.push(element);
    let currIndex = this._heap.length - 1;
    while (currIndex > 0) {
      const parentIndex = this.parent(currIndex);
      const curr = this._heap[currIndex];
      const parent = this._heap[parentIndex];
      if (this._comparator(curr, parent) < 0) {
        this.swap(this._heap, currIndex, parentIndex);
        currIndex = parentIndex;
      } else {
        break;
      }
    }
  }
  poll() {
    let n = this.size();
    let result;
    if (n > 0) {
      this.swap(this._heap, 0, n - 1);
      result = this._heap.pop();
      if (n > 1) this.heapify(0);
    }
    return result;
  }
  peek() {
    return this._heap[0];
  }
  size() {
    return this._heap.length;
  }
}

const pq = new PriorityQueue((a, b) => a - b);
pq.add(5);
pq.add(2);
pq.add(1);

console.log(pq.peek());
// so this gives us 1
console.log(pq.poll());
// 1
// 1 is removed, 2 and 5 are left
pq.add(7);
console.log(pq.peek());
// 2 is the smallest now, this returns 2
console.log(pq.poll());
// 2
// 2 is removed, only 5 is left
