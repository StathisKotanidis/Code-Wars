function gimme(triplet) {
  let min = triplet[0];
  let max = triplet[0];

  for (let i = 1; i < triplet.length; i++) {
    if (min > triplet[i]) {
      min = triplet[i];
    }

    if (max < triplet[i]) {
      max = triplet[i];
    }
  }
  for (let i = 0; i < triplet.length; i++) {
    if (triplet[i] !== min && triplet[i] !== max) {
      return triplet.indexOf(triplet[i]);
    }
  }
}

console.log(gimme([2, 3, 1]));

//Community solution

// const gimme = function (arr) {
//   return arr.indexOf([...arr].sort((x, y) => x > y)[1]);
// };
