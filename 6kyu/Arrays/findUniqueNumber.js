function findUniq(arr) {
  const frequencyMap = {};

  for (let num of arr) {
    if (frequencyMap[num]) {
      frequencyMap[num]++;
    } else {
      frequencyMap[num] = 1;
    }
  }

  for (let num in frequencyMap) {
    if (frequencyMap[num] === 1) {
      return Number(num);
    }
  }

  return null;
}

console.log(findUniq([1, 2, 3, 1, 3]));
