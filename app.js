var divisor = document.getElementById("divisor"),
slider = document.getElementById("slider");
function moveDivisor1() { 
	divisor.style.width = slider.value+"%";
}

var divisor2 = document.getElementById("divisor2"),
slider2 = document.getElementById("slider2");
function moveDivisor2() { 
	divisor2.style.width = slider2.value+"%";
}