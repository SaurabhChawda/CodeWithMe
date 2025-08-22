/* Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 

Constraints:

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
0 <= k <= 105

*/

function getRotatedArray(arr, k) {
  for (let i = 0; i < k; i++) {
    let arrLastValue = arr[arr.length - 1];
    for (let j = arr.length - 1; j > 0; j--) {
      arr[j] = arr[j - 1];
    }
    arr[0] = arrLastValue;
  }
  return arr;
}

function getRotatedArray(arr, k) {
  let d = k % arr.length;
  let tempArr = [];

  for (let i = 0; i < arr.length - d; i++) {
    tempArr.push(arr[i]);
  }
  for (let i = 0; i < d; i++) {
    arr[i] = arr[tempArr.length + i];
  }
  for (let i = 0; i < tempArr.length; i++) {
    arr[i + d] = tempArr[i];
  }
  return arr;
}
console.log(getRotatedArray([1, 2, 3, 4, 5, 6, 7], 3));
console.log(getRotatedArray([-1, -100, 3, 99], 2));
