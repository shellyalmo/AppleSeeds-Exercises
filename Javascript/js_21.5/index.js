document.body.style.textAlign = "center";
document.body.style.fontFamily = "arial";

function createHtml(tag, text) {
  const el = document.createElement(tag);
  el.innerText = text;
  form.appendChild(el);
  return el;
}

const form = document.createElement("form");
form.innerText = "How many smileys do you want to see?";
document.body.appendChild(form);
const application = createHtml("input", "");
application.setAttribute("type", "number");

const btn = createHtml("button", "submit");

function appendChildMultiple() {
  const imgTag = document.createElement("img");
  imgTag.setAttribute("src", "./smiley.png");
  imgTag.style.width = "40px";

  //finally append child to parent
  document.body.appendChild(imgTag);
}
btn.addEventListener("click", function (e) {
  e.preventDefault();
  const lastImg = document.getElementsByTagName("img");
  Array.from(lastImg).forEach((img) => {
    img.remove();
  });
  if (typeof parseInt(application.value) === "number") {
    let numSmileys = parseInt(application.value);
    for (let i = 1; i <= numSmileys; i++) {
      appendChildMultiple();
    }
  }
});
