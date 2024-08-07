function XO(str) {
  let tempArr = str.toLowerCase().split("");
  let xCounter = 0;
  let oCounter = 0;
  tempArr.forEach((element) => {
    if (element === "x") {
      xCounter += 1;
    } else if (element === "o") {
      oCounter += 1;
    }
  });

  return xCounter === oCounter ? true : false;
}

console.log(XO("xo"));
console.log(XO("xxOo"));
console.log(XO("xxxm"));
console.log(XO("Oo"));

//Community solution

function XO(str) {
  return (
    str.toLowerCase().split("x").length === str.toLowerCase().split("o").length
  );
}
