function digitize(n) {
  let x = n + "";
  return x.split("").reverse().map(Number);
}

console.log(digitize(35231));
