// https://leetcode.com/problems/maximum-subarray/description/

var maxSubArray = function (nums) {
  let max = 0;
  let pointer = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] > max) {
      max = nums[j];
      pointer = j;
    }
  }
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
