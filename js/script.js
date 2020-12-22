let elementWrapper = document.getElementById("start__button")

function getStarted() {
	let elementWrapper = document.getElementById("element__wrapper")
	let elementWelcome = document.getElementById("element__welcome")
	let elementSector = document.getElementById("element__sector")

	elementSector.style.animationPlayState = "running";
	setTimeout(() =>{elementWelcome.style.animationPlayState = "running";}, 2000)
	setTimeout(() =>{elementWrapper.style.animationPlayState = "running";}, 4000)
}

//elementWrapper.addEventListener("click", getStarted);
//getStarted()
setTimeout(() =>{getStarted()}, 2000)

let siteMain =document.getElementById("site__main")
let siteAbout =document.getElementById("site__about")
let siteWorks =document.getElementById("site__works")
let siteContact =document.getElementById("site__contact")

let buttonMain =document.getElementById("button__main")
let buttonAbout =document.getElementById("button__about")
let buttonWorks =document.getElementById("button__works")
let buttonContact =document.getElementById("button__contact")

buttonMain.addEventListener("click",()=>{
siteMain.style.display = "block"
siteAbout.style.display = "none"
siteWorks.style.display = "none"
siteContact.style.display = "none"
console.log("click")
})
buttonAbout.addEventListener("click",()=>{
	siteMain.style.display = "none"
	siteAbout.style.display = "block"
	siteWorks.style.display = "none"
	siteContact.style.display = "none"
	console.log("click")
})
buttonWorks.addEventListener("click",()=>{
	siteMain.style.display = "none"
	siteAbout.style.display = "none"
	siteWorks.style.display = "block"
	siteContact.style.display = "none"
	console.log("click")
})
buttonContact.addEventListener("click",()=>{
	siteMain.style.display = "none"
	siteAbout.style.display = "none"
	siteWorks.style.display = "none"
	siteContact.style.display = "block"
	console.log("click")
})