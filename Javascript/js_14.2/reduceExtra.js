// 1. Write a function called extractOnlyValue which accepts an
// array of objects and a key and returns a new array with
// the value of each object at the key
// function(key1)
// ==> aI t,v
const arrObj = [
  { key1: "a", key2: "b" },
  { key1: "v", key2: "r" },
];

function extractOnlyValue(arrOfObj, key) {
  const values = arrOfObj.reduce((arr, obj) => {
    arr.push(obj[key]);
    return arr;
  }, []);
  return values;
}
// console.log(extractOnlyValue(arrObj, "key1"));

// 2. Write a function called countOnlyVowels which accepts a
// string and returns an object with the keys as the vowel and
// the values as the number of times the vowel appears in
// the string. This function should be case insensitive so a
// lowercase and uppercase letter should count
function countOnlyVowels(string) {
  const strAsArr = string.split("");
  const vowels = ["a", "A", "e", "E", "i", "I", "O", "o", "u", "U"];
  const vowelsObj = strAsArr.reduce((obj, arrItem) => {
    if (vowels.includes(arrItem) && obj[arrItem] === undefined) {
      obj[arrItem] = 1;
    } else if (vowels.includes(arrItem) && obj[arrItem] !== undefined) {
      obj[arrItem] += 1;
    }
    return obj;
  }, {});
  return vowelsObj;
}
// console.log(countOnlyVowels("aAAbBcCeEhHiIoOjJ"));

// 3. Write a function called addKeyAndValue which accepts 3
// parameters an array of objects, key, and value, and
// returns the array of objects passed to it. with each object
// now including the key and value passed to the function
function addKeyAndValue(arrObj, key, value) {
  const newArr = arrObj.reduce((arr, obj) => {
    arr.push((obj[key] = value));
    return arr;
  }, []);
  return newArr;
}
console.log(
  addKeyAndValue(
    [
      { name: "Shelly", age: 28 },
      { name: "Sean", age: 24 },
    ],
    "isStudent",
    true
  )
);
