function getSumOfEven(arr) {
  return arr[0] + arr[2] + arr[4] + arr[6] + arr[8];
}
console.log(getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 1. First, find the line that contains the problem. Write it down.
/**line 2 */

// 2. Which debug method did you use to find the bug?
/**vsc doe debugger */

// 3. Explain the bug in your own words.
/**the debuger showed that the function returns Nan, so I checked what is the value of each variable, and saw that arr[10] is undefined. that's why it returned nan. the solution is to shift all indexes minus 2. */
// 4. Fix the code and submit it all.
