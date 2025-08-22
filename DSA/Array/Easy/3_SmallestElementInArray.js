function getSmallestElementInArray(arr) {
  let smallestElemet = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallestElemet) {
      smallestElemet = arr[i];
    }
  }
  return smallestElemet;
}
console.log(getSmallestElementInArray([5, 2, 9, 1, 8, 9]));
