function nbYear(p0, percent, aug, p) {
  let yearCounter = 0;
  while (p0 < p) {
    p0 += p0 * (percent / 100) + aug;
    p0 = Math.floor(p0);
    yearCounter++;
  }
  return yearCounter;
}

console.log(nbYear(1000, 2, 50, 1200));
console.log(nbYear(1500000, 2.5, 10000, 2000000));
console.log(nbYear(1000, 2.0, 50, 1214));
