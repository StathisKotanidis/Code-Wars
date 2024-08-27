function findNeedle(haystack) {
  let index = haystack.findIndex((word) => word === "needle");
  return `found the needle at position ${index}`;
}

console.log(
  findNeedle([
    "3",
    "123124234",
    undefined,
    "needle",
    "world",
    "hay",
    2,
    "3",
    true,
    false,
  ])
);
