function minMax(arr) {
  let newArr = [];
  arr.sort((a, b) => a - b); // this is how we sort an array numerically
  if (arr.length === 1) {
    newArr[0] = arr[0];
    newArr[1] = arr[0];
  } else {
    newArr[0] = arr[0];
    newArr[1] = arr[arr.length - 1];
  }

  return newArr;
}

console.log(minMax([2, 1, 4, 5, 3]));
console.log(minMax([5]));
// Community solution

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}
