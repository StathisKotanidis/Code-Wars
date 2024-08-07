String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map(function (word) {
      return word.replace(word[0], word[0].toUpperCase());
    })
    .join(" ");
};

console.log(capEveryWord("How can mirrors be real if our eyes aren't real"));

// Community solution

String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};
