// Write a function that takes a number as an argument and
// returns a Promise that tests if the value is less than or greater
// than the value 10.
// If it is greater than 10 it is resolved, if it is less than 10 it is
// rejected.
// Call the function and print the resolve and reject in a .then,
// .catch.

/*first solution */
// const checkGreater = (num) => {
//   return new Promise((resolve, reject) => {
//     if (num > 10) {
//       resolve();
//     } else if (num < 10) {
//       reject();
//     }
//   });
// };

// checkGreater(11)
//   .then(() => {
//     console.log("resolved");
//   })
//   .catch(() => {
//     console.log("rejected");
//   });

/*better solution */
function testNumber(num) {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve(`${num} is greater than 10`);
    } else {
      reject(`${num} is less than 10`);
    }
  });
}

testNumber(15)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
