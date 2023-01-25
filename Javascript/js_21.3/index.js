document.body.style.textAlign = "center";
document.body.style.fontFamily = "arial";

function createHtml(tag, text) {
  const el = document.createElement(tag);
  el.innerText = text;
  form.appendChild(el);
  return el;
}

const h1 = document.createElement("h1");
h1.innerText = "Job Application Form";
document.body.appendChild(h1);
const form = document.createElement("form");
form.innerText = "Why are you interested in this position?";
document.body.appendChild(form);
form.style.display = "flex";
form.style.fontSize = "12px";
form.style.margin = "0 30vw";
form.style.flexDirection = "column";
form.style.alignItems = "flex-start";
form.style.gap = "0.5rem";
const application = createHtml("textarea", "");
application.setAttribute("minlength", "100");
const btn = createHtml("button", "Click here!");
