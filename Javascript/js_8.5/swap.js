function swapper(objectToSwap) {
  const newObj = {};
  for (const [key, value] of Object.entries(objectToSwap)) {
    newObj[value] = key;
  }
  return newObj
}

const obj = {
  color: "red",
  animal: "cat",
  age: 100,
};

console.log(swapper(obj))
