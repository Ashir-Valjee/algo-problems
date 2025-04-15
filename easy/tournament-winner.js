function tournamentWinner(competitions, results) {
  // my code here
  //   loop through competitions array
  // append each team to a new object, getting a cumulative score
  // look for key with largest value

  const resultsObj = {};

  for (let i = 0; i < competitions.length; i++) {
    const homeTeam = competitions[i][0];
    const awayTeam = competitions[i][1];
    if (results[i] === 1) {
      if (homeTeam in resultsObj) {
        resultsObj[homeTeam] += 3;
      } else {
        resultsObj[homeTeam] = 3;
      }
    } else {
      if (awayTeam in resultsObj) {
        resultsObj[awayTeam] += 3;
      } else {
        resultsObj[awayTeam] = 3;
      }
    }
  }

  console.log(Object.keys(resultsObj));
  console.log(resultsObj);

  const winningTeam = Object.keys(resultsObj).reduce((a, b) =>
    resultsObj[a] > resultsObj[b] ? a : b
  );

  return winningTeam;
}

function tournamentWinner2(competitions, results) {
  // more efficient working with only one loop through
  const resultsObj = { "": 0 };
  let bestTeam = "";

  for (let i = 0; i < competitions.length; i++) {
    const homeTeam = competitions[i][0];
    const awayTeam = competitions[i][1];
    if (results[i] === 1) {
      if (homeTeam in resultsObj) {
        resultsObj[homeTeam] += 3;
      } else {
        resultsObj[homeTeam] = 3;
      }

      if (resultsObj[bestTeam] < resultsObj[homeTeam]) {
        bestTeam = homeTeam;
      }
    } else {
      if (awayTeam in resultsObj) {
        resultsObj[awayTeam] += 3;
      } else {
        resultsObj[awayTeam] = 3;
      }
      if (resultsObj[bestTeam] < resultsObj[awayTeam]) {
        bestTeam = awayTeam;
      }
    }
  }

  //   console.log(bestTeam);
  console.log(resultsObj);

  return bestTeam;
}

console.log(
  tournamentWinner2(
    [
      ["HTML", "C#"],
      ["C#", "Python"],
      ["Python", "HTML"],
    ],
    [0, 0, 1]
  )
);
