function digits(n) {
  return String(n).split("").length;
}

console.log(digits(0));
console.log(digits(66));
console.log(digits(12345));
console.log(digits(9007199254740991));
