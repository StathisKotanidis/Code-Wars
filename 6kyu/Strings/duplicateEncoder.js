function duplicateEncode(word) {
  let finalString = "";
  let lowerCaseWord = word.toLowerCase();

  for (let i = 0; i < lowerCaseWord.length; i++) {
    if (
      lowerCaseWord.indexOf(lowerCaseWord[i]) ===
      lowerCaseWord.lastIndexOf(lowerCaseWord[i])
    ) {
      finalString += "(";
    } else {
      finalString += ")";
    }
  }

  return finalString;
}

console.log(duplicateEncode("recede"));
console.log(duplicateEncode("din"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));
