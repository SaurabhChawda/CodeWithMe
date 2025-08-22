function removeDuplicates(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      arr[i + 1] = arr[j];
      i++;
    }
  }
  return arr;
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 3, 3, 4, 4]));
