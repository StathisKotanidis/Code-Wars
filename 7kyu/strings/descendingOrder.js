function descendingOrder(n) {
  return Number(("" + n).split("").sort().reverse().join(""));
}

console.log(descendingOrder(42145));
console.log(descendingOrder(145263));
console.log(descendingOrder(0));
console.log(descendingOrder(1));
console.log(descendingOrder(111));
console.log(descendingOrder(1021));
