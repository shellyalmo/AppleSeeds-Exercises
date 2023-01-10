const darkOrLight = (color) => {
  switch (color) {
    case "yellow":
    case "pink":
    case "orange":
      return "light color";
      break;
    case "blue":
    case "purple":
    case "brown":
      return "dark color";
      break;
    default:
      return "Unknown color";
  }
};

console.log(darkOrLight("yellow"))
console.log(darkOrLight("pink"));
console.log(darkOrLight("orange"))
console.log(darkOrLight("blue"))
console.log(darkOrLight("brown"))
console.log(darkOrLight("purple"))
console.log(darkOrLight("black"))
