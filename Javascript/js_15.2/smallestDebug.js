function findSmallest(a, b, c) {
  if (a > b > c) {
    return c;
  } else if (a > c > b) {
    return a;
  } else {
    return b;
  }
}
findSmallest(52, 66, 2);

// 1. First, find the line that contains the problem. Write it down.
// line 10 gets error ReferenceError: findSmalest is not defined

// 2. Which debug method did you use to find the bug?
// running the code and debug tool on vscode
// 3. Explain the bug in your own words.
// the debugger stopped running immidiately after the first breakpoint (line 10) because the function was called with a typo

// 4. Fix the code and submit it all.
