// 1. The world population is 7900 million people. Create
// a function declaration called 'percentageOfWorld1'
// which receives a 'population' value, and returns the
// percentage of the world population that the given
// population represents. For example, China has
// 1441 million people, so it's about 18.2% of the world
// population.
function percentageOfWorld1(population) {
  const worldPopulation = 7900000000;
  return (population / worldPopulation) * 100;
}
const china = percentageOfWorld1(1441000000);
console.log(china);

const us = percentageOfWorld1(331900000);
console.log(us);

const russia = percentageOfWorld1(143400000);
console.log(russia);

// Create a function expression that does the exact
// same thing, called 'percentageOfWorld2', and also
// call it with 3 country populations (can be the same
// populations)
const percentageOfWorld2 = function (population) {
  const worldPopulation = 7900000000;
  return (population / worldPopulation) * 100;
};

const China = percentageOfWorld2(1441000000);
console.log(china);

const US = percentageOfWorld2(331900000);
console.log(us);

const Russia = percentageOfWorld2(143400000);
console.log(russia);