let btn = document.getElementById("btn")
let text = document.getElementById("text")
let bol = true

btn.onclick = function () {
	if (bol) {
		text.style.display = "none"
		console.log("true")
	} else {
		text.style.display = "flex"
		console.log("false")
	}
	bol = !bol
}
