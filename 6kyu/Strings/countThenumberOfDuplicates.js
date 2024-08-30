function duplicateCount(text) {
  let stringArray = text.toLowerCase().split(""); //getting an array of lowercase letters
  let finalArray = stringArray
    .filter((letter) => {
      return stringArray.indexOf(letter) != stringArray.lastIndexOf(letter);
    })
    .sort(); // getting only the letters that appear more than once and sorting them

  let counter = 1;

  if (finalArray.length === 0) {
    //empty array meaning no duplicates rso counter is set to 0
    counter = 0;
  }

  for (let i = 0; i < finalArray.length - 1; i++) {
    if (finalArray[i] !== finalArray[i + 1]) {
      counter += 1;
    } else if (finalArray[0] === finalArray[finalArray.length - 1]) {
      /*the array is sorted, meaning that if the first element is the same with the last then only 1 element exist so ocunter is set to 1 */
      counter = 1;
    }
  }

  return counter;
}

console.log(duplicateCount("abcde"));
console.log(duplicateCount("ababcde"));
console.log(duplicateCount("Indivisibility"));
console.log(duplicateCount("Indivisibilities"));
