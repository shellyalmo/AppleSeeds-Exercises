// Write the following functions using the reduce built-in function.
// 1. max
const numbers = [2, 12, 34, 77, 55];
const maxNum = numbers.reduce((max, currVal) => {
  return Math.max(max, currVal);
});
console.log(maxNum);
// 2. the sum of even numbers
const evenNum = numbers.filter((num) => num % 2 === 0);
const evenSum = evenNum.reduce((accumulator, currentVal) => {
  return accumulator + currentVal;
});
console.log(evenSum);
// 3. average
const avg = numbers.reduce((accumulator, currentVal) => {
  return (accumulator + currentVal) / numbers.length;
});

console.log(avg);
