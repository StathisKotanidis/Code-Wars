function twoSum(arr, target) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    let x = target - arr[i];

    if (map.has(x)) return [map.get(x), i];

    map.set(arr[i], i);
  }

  return [];
}

console.log(twoSum([2, 7, 11, 9], 9)); //[0,1]
