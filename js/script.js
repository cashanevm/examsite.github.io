function getBody() {
	console.log("click");

	this.style.animationPlayState = "running";

}
let element = document.getElementById("wrapper")
element.addEventListener("click", getBody);
