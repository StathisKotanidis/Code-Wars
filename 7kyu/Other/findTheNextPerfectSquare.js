function findNextSquare(sq) {
  let perfectSqr = Math.ceil(Math.sqrt(sq)) * Math.ceil(Math.sqrt(sq));
  let nextPerfectSqr = Math.sqrt(sq) + 1;

  return perfectSqr === sq ? nextPerfectSqr * nextPerfectSqr : -1;
}

console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(319225));
console.log(findNextSquare(155));
