function alphabetPosition(text) {
  let stringToNumber = "";
  for (let i = 0; i < text.length; i++) {
    let char = text[i].toLowerCase();
    if (char >= "a" && char <= "z") {
      stringToNumber += char.charCodeAt(0) - 96 + " ";
    }
  }

  return stringToNumber.trim();
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
