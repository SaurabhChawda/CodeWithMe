// https://leetcode.com/problems/sort-colors/description/

// var sortColors = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       let currentNumber = nums[i];
//       if (nums[i] > nums[j]) {
//         nums[i] = nums[j];
//         nums[j] = currentNumber;
//       }
//     }
//   }
//   return nums;
// };


console.log(sortColors([2, 0, 1, 2, 1, 0]));
console.log(sortColors([2, 0, 1]));
