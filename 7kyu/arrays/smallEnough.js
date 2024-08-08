function smallEnough(a, limit) {
  let newArr = a.filter((element) => element <= limit);

  return newArr.length === a.length ? true : false;
}

console.log(smallEnough([66, 101], 200));
console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120));
