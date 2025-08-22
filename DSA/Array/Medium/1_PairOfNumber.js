// Question:-  'https://leetcode.com/problems/two-sum/description'

var twoSum = function (nums, target) {
  const complementMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (complementMap.hasOwnProperty([target - nums[i]])) {
      return [complementMap[target - nums[i]], i];
    }
    complementMap[nums[i]] = i;
  }
  return [];
};
console.log(twoSum([2, 7, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
