
// Example
// Create a function makePassword that returns a function that takes in a password and returns a message indicating whether the input matches the original password.

function makePassword(password) {
  return function (input) {
    return input === password ? "Access granted." : "Access denied.";
  };
}
const checkPassword = makePassword("secret");
console.log(checkPassword("secret")); // "Access granted."
console.log(checkPassword("notsecret")); // "Access denied."

// Explanation: The function makePassword returns another function that takes in an input and compares it to the original password. The inner function has access to the password variable, creating a closure.


// 1. Create a function counter that returns a function that increments and returns a counter variable. The counter should not be accessible from outside the function.

// 2. Create a function addMaker that takes in a value and returns a function that adds that value to its input.

// 3. Create a function adder that takes in a value and returns an object with two methods: add and reset. The add method takes in a number and returns the sum of the original value and the input, and the reset method resets the value back to the original value.
