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
  });
  return [firstLastStrings[0], firstLastStrings[firstLastStrings.length - 1]];
}
console.log(showFirstAndLast([1, "two", "three", 3]));

// 4. Write a function called vowelCount which accepts a string
// as an argument. The function should return an object
// which has the count of the number of vowels that are in
// the string. The key should be the vowel and the value
// should be the count. e.g. {a:3, o:2,u:4}. Should not be
// case-sensitive.
function vowelCount(string) {
  const realVowels = ["a", "e", "i", "o", "u"];
  const vowels = {};
  [...string].forEach((letter) => {
    if (
      realVowels.includes(letter.toLowerCase()) &&
      vowels[letter.toLowerCase()] === undefined
    ) {
      vowels[letter.toLowerCase()] = 1;
    } else if (
      realVowels.includes(letter.toLowerCase()) &&
      vowels[letter.toLowerCase()] !== undefined
    ) {
      vowels[letter.toLowerCase()] += 1;
    }
  });
  return vowels;
}
console.log(vowelCount("hi I am Shelly"));

// 5. Write a function capitalize that takes a string as an
// argument and will return the whole string capitalized.
function capitalizer(string) {
  const letters = [];
  [...string].forEach((letter) => {
    letters.push(letter.toUpperCase());
  });
  return letters.join("");
}
console.log(capitalizer("hello worlD"));

// 6. Write a function called shiftLetters that takes a string as an argument and return’s an encoded string with each letter
// shifted down the alphabet by one.
function shiftLetters(string) {
  let encoded = "";
  [...string].forEach((letter) => {
    let charCode = letter.charCodeAt(letter[0]) - 1;
    encoded += String.fromCharCode(charCode);
  });
  return encoded;
}
console.log(shiftLetters("bcd"));

//7. Create a function called swapCase that takes a string as
// an argument and returns a string that every other word is
// capitalized. (you can use the fifth’s exercise's function to
// keep it dry)
function swapCase(string) {
  let splitted = string.split(" ");
  let capitalizedEveryOther = [];
  splitted.forEach((word, index) => {
    if (index % 2 === 0) {
      capitalizedEveryOther.push(capitalizer(word));
    } else {
      capitalizedEveryOther.push(word);
    }
  });
  return capitalizedEveryOther.join(" ");
}
console.log(swapCase("hi there how are you?"));
