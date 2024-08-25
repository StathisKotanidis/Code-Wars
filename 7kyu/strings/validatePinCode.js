function validatePIN(pin) {
  const allowedCharacters = "0123456789";

  const allValid = pin
    .split("")
    .every((char) => allowedCharacters.includes(char));

  if ((pin.length === 6 || pin.length === 4) && allValid) {
    return true;
  } else {
    return false;
  }
}

console.log(validatePIN("1234567"));
console.log(validatePIN("123456"));
