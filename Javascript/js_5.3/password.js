// if/else conditional expression.
const passwordValidatorIfStatement = (password) => {
  if (password.length > 7) {
    return "Strong";
  } else if (password.length < 7) {
    return "Weak";
  }
};

// console.log(passwordValidatorIfStatement("ehu6jg3k"));
// console.log(passwordValidatorIfStatement("ehu6"));

// ternary conditional expression.
const passwordValidatorTernary = (password) => {
  return password.length > 7 ? "Strong" : "Weak";
};

// console.log(passwordValidatorTernary("ehu6jg3k"));
// console.log(passwordValidatorTernary("ehu6"));

// && logical operator.
const passwordValidatorLogical = (password) => {
  if (password.length > 7 && true) {
    return "strong";
  } else {
    return "weak";
  }
};

// console.log(passwordValidatorLogical("ehu6jg3k"));
// console.log(passwordValidatorLogical("ehu6"));

// Create an “advanced” password validation function that takes a password string as an argument.
// If the password length is more than 7 characters long and
// has at least one capital letter return “Very Strong”. If the
// password length is only 7 characters long returns “Strong”.
// If the password length is less than 7 characters long return “Weak”
// Use only a ternary conditional expression.
const passwordValidatorAdvanced = (password) => {
  return password.length > 7 && /[A-Z]/.test(password)
    ? "Very Strong"
    : password.length === 7
    ? "Strong"
    : password.length>7
    ? 'not amazing'
    : 'Weak';
};

console.log(passwordValidatorAdvanced("ehu6jg3k"));
console.log(passwordValidatorAdvanced("ehu6"));
console.log(passwordValidatorAdvanced("ehu6654"));
console.log(passwordValidatorAdvanced("ehu6654A89745"));
console.log(passwordValidatorAdvanced("reT6u4t"));
