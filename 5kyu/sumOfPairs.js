function sumOfPairs(ints, s) {
  const map = {
    pairs: [],
    indexes: [],
  };

  for (let i = 0; i <= ints.length; i++) {
    let complement = s - ints[i];
    if (map[complement] !== undefined) {
      map.pairs.push([complement, ints[i]]);
    }
    map[ints[i]] = true;
  }

  if (map.pairs.length === 0) return undefined;
  if (map.pairs.length === 1) return map.pairs[0];
  if (map.pairs.length > 1) return map.pairs[0];
}

console.log(sumOfPairs([0, 0, -2, 3], 2)); // undefined
console.log(sumOfPairs([11, 3, 7, 5], 10)); // [3,7]
console.log(sumOfPairs([4, 3, 2, 3, 4], 6)); // [4,2]
