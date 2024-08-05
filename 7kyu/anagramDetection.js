var isAnagram = function (test, original) {
  return test.toLowerCase().trim(" ").split("").sort().join("") ===
    original.toLowerCase().trim(" ").split("").sort().join("")
    ? true
    : false;
};

console.log(isAnagram("foefet", "toffee"));
console.log(isAnagram("Buckethead", "DeathCubeK"));
console.log(isAnagram("Twoo", "WooT"));
console.log(isAnagram("dumble", "bumble"));
console.log(isAnagram("ound", "round"));
