var userInput = document.getElementById("userInput");
var userClick = document.getElementById("userClick");
var userProj = document.querySelector(".grid-wrapper");

// userInput = "https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg";

function createItem() {
	var item = document.createElement("div");
	item.className = "box";
	var userImg = document.createElement("img");
	userImg.setAttribute("src", userInput.value);
	item.appendChild(userImg);
	userProj.appendChild(item);
	userInput.value = "";
}


userClick.addEventListener("click", createItem);
console.log(userInput.value);

