const averageCalculator = (scores) => {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
};

// const teamJohn = [89, 120, 103];
const teamJohn = [97, 134, 105];

const teamMike = [116, 94, 123];
// const teamMary = [97, 134, 105];
const teamMary = [89, 120, 103];

teamJohnAverage = averageCalculator(teamJohn);
teamMikeAverage = averageCalculator(teamMike);
teamMaryAverage = averageCalculator(teamMary);

if (teamJohnAverage > teamMikeAverage && teamJohnAverage > teamMaryAverage) {
  console.log("winner is John");
} else if (
  teamMikeAverage > teamJohnAverage &&
  teamMikeAverage > teamMaryAverage
) {
  console.log("winner is Mike");
} else if (
  teamMaryAverage > teamJohnAverage &&
  teamMaryAverage > teamMikeAverage
) {
  console.log("winner is Mary");
} else {
  console.log("draw");
}
