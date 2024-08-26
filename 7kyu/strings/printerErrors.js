function printerError(s) {
  let stringArr = s.toLowerCase().split("");
  let errorCounter = 0;

  stringArr.forEach((letter) => {
    switch (letter) {
      case "n":
        errorCounter++;
        break;
      case "o":
        errorCounter++;
        break;
      case "p":
        errorCounter++;
        break;
      case "q":
        errorCounter++;
        break;
      case "r":
        errorCounter++;
        break;
      case "s":
        errorCounter++;
        break;
      case "t":
        errorCounter++;
        break;
      case "u":
        errorCounter++;
        break;
      case "v":
        errorCounter++;
        break;
      case "w":
        errorCounter++;
        break;
      case "x":
        errorCounter++;
        break;
      case "y":
        errorCounter++;
        break;
      case "z":
        errorCounter++;
        break;
    }
  });

  return `${errorCounter}/${stringArr.length}`;
}

console.log(printerError("aaabbbbhaijjjm"));
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"));
