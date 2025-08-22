// 1752. Check if Array Is Sorted and Rotated
// https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/description/

function checkArraySorted(arr) {
  let isArraySorted = true;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      isArraySorted = false;
      break;
    }
  }
  return isArraySorted;
}

console.log(checkArraySorted([3, 4, 2, 1, 5, 6]));
console.log(checkArraySorted([6, 7, 8, 9, 10, 11]));
