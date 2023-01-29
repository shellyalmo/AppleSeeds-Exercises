const checkboxTerms = document.getElementById("checkbox-terms");
const agreeImg = document.getElementById("agree-img");
const newImg = document.createElement("img");
agreeImg.appendChild(newImg);

function addImg() {
  newImg.setAttribute("src", "./agree.jpg");
}

function removeImg() {
  newImg.setAttribute("src", "");
}

checkboxTerms.addEventListener("input", (e) => {
  if (e.target.checked) {
    addImg();
  } else {
    removeImg();
  }
});
