// 1. Write a function called ‘isString’ that receives 2 arguments, a string and a callback function. The function checks that the string is indeed a string. If the string is a string, pass the string to a callback function that logs that string to the console.
function isString(string, callback) {
  if (typeof string === "string") {
    callback(string);
  }
}
function stringPrinter(string) {
  console.log(string);
}
isString("Jonathan", stringPrinter);

// 2. Create a function called ‘firstWordUpperCase’ that
// receives 2 arguments, a string and a callback function.
// The function will capitalize the first word in the sentence and pass the string to a callback function which will create dashes between the words.
function firstWordUpperCase(string, callback) {
  let capitalizedString = "";
  let splittedString = string.split(" ");
  splittedString[0] = splittedString[0].toUpperCase();
  capitalizedString = splittedString.join(" ");

  return callback(capitalizedString);
}
function dasher(string) {
  let splittedString = string.split(" ");
  return splittedString.join("-");
}
console.log(firstWordUpperCase("hello world", dasher));

// 3.Call the ‘firstWordUpperCase’ function with a callback of your choice.
function replacer(string) {
  return string.replaceAll("world", "people");
}
console.log(firstWordUpperCase("hello world", replacer));

// 4. Create your own function that will receive from one of its arguments a callback function.

function greet(firstName) {
  console.log("Hi " + firstName);
  return meet(firstName);
}

function meet(firstName) {
  return "Nice to meet you, " + firstName;
}

console.log(greet("Shelly", meet));
