function squareDigits(num) {
  let numToString = String(num).split("");

  let finalString = numToString.map((element) => {
    return Number(element * element);
  });

  return Number(finalString.join(""));
}
// }

console.log(squareDigits(9119));
console.log(squareDigits(3212));
console.log(squareDigits(0));
console.log(squareDigits(2112));

//community solution i liked

function squareDigits(num) {
  return Number(
    ("" + num)
      .split("")
      .map(function (val) {
        return val * val;
      })
      .join("")
  );
}
