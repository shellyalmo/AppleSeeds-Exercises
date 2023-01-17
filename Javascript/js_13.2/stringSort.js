// a. Array of words
const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
// a.1. Sort the array of strings from descending to ascending
// order.
const ascSort = foods.sort();
// console.log(ascSort);
// a.2. Sort the array of strings from ascending to descending
// order.
const descSort = foods.sort().reverse();
// console.log(descSort);

// b. Let's sort an array of words that includes a word with an
// uppercase:
const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];
// b.1. Sort the array of strings from descending to ascending
// order.
const ascSortUpperCase = foodsWithUpperCase.sort(function (a, b) {
  return a.toLowerCase().localeCompare(b.toLowerCase());
});
// console.log(ascSortUpperCase);
// b.2. Sort the array of strings from ascending to descending
// order.
const descSortUpperCase = foodsWithUpperCase.sort(function (a, b) {
  return b.toLowerCase().localeCompare(a.toLowerCase());
});
// console.log(descSortUpperCase);

// c. Longest word
const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];
// c.1. Sort the array of strings from the longest word to the
// shortest word only using the sort function
const descWords = words.sort((a, b) => b.length - a.length);
console.log(descWords);
