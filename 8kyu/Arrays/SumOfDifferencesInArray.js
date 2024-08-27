function sumOfDifferences(arr) {
  arr.sort((a, b) => a - b).reverse();
  let sum = 0;

  if (arr.length === 0 || arr.length === 1) {
    return 0;
  } else {
    for (let i = 0; i < arr.length - 1; i++) {
      sum += arr[i] - arr[i + 1];
    }
  }
  return sum;
}

console.log(sumOfDifferences([2, 1, 10]));
console.log(sumOfDifferences([2]));
