let numSiblings = prompt("How many siblings do you have?");
numSiblingsNumber = parseInt(numSiblings)
if (numSiblingsNumber === 1) {
  console.log("1 sibling!");
} else if (numSiblingsNumber > 1) {
  console.log("More than 1 sibling");
} else {
  console.log("No siblings");
}
