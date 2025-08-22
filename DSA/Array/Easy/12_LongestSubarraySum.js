function getLongestSubarrysumLen(arr, k) {
  let subArray = [];
  for (let i = 0; i < arr.length; i++) {
    let currentElementSum = 0;
    for (let j = i; j < arr.length; j++) {
      currentElementSum += arr[j];
      if (currentElementSum === k) {
        let currentSubArray = arr.slice(i, j + 1);
        if (currentSubArray.length > subArray.length) {
          subArray = currentSubArray;
        }
      }
    }
  }
  return subArray.length;
}
console.log(getLongestSubarrysumLen([2, 3, 5], 5));
console.log(getLongestSubarrysumLen([2, 3, 3, 1, 9], 10));
console.log(getLongestSubarrysumLen([-1, 1, 1], 1));
