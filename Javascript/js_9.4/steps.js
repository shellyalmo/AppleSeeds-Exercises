// with repeat() function
function stepsRepeat(N) {
  let newString = "";
  for (let i = 1; i <= N; i++) {
    let numSpaces = N - i;
    newString += "#".repeat(i);
    newString += " ".repeat(numSpaces);
    console.log(newString);
    newString = "";
  }
  return true;
}

// console.log(stepsRepeat(2));

// without repeat()
function steps(N) {
  let newString = [];
  for (let spaceIndex = 0; spaceIndex < N; spaceIndex++) {
    newString[spaceIndex] = " ";
  }
  for (let stepIndex = 0; stepIndex < N; stepIndex++) {
    newString[stepIndex] = "#";
    console.log(newString.join(""));
  }
  return 1;
}

console.log(steps(3));
