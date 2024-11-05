function findFirstRecurring(arr) {
  const myObj = {};

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in myObj) {
      return arr[i];
    } else {
      myObj[arr[i]] = true;
    }
  }

  return undefined;
}

console.log(findFirstRecurring([2, 5, 5, 1, 2, 3, 5, 1, 2, 4])); // 2
