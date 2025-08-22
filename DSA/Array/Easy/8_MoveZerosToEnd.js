/*  
283. Move Zeroes
Easy
Topics
Companies
Hint
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
*/

// function moveZerosToEnd(arr) {
//   let tempArr = [];
//   let zerosCount = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       zerosCount += 1;
//     } else {
//       tempArr.push(arr[i]);
//     }
//   }
//   for (let i = 0; i < arr.length - zerosCount; i++) {
//     arr[i] = tempArr[i];
//   }
//   for (let i = arr.length - zerosCount; i < arr.length; i++) {
//     arr[i] = 0;
//   }
//   return arr;
// }
// console.log(moveZerosToEnd([0, 1, 0, 3, 12]));

function moveZerosToEnd(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== 0) {
      arr[i] = arr[j];
      arr[j] = 0;
      i++;
    }
  }
  return arr;
}
console.log(moveZerosToEnd([0, 1, 0, 0, 3, 12]));
