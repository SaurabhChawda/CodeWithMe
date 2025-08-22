function getSecondLargestElementInArray(arr) {
  let largestElement = 0;
  let secondLargestElement = -1;
  for (let i = 0; i < arr.length; i++) {
    if (largestElement < arr[i]) {
      secondLargestElement = largestElement;
      largestElement = arr[i];
    } else if (arr[i] > secondLargestElement) {
      secondLargestElement = arr[i];
    }
  }
  return secondLargestElement;
}

console.log(getSecondLargestElementInArray([1, 6, 9, 4, 8]));
