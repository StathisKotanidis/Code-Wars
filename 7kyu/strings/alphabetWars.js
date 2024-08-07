function alphabetWar(fight) {
  let leftCounter = 0;
  let rightCounter = 0;
  fight.split("").forEach((element) => {
    switch (element) {
      case "w":
        leftCounter += 4;
        break;
      case "p":
        leftCounter += 3;
        break;
      case "b":
        leftCounter += 2;
        break;
      case "s":
        leftCounter += 1;
        break;
      case "m":
        rightCounter += 4;
        break;
      case "q":
        rightCounter += 3;
        break;
      case "d":
        rightCounter += 2;
        break;
      case "z":
        rightCounter += 1;
        break;
    }
  });

  if (leftCounter > rightCounter) {
    return "Left sude wins!";
  } else if (rightCounter > leftCounter) {
    return "Right side wins!";
  } else {
    return "let's fight again";
  }
}

console.log(alphabetWar("z"));
console.log(alphabetWar("zdqmwpbs"));
console.log(alphabetWar("zzzzs"));
console.log(alphabetWar("wwwwww"));
console.log(alphabetWar("wwwmmm"));
