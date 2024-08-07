function findLongest(array) {
  let max = String(array[0]);

  for (let i = 1; i < array.length; i++) {
    if (max.length < String(array[i]).length) {
      max = String(array[i]);
    } else {
      max = max;
    }
  }

  return Number(max);
}

console.log(findLongest([200, 10, 6000, 8000]));

//Community solution
function findLongest(array) {
  return array.reduce((res, curr) =>
    String(res).length < String(curr).length ? curr : res
  );
}
