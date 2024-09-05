function towerBuilder(nFloors) {
  let arr = [];
  let char = "*";

  for (let i = 0; i < nFloors; i++) {
    let stars = char.repeat(2 * i + 1);
    let spaces = " ".repeat(nFloors - i - 1);
    arr.push(spaces + stars + spaces);
  }

  return arr;
}

console.log(towerBuilder(3));
