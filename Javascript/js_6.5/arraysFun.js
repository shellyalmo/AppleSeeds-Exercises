// 1. Fill an array with 100 of the same object using the array fill method
const arr = Array(100).fill("hi", 0);
console.log(arr);

// 2. Create an array with numbers ranging from 1-100 using the Array.from method.
const arr1 = Array.from({ length: 100 }, (_, index) => index + 1);
console.log(arr1);

// 3. Convert only values of an object into one array.
const food = {
  fruit: "Apple",
  color: "red",
};
const propertyNames = Object.keys(food);
console.log(propertyNames);
const propertyValues = Object.values(food);
console.log(propertyValues);
const entries = Object.entries(food);
console.log(entries);

// 4. Convert an array into one object.
console.log(Object.assign({}, ['a','b','c']))

// 5. Find out if an array is an array.
console.log(Array.isArray(["hello","world",2]))

// Create a copy of an array that won’t affect the
// original array if modified.

const letters = ["a", "b", "c"];
let lettersCopy = letters.slice();
lettersCopy[0] = "e";
console.log(letters , lettersCopy)
// Create a copy of an array that will affect the original
// array if modified.

const numbers = [[1], [2], [3]];
let numbersCopy = [...numbers];
numbersCopy[0][0] = 4;
console.log(numbersCopy);
console.log(numbers);
