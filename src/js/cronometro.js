var intervalo;

function tempo() {
	var ms = 1;
	var s = 0;
	var m = 0;
	intervalo = window.setInterval(function () {
		if (ms == 100) { s++; ms = 0; }
		if (s == 60) { m++; ms = 0; s = 0; }
		if (m < 10) document.getElementById("minuto").innerHTML = "0" + m + ":"; else document.getElementById("minuto").innerHTML = m + ":";
		if (ms < 10) document.getElementById("msegundo").innerHTML = "0" + ms; else document.getElementById("msegundo").innerHTML = ms;
		if (s < 10) document.getElementById("segundo").innerHTML = "0" + s + ":"; else document.getElementById("segundo").innerHTML = s + ":";
		ms++;
	}, 10);

}
window.onload = tempo;