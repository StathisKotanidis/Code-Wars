let solution = function (busStops) {
  let peopleWhoEntered = 0;
  let peopleWhoLeft = 0;

  for (let i = 0; i < busStops.length; i++) {
    peopleWhoEntered += busStops[i][0];
    peopleWhoLeft += busStops[i][1];
  }

  return peopleWhoEntered - peopleWhoLeft;
};

console.log(
  solution([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
);
