// same but in for loop
// function lengthCalculator(arrayOfStrings) {
//   let arrayOfLength = [];
//   for (let i = 0; i < arrayOfStrings.length; i++) {
//     arrayOfLength.push(arrayOfStrings[i].length);
//   }
//   return arrayOfLength;
// }
function lengthCalculator(arrayOfStrings) {
  let arrayOfLength = [];
  let i = 0;
  while (i < arrayOfStrings.length) {
    arrayOfLength.push(arrayOfStrings[i].length);
    i++;
  }
  return arrayOfLength;
}
console.log(lengthCalculator(["boo", "doooo", "hoo", "ro"]));

// Reflect on what solution you like better for this task: the for loop or the while loop?
// The for loop is more intuitive when looping according to length/index
