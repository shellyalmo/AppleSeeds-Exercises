// make the following changes to the HTML file while
// navigating the DOM.
// Create a variable that holds the <li> element with the class
// “start-here”. Use traverse methods to complete these tasks:

// 1. Change the text from “title 2” to “main title”
const listElement = document.querySelector("body ul li.start-here");
listElement.innerHTML = "main title";

// 2. Add another subtitle with the text “subtitle 4”
const subtitle = document.createElement("li");
subtitle.innerText = "subtitle 4";
const firstUl = document.querySelector("ul li ul");
firstUl?.appendChild(subtitle);

// 3. Delete the last <li> element from the list.
// const parentUl = document.querySelector("ul");
const childLi = document.getElementsByTagName("li")[7];
childLi.remove();

// 4. Change the <title> element text to “Master Of The Dom”.
document.title = "Master Of The Dom";

// 5. Change the text of the <p> element ot something else of your choice
const p = document.querySelector("p");
p.innerHTML = "the last paragraph";
