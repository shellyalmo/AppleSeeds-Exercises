// Write two functions that use Promises that you can chain.
// The first function, makeAllCaps(), will take in an array of words
// and capitalize them, and then the second function, sortWords(),
// will sort the words in alphabetical order. If the array contains
// anything but strings, it should throw an error.
// Call the functions once with an array of words and call it once
// with an array that includes at least one item that is not a word.
// Print the resolve and reject in a .then, .catch.

function makeAllCaps(wordsArray) {
  return new Promise((resolve, reject) => {
    let capitalizedArray = [];
    wordsArray.forEach((word) => {
      if (typeof word !== "string") {
        reject(`${word} is not a string!}`);
      } else {
        capitalizedArray.push(word.toUpperCase());
        resolve(capitalizedArray);
      }
    });
  });
}

function sortWords(capitalizedWordsArray) {
  return new Promise((resolve) => {
    resolve(capitalizedWordsArray.sort());
  });
}

makeAllCaps(["hi", "bye", "why"])
  .then((result) => {
    console.log(sortWords(result));
  })
  .catch((error) => console.log(error));

makeAllCaps([2, "bye", "why"])
  .then((result) => {
    console.log(sortWords(result));
  })
  .catch((error) => console.log(error));
