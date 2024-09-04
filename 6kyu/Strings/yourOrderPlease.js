function order(words) {
  if (!words) return "";

  let orderedArray = [];
  let tempArray = words.split(" ");
  let startingIndex = 1;

  while (orderedArray.length < tempArray.length) {
    for (let i = 0; i < tempArray.length; i++) {
      if (tempArray[i].includes(startingIndex)) {
        orderedArray.push(tempArray[i]);
        startingIndex++;
      }
    }
  }

  return orderedArray.join(" ");
}

console.log(order("is2 Thi1s T4est 3a")); // "Thi1s is2 3a T4est"
console.log(order("4of Fo1r pe6ople g3ood th5e the2")); // "Thi1s is2 3a T4est"
console.log(order("")); // ""

//Community Solution

function order(words) {
  let array = words.split(" ");
  let sortedArray = [];
  for (i = 0; i <= array.length; i++) {
    for (j = 0; j < array.length; j++) {
      if (array[j].indexOf(i) >= 0) {
        sortedArray.push(array[j]);
      }
    }
  }
  return sortedArray.join(" ");
}
