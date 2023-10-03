document.getElementById("modal-btn").addEventListener("click", function () {
	document.getElementById("modal").classList.add("is-open")
})

document.getElementById("modal-close-btn").addEventListener("click", function () {
	document.getElementById("modal").classList.remove("is-open")
})