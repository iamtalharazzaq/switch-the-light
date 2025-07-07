const bulb = document.querySelector("#bulb");

bulb.addEventListener("click", function () {
  if (this.src.includes("bulb-off.jpg")) {
    this.src = "bulb-on.jpg";
  } else {
    this.src = "bulb-off.jpg";
  }
});
