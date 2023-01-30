const storm = {
  superPower: "flying",
};
function printSuperPower() {
  console.log("my superpower is " + this.superPower);
}

//fix with bind
// const boundPrintSuperPower = printSuperPower.bind(storm);
// boundPrintSuperPower();
printSuperPower.bind(storm)();

//fix with call or apply
// printSuperPower.call(storm);

// or

// printSuperPower.apply(storm);
