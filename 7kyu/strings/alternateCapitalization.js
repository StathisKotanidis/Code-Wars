function capitalize(s) {
  let evenString = s
    .split("")
    .map((letter, i) => {
      if (i % 2 === 0) {
        return letter.replace(letter, letter.toUpperCase());
      } else {
        return letter;
      }
    })
    .join("");

  let oddString = s
    .split("")
    .map((letter, i) => {
      if (i % 2 === 1) {
        return letter.replace(letter, letter.toUpperCase());
      } else {
        return letter;
      }
    })
    .join("");

  return [evenString, oddString];
}

console.log(capitalize("abcdef"));

//Community Solution
function capitalize(s) {
  const odd = s
    .split("")
    .map((l, i) => (i % 2 !== 0 ? l.toUpperCase() : l))
    .join("");
  const even = s
    .split("")
    .map((l, i) => (i % 2 === 0 ? l.toUpperCase() : l))
    .join("");
  return [even, odd];
}
