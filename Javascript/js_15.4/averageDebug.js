function calcAverage(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(calcAverage([85, 90, 92]));

// 1. First find the line that contains the problem. Write it down.
/** line 2*/

// 2. Which debug method did you use to find the bug?
/**vscode debugger */

// 3. Explain the bug in your own words.
// when debugging I saw that sum is always nan, and only i is changing. the reason is that sum was never initialized, so it keeps being nan even after we add i to it. the solution is to initialize sum to 0, var sum =0
// 4. Fix the code and submit it all.
