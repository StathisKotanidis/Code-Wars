function getSum(array, p) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += Number(array[i]) ** p;
    p++;
  }

  return sum;
}

function digPow(n, p) {
  let numToString = n + "";
  let stringToArray = numToString.split("");
  let sum = getSum(stringToArray, p);

  const k = sum / n;

  // Return k if it's an integer, otherwise return -1
  return Number.isInteger(k) ? k : -1;
}

console.log(digPow(695, 2)); // 2
console.log(digPow(89, 1)); // 1
console.log(digPow(92, 1)); // -1
console.log(digPow(46288, 3)); // 51
