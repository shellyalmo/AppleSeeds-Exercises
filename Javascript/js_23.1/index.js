// Question 1:
// In your own words what will this point to and why?
// (Note this is the global scope)
console.log(this);
// answer: it will print the global object, because we call "this" in the global scope

// Question 2:
// a. In your own words what will this point to and why?
// b. How can you fix this code?

const myObj = {
  name: "Timmy",
  greet: () => {
    console.log(`Hello ${this.name}`);
  },
};
myObj.greet();
//answer a: we have arrow function so "this" is connected to the context above it which was the global scope, and we see "undefined"
//answer b: this inside of an object refers to the object itself. it will print "Hello Timmy" only if we get rid of the arrow function.

// Question 3:
// In your own words what will this point to and why?
const myFuncDec = function () {
  console.log(this);
};
myFuncDec();
// it will print the global

// Question 4:
// In your own words what will this point to and why?
const myFuncArrow = () => {
  console.log(this);
};
myFuncArrow();
//global

// Question 5:
// a. In your own words, what will this point to and why?
// b. How can you fix this code?
document.querySelector(".element").addEventListener(() => {
  console.log(this);
});

// a.global because arrow functions dont have their own this
//b. get rid of the arrow function or use bind
