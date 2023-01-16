"use strict";
// 1. Write a function called doubleValues which accepts an array of integers and returns a new array with all the
// values in the array passed to the function doubled.
const ints = [20, 21, 22, 23, 24, 25];
const doubled = ints.map(function doubleValues(int) {
  return int * 2;
});
console.log(doubled);

// 2. Write a function called onlyEvenValues which accepts an
// array and returns a new array with only the even values in
// the array passed to the function.
const even = [];
ints.forEach(function onlyEvenValues(int) {
  if (int % 2 === 0) {
    even.push(int);
  }
});
console.log(even);

// 3. Write a function called showFirstAndLast which accepts
// an array as an argument and returns a new array with only
// the first and last elements from the function’s argument
// array. The returned array should only contain elements
// that are strings.
function showFirstAndLast(arr) {
  const firstLastStrings = [];
  arr.forEach(function (item) {
    if (typeof item === "string") {
      firstLastStrings.push(item);
    }
    return [firstLastStrings[0]];
  });
}

console.log(showFirstAndLast([1, "two", "three", 3]));
