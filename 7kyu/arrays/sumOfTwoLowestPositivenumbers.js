function sumTwoSmallestNumbers(numbers) {
  let sortedArray = [];

  while (numbers.length !== 0) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (min > numbers[i]) {
        min = numbers[i];
      }
    }
    sortedArray.push(min);
    numbers = numbers.filter((item) => item !== min);
  }
  return sortedArray[0] + sortedArray[1];
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]));

//Community solution

function sumTwoSmallestNumbers(numbers) {
  numbers = numbers.sort(function (a, b) {
    return a - b;
  });
  return numbers[0] + numbers[1];
}
