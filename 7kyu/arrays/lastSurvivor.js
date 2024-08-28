function lastSurvivor(letters, coords) {
  let stringArray = letters.split("");

  for (let i = 0; i < coords.length; i++) {
    stringArray.splice(coords[i], 1);
    console.log(`Array after the ${i + 1} splicing: [${stringArray}]`);
  }

  return stringArray.join("");
}

console.log(lastSurvivor("zbk", [0, 1]));
