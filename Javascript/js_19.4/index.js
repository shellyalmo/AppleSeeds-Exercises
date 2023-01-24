/**
 *
 * @param {string} tag
 * @param {string} text
 * @returns {HTMLElement}
 */
function html(tag, text) {
  const el = document.createElement(tag);

  el.innerText = text;

  document.body.appendChild(el);

  return el;
}

let h1 = html("h1", "Welcome to my vanilla JS");
html("h2", "by Shelly Almo");

const img = document.createElement("img");
img.setAttribute("src", "./img.jpg");
img.style.width = "30vw";
document.body.appendChild(img);

document.body.style.fontFamily = "arial";

let btn = html("button", "click me for a random color");
btn.addEventListener("click", () => {
  function num() {
    return Math.round(Math.random() * 50);
  }
  let newColor = `rgb(${num() + 100} ${num() - 25} ${num() + 75})`;
  h1.style.color = newColor;
});
html("div", "");
html("p", "choose a new background color");
let copick = html("input", "");
copick.setAttribute("type", "color");
copick.addEventListener("change", (e) => {
  document.body.style.backgroundColor = e.target.value;
});
