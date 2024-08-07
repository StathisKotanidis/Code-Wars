function dnaStrand(dna) {
  return dna
    .toUpperCase()
    .split("")
    .map((letter) => {
      if (letter === "A") {
        return letter.replace("A", "T");
      } else if (letter === "T") {
        return letter.replace("T", "A");
      } else if (letter === "G") {
        return letter.replace("G", "C");
      } else if (letter === "C") {
        return letter.replace("C", "G");
      }
    })
    .join("");
}

console.log(dnaStrand("AAAA"));
console.log(dnaStrand("ATTGC"));
console.log(dnaStrand("GTAT"));

//Community Solution
function DNAStrand(dna) {
  return dna
    .split("")
    .map(function (v) {
      return { A: "T", T: "A", C: "G", G: "C" }[v];
    })
    .join("");
}
