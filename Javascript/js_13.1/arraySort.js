const numbers = [1, -5, 666, 2, 400, 11];
// 1. Sort the array of numbers from descending to ascending
// order.
const ascSort = numbers.sort((a, b) => a - b);
// 2. Sort the array of numbers from ascending to descending
// order.
const numbers2 = [1, -5, 666, 2, 400, 11];
const descSort = numbers2.sort((a, b) => b - a);

console.log(ascSort);
console.log(descSort);
