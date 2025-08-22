function getSecondSmallestElementFromArray(arr) {
  let smallestElement = arr[0];
  let secondSmallestElement = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallestElement) {
      secondSmallestElement = smallestElement;
      smallestElement = arr[i];
    } else if (arr[i] < secondSmallestElement) {
      secondSmallestElement = arr[i];
    }
  }
  return secondSmallestElement;
}

console.log(getSecondSmallestElementFromArray([9, 4, 7, 3, 8, 2, 9, 1, 0]));
