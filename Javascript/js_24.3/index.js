// 1. Build your own filter method with the help of prototypes

/**
 *
 * @param {Function} callbackFunc
 * @returns {Array}
 */
Array.prototype.newFilter = function (callbackFunc) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callbackFunc(this[i])) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};
console.log([1, 2, 3, 4].newFilter((x) => x > 1));

// 2. Build your own find method with the help of prototypes
Array.prototype.newFind = function (callbackFunc) {
  for (let i = 0; i < this.length; i++) {
    if ((callbackFunc(this[i]), i, this)) {
      return this[i];
    }
  }
  return undefined;
};
console.log([1, 2, 3, 4].newFind((x) => x > 1));

// 3. Build your own reduce method with the help of prototypes
Array.prototype.newReduce = function (callbackFunc, initValue) {
  let accumulator = initValue;
  for (let i = 0; i < this.length; i++) {
    if (accumulator === undefined) {
      accumulator = this[i]; // if we don't have initial value make the acc equal the first element in the array
    } else {
      accumulator = callbackFunc(accumulator, this[i], i, this);
    }
  }
  return accumulator;
};
console.log([1, 2, 3, 2].newReduce((a, b) => a + b, 0));
