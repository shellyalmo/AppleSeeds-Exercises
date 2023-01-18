function getSum(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
  return sum;
}
console.log(getSum([1, 2, 3], [(5, 66, 23)]));
// 1. First, find the line that contains the problem. Write it down.
// according to the console, the problematic line is line 3

// 2. Which debug method did you use to find the bug?
// debug console in vs code

// 3. Explain the bug in your own words.
// first when the function is called, its supposed to get 2 arguments, then the first time the function uses them is in line 3 but it cant cll length on arr1, becuase it never got it as an argument. its always undefined. now i see with the eyes that arr1 and arr2 were never separated by comma. also it stops running after line 4 becuaes we are trying to change sum, but sum is const. we also need to return sum

// 4. Fix the code and submit it all.
