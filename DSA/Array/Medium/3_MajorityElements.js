// https://leetcode.com/problems/majority-element/

var majorityElement = function (nums) {
  let numberCount = {};
  let majorNumberCount = 0;
  let majorNumber;
  for (let i = 0; i < nums.length; i++) {
    if (numberCount.hasOwnProperty(nums[i])) {
      numberCount[nums[i]] += 1;
    } else {
      numberCount[nums[i]] = 1;
    }
    if (majorNumberCount < numberCount[nums[i]]) {
      majorNumberCount = numberCount[nums[i]];
      majorNumber = nums[i];
    }
  }
  return majorNumber;
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
