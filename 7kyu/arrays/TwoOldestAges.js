function twoOldestAges(ages) {
  const result = [];
  ages.sort((a, b) => a - b);

  result.push(ages[ages.length - 2]);
  result.push(ages[ages.length - 1]);

  return result;
}

console.log(twoOldestAges([1, 2, 10, 8])); // [8,10]
console.log(twoOldestAges([1, 5, 87, 45, 8, 8])); // [45,87]
console.log(twoOldestAges([1, 3, 10, 0])); // [3,10]

//OR

// function twoOldestAges(ages){
//     return ages.sort(function(a,b){return a-b;}).slice(-2);
//   }
