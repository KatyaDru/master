const backgroundGenerator = document.querySelector(".backgroundGenerator");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");

function setGradient() {
	body.style.background = "linear-gradient(" + color1.value + ", " + color2.value + ")";
	backgroundGenerator.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
