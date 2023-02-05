// Create an object with a name property. The object should
// also have a method that prints its name and another method
// that prints its name after a second with the help of setTimeOut.
// in this exercise, you are not allowed to use arrow functions.

const myObj = {
  name: "Shelly",
  printer: function () {
    return this.name;
  },
  printInDelay: function () {
    setTimeout(
      function () {
        console.log(this.printer());
      }.bind(this),
      1000
    );
  },
};

console.log(myObj.printer());
console.log(myObj.printInDelay());
