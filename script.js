function CalcolaFattoriale(){
	numero = document.getElementById("n").value;
	//console.log("Numero = "+numero);
	ris = numero;
	for (var i = numero-1; i >= 1; i--) {
		ris = ris*i;
	}
	document.getElementById("risultato").innerHTML = numero +"! = " +ris;
}