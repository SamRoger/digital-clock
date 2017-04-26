var dateDiv = document.getElementsByClassName("date")[0]
var body = document.getElementsByTagName("body")[0]

setInterval(function() {
	var date = new Date()

	var seconds = date.getSeconds()
	var minutes = date.getMinutes()
	var hours = date.getHours()

	if (hours <= 9) {
		hours = "0" + hours
	}  if (minutes <= 9) {
		minutes = "0" + minutes
	}  if (seconds <= 9) {
		seconds = "0" + seconds
	}

var hex = "#" + hours + minutes + seconds

dateDiv.innerText = hex
body.style.backgroundColor = hex
}, 1000)


