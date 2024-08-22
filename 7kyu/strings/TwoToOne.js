function longest(s1, s2) {
  let oneSingleString = s1 + s2;

  return oneSingleString
    .split("")
    .sort()
    .filter((char, index, arr) => arr.indexOf(char) === index)
    .join("");
}

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
