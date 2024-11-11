function sortArray(array) {
  const myObj = {
    evens: [],
    evensIndexes: [],
    odds: [],
    oddsIndexes: [],
    finalArray: [],
  };
  myObj.finalArray = new Array(array.length).fill(null); //O(1)

  for (let i = 0; i < array.length; i++) {
    //O(n)
    if (array[i] % 2 === 0) {
      myObj.evens.push(array[i]);
      myObj.evensIndexes.push(i);
    } else {
      myObj.odds.push(array[i]);
      myObj.oddsIndexes.push(i);
    }
  }
  myObj.odds.sort((a, b) => a - b); // O(1)

  for (let i = 0; i < myObj.evens.length; i++) {
    //O(n)
    myObj.finalArray[myObj.evensIndexes[i]] = myObj.evens[i];
  }

  for (let i = 0; i < myObj.odds.length; i++) {
    //O(n)
    myObj.finalArray[myObj.oddsIndexes[i]] = myObj.odds[i];
  }

  return myObj.finalArray; //O(1)
}

//console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
//console.log(sortArray([1, 11, 2, 8, 3, 4, 5]));
