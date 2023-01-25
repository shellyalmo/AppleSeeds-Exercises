function createHtml(tag, text) {
  const element = document.createElement(tag);
  element.innerText = text;
  document.body.appendChild(element);
  return element;
}

const h1 = createHtml("h1", "What is your age?");
document.body.style.textAlign = "center";
document.body.style.fontFamily = "arial";

const inputField = createHtml("input", "");
inputField.setAttribute("type", "number");
inputField.setAttribute("id", "age");
const btn = createHtml("button", "Submit");
btn.setAttribute("type", "submit");

btn.addEventListener("click", function (e) {
  if (inputField.value >= 18) {
    alert("You can drink");
  } else {
    alert("You're too young");
  }
});
