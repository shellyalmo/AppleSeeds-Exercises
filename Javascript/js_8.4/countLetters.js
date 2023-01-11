const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

function lettersCounter(wordsArray) {
  let counterObj = {};
  for (const word of wordsArray) {
    for (const letter of word.toLowerCase()) {
      if (!Object.keys(counterObj).includes(letter)) {
        counterObj[letter] = 1;
      } else if (Object.keys(counterObj).includes(letter)) {
        counterObj[letter]++;
      }
    }
  }
  delete counterObj[" "];
  let highest = Math.max(...Object.values(counterObj));
  return [counterObj,Object.keys(counterObj).find((key) => counterObj[key] === highest)];
}

console.log(lettersCounter(array));
