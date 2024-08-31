function lastSurvivor(letters, coords) {
  let stringArray = letters.split("");

  for (let i = 0; i < coords.length; i++) {
    stringArray.splice(coords[i], 1);
  }

  return stringArray.join("");
}

console.log(lastSurvivor("zbk", [0, 1]));
