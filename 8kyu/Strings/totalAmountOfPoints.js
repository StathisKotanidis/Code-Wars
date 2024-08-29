function points(games) {
  let totalPoints = 0;

  for (let i = 0; i < games.length; i++) {
    let { ourTeam, opponentsTeam } = getEachScore(games[i]); // Destructure the returned object

    if (ourTeam > opponentsTeam) {
      totalPoints += 3;
    } else if (ourTeam === opponentsTeam) {
      totalPoints += 1;
    } else {
      totalPoints += 0;
    }
  }

  return totalPoints;
}

function getEachScore(string) {
  let separatorIndex = string.indexOf(":");
  let ourTeam = Number(string.slice(0, separatorIndex));
  let opponentsTeam = Number(string.slice(separatorIndex + 1));

  return { ourTeam, opponentsTeam };
}

console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
);
