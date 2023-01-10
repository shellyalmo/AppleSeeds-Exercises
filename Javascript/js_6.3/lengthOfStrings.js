function lengthCalculator(arrayOfStrings) {
  let arrayOfLength = [];
  for (let i = 0; i < arrayOfStrings.length; i++) {
    arrayOfLength.push(arrayOfStrings[i].length);
  }
  return arrayOfLength;
}

console.log(lengthCalculator(["boo", "doooo", "hoo", "ro"]));
