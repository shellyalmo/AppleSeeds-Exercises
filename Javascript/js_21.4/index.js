const bulbImg = document.createElement("img");
bulbImg.setAttribute("src", "./bulb-off.jpg");
document.body.appendChild(bulbImg);
let bulbStatus = "off";
bulbImg.style.cursor = "pointer";

bulbImg.addEventListener("click", function (e) {
  if (bulbStatus === "off") {
    this.src = "./bulb-on.jpg";
    bulbStatus = "on";
  } else if (bulbStatus === "on") {
    this.src = "./bulb-off.jpg";
    bulbStatus = "off";
  }
});
