document.body.style.textAlign = "center";

function createHtml(tag, text) {
  const el = document.createElement(tag);
  el.innerText = text;
  document.body.appendChild(el);
  return el;
}

const h1 = createHtml("h1", "Font Size Changer");
const p = createHtml("p", "This font size changes when clicking the buttons.");
const btnPlus = createHtml("button", "+");
const btnMinus = createHtml("button", "-");

function changeFontSize(button, operator) {
  button.addEventListener("click", function (e) {
    if (pxCounter > minSize && pxCounter < maxSize) {
      if (operator === "+") {
        pxCounter += 2;
      } else if (operator === "-") {
        pxCounter -= 2;
      }
      p.style.fontSize = `${pxCounter}px`;
    }
  });
}
const minSize = 6;
const maxSize = 100;
let pxCounter = 16;
changeFontSize(btnPlus, "+");
changeFontSize(btnMinus, "-");
