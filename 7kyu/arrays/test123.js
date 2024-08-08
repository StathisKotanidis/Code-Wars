var number = function (array) {
  let newArr = [];

  if (array.length === 0) {
    return [];
  } else {
    for (let i = 0; i < array.length; i++) {
      newArr.push(`${i + 1}: ${array[i]}`);
    }
  }

  return newArr;
};

console.log(number(["a", "b", "c"]));
console.log(number([]));

//Community solution

var number = function (array) {
  return array.map(function (line, index) {
    return index + 1 + ": " + line;
  });
};
