function alternate(n, firstValue, secondValue) {
  let result = [];
  let value = firstValue;
  for (let i = 0; i < n; i++) {
    result.push(value);
    value === firstValue ? (value = secondValue) : (value = firstValue);
  }
  return result;
}

console.log(alternate(5, true, false));
