function compareArrays(arr1, arr2) {
  let similarItems = [];
  for (let arr1Item of arr1) {
    for (let arr2Item of arr2) {
      if (arr1Item === arr2Item) {
        similarItems.push(arr2Item);
      }
    }
  }
  if (similarItems.length > 0) {
    return similarItems;
  } else {
    return false;
  }
}

const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

console.log(compareArrays(food, food1));
