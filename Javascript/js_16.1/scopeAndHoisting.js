function funcA() {
  console.log(a);
  console.log(foo());
  var a = 1;
  function foo() {
    return 2;
  }
}
funcA();

/* console.log(a) will print undefined, because a is var and it is hoisted. We can fix that by writing console.log(a) after the line var a=1.
then console.log(foo()) will print 2 */

var fullName = "John Doe";
var obj = {
  fullName: "Colin Ihrig",
  prop: {
    fullName: "Aurelio De Rosa",
    getFullName: function () {
      return this.fullName;
    },
  },
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());
/* console.log(obj.prop.getFullName()); will print Aurelio De Rosa because the function is inside prop object and it looks inside that scope.
var test will print undefined, its hoisted, but for fixing we can do:
var test = obj.prop.getFullName();
console.log(test);
*/

function funcB() {
  let a = (b = 0);
  a++;
  return a;
}
funcB();

console.log(typeof a);
console.log(typeof b);
/*a can only be accessed inside the function scope and we get undefined. 
b is never declared as var/let/const but can be accessed outside the function scope. get a number */

function funcC() {
  console.log("1");
}
funcC();
function funcC() {
  console.log("2");
}
funcC();
// only shows "2" because its overriden

function funcD1() {
  d = 1;
}
funcD1();
console.log(d);
function funcD2() {
  var e = 1;
}
funcD2();
console.log(e);
// 1 then error

function funcE() {
  console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();
// undefined, then 1, var is hoisted, first its recognized as declared, then initialized.
