function findEvenIndex(arr) {
  let numbersBeforeIndex = [];
  let numbersAfterIndex = [];
  let numberBeforeIndexSum;
  let numberAfterIndexSum;

  for (let i = 0; i <= arr.length - 1; i++) {
    numbersBeforeIndex = arr.slice(0, i);
    numbersAfterIndex = arr.slice(i + 1);

    numberBeforeIndexSum = numbersBeforeIndex.reduce(
      (acc, current) => acc + current,
      0
    );
    numberAfterIndexSum = numbersAfterIndex.reduce(
      (acc, current) => acc + current,
      0
    );

    if (numberBeforeIndexSum === numberAfterIndexSum) return i;
  }

  return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); //3
console.log(findEvenIndex([1, 100, 50, -51, 1, 1])); //1
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35])); //3
console.log(findEvenIndex([1, 2, 3, 4, 5, 6])); //-1
