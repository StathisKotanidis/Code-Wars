function findOdd(A) {
  let counter = {};
  if (A.length === 0 || A.length === 2) return "Invalid length";
  if (A.length === 1) return A[0];

  for (let num of A) {
    if (counter[num]) {
      counter[num]++;
    } else {
      counter[num] = 1;
    }
  }

  for (let key in counter) {
    if (counter[key] % 2 !== 0) {
      return Number(key);
    }
  }
  return null;
}

console.log(findOdd([1, 1, 2])); //2
console.log(findOdd([0, 1, 0, 1, 0])); //0
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); //4
