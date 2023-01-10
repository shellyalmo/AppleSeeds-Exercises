const populations = [9000000, 10000000, 12000000, 123000000];

function populationPercentages(popularityArray) {
  let percentages = [];
  for (let i = 0; i < popularityArray.length; i++) {
    percentages.push((popularityArray[i] / 7900000000) * 100);
  }
  return percentages
}

console.log(populationPercentages(populations))