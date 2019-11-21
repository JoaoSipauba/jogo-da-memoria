var intervalo;

function tempo() {
	var ms = 1;
	var s = 0;
	var m = 0;
	intervalo = window.setInterval(function () {
		if (ms == 100) { s++; ms = 0; }
		if (ms < 10) document.getElementById("msegundo").innerHTML = "0" + ms; else document.getElementById("msegundo").innerHTML = ms;
		if (s < 10) document.getElementById("segundo").innerHTML = "0" + s + ":"; else document.getElementById("segundo").innerHTML = s + ":";
		ms++;
		if (s == 30){
			window.clearInterval(intervalo);
			$('#msg').show()
			$('#msg #mensagem').html('<h2>Tempo esgotado. Você perdeu!</h2>')
		}
	}, 10);

}
window.onload = tempo;