const newH1 = document.createElement("h1");
newH1.innerHTML = "Text to copy:";
document.body.appendChild(newH1);
const newH3 = document.createElement("h3");
newH3.innerHTML = "123456";
document.body.appendChild(newH3);

const array = [0, 0, 0, 0, 0, 0];
for (let i = 0; i < array.length; i++) {
  let inputElement = document.createElement("input");
  inputElement.style.width = "5vw";
  inputElement.classList.add("input-field");
  inputElement.setAttribute("min", "0");
  inputElement.setAttribute("max", "9");
  inputElement.setAttribute("step", "1");
  inputElement.setAttribute("required", "true");
  inputElement.setAttribute("pattern", "\\d");
  inputElement.setAttribute("type", "number");
  document.body.appendChild(inputElement);
}

const submitBtn = document.createElement("button");
submitBtn.setAttribute("type", "submit");
submitBtn.classList.add("btn");
submitBtn.textContent = "Verify";
document.body.appendChild(submitBtn);

document.body.style.textAlign = "center";

const inputFields = document.getElementsByClassName("input-field");
Array.from(inputFields).forEach((field) => {
  /**
   *
   * @param {KeyboardEvent} e
   */
  function keypressHandler(e) {
    if (/[0-9]/.test(e.key)) {
      field.reportValidity();
      field?.nextElementSibling?.focus();
    }
  }
  field.addEventListener("keyup", keypressHandler);
});

const inputArray = Array.from(inputFields);
for (let i = 0; i < inputArray.length; i++) {
  inputArray[i].addEventListener("paste", function (e) {
    e.preventDefault();
    if (e.target.type === "number") {
      let data = e.clipboardData.getData("Text");
      data = data.split("");
      [].forEach.call(
        document.querySelectorAll("input[type=number]"),
        (node, index) => {
          node.value = data[index];
        }
      );
    }
  });
}
