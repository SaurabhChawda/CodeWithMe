/*
Problem statement
Given an array ‘arr’ of size ‘n’ find the largest element in the array.

Example:

Input: 'n' = 5, 'arr' = [1, 2, 3, 4, 5]
Output: 5

Explanation: From the array {1, 2, 3, 4, 5}, the largest element is 5.

Sample input 1: [4 7 8 6 7 6]
Sample output 1: 8

Explanation of sample input 1:
The answer is 8.
From {4 7 8 6 7 6}, 8 is the largest element.

Sample input 2: [5 9 3 4 8 4 3 10]
Sample output 2: 10

Expected Time Complexity:
O(n), Where ‘n’ is the size of an input array ‘arr’.
Constraints :
1 <= 'n' <= 10^5
1 <= 'arr[i]' <= 10^9

Time Limit: 1 sec

*/

function getLargestElementInArray(arr) {
  let largestElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (largestElement < arr[i]) {
      largestElement = arr[i];
    }
  }
  return largestElement;
}

console.log(getLargestElementInArray([1, 6, 9, 4, 5]));
