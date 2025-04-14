/*

Suppose we have an array of items - A, and another array of indexes in numbers - B
const A = ['A', 'B', 'C', 'D', 'E', 'F']
const B = [1,   5,   4,   3,   2,   0]
You need to reorder A, so that the A[i] is put at index of B[i], which means B is the new index for each item of A.

For above example A should be modified inline to following
['F', 'A', 'E', 'D', 'C', 'B']
The input are always valid.

follow-up

It is fairly easy to do this by using extra O(n) space, could you solve it with O(1) space?

*/

function sort(A, B) {
  const n = A.length;
  for (let i = 0; i < n; i++) {
    let currIndex = i;
    let currItem = A[i];
    let destiny = B[currIndex];
    while (destiny >= 0) {
      const tempItem = A[destiny];
      A[destiny] = currItem;
      currItem = tempItem;
      B[currIndex] = -1 * (destiny + 1);
      currIndex = destiny;
      destiny = B[destiny];
    }
  }
  for (let i = 0; i < n; i++) {
    B[i] = -1 * B[i] - 1;
  }
}

const A = ["A", "B", "C", "D", "E", "F"];
const B = [1, 5, 4, 3, 2, 0];

sort(A, B);

console.log(A, B);
