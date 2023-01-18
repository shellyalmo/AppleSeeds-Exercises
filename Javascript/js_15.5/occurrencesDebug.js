function countOccurrences(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      counter += 1;
    }
  }
  return counter;
}
console.log(countOccurrences("ini mini miny moe", "n"));

// 1. First, find the line that contains the problem. Write it down.
/**line 5 */

// 2. Which debug method did you use to find the bug?
/**vscode debugger */

// 3. Explain the bug in your own words.
/**the debugger showed that counter never changes, its always 0. thats why the function returned 0. the reason is because on line 5 we have counter + 1 and not counter +=1. so we never change counter. */
// 4. Fix the code and submit it all.
