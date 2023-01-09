const isLeapYear = (year) => {
  if (year % 4 === 0 && year % 100 !== 0) {
    return "It is indeed a leap year";
  }
  if (year % 4 === 0 && year % 400 === 0) {
    return "It is indeed a leap year";
  } else {
    return "This is not a leap year.";
  }
};

console.log(isLeapYear(2012))
console.log(isLeapYear(2100))
console.log(isLeapYear(2400))