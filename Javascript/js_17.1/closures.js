var b = 1;
function someFunction(number) {
  function otherFunction(input) {
    return b;
  }
  b = 5;
  return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);

/** firstResult doesn't return anything. the function someFunction only returns  otherFunction but it hasn't been executed yet. result returns 5 because otherFunction is executed*/

var a = 1;
function b2() {
  a = 10;
  return;
  function a() {}
}
b2();
// console.log(a);
/**b(2) returns undefined because it has nothing to return. console.log(a) prints 1 because it is referring to the global a */

let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 100);
}
/**log is waiting to run after 100ms, but in the meantime the for loop is faster than that, so the for loop keeps running and doesn't wait for log to run. by the time the for loop is done, i =3. only then it has been enough waiting time, and log can finally run. log was called 3 times because of the loop, so its ran in a delay, with the updated i=3. thats why we get 3,3,3 */
