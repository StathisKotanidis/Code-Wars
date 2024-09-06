function isPangram(string) {
  const alphabet = [];

  const lowerCaseString = string.toLowerCase();

  for (let i = 0; i < lowerCaseString.length; i++) {
    if (lowerCaseString[i] >= "a" && lowerCaseString[i] <= "z") {
      if (!alphabet.includes(lowerCaseString[i])) {
        alphabet.push(lowerCaseString[i]);
      }
    }
  }

  //console.log(alphabet.sort());
  return alphabet.sort().length === 26 ? true : false;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
