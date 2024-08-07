function removeSmallest(numbers) {
  function removeSmallest(numbers) {
    if (numbers.length === 0) return [];

    let minIndex = numbers.indexOf(Math.min(...numbers));

    return [...numbers.slice(0, minIndex), ...numbers.slice(minIndex + 1)];
  }
}
console.log(removeSmallest([5, 3, 2, 1, 4]));
console.log(removeSmallest([2, 2, 1, 2, 1]));
