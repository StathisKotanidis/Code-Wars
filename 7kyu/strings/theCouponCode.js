function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  if (enteredCode !== correctCode) {
    return false;
  }

  // Convert the dates from string format to Date objects
  const current = new Date(currentDate);
  const expiration = new Date(expirationDate);

  // Check if the current date is on or before the expiration date
  return current <= expiration;
}

console.log(checkCoupon("123", "123", "September 5, 2014", "October 1, 2014"));
