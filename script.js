const bulb = document.querySelector("#bulb");

bulb.addEventListener("click", function () {
  if (this.src.includes("bulbOff.png")) {
    this.src = "bulbOn.png";
  } else {
    this.src = "bulbOff.png";
  }
});
