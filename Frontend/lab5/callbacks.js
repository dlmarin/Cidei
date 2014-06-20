/*callbacks en JS*/
/*
Un callback es una función, que por parámetro se le envía otra función, y la función que lo recibe, espera a que se ejecute
esa función
*/

function algo(miCallback){
	miCallback();
}

algo(function(){
	console.log("Esto es un callback");
});

function otroCallback(miCallback){
	miCallback("Un argumento");
}

otroCallback(function(unValor){
	console.log("Algo se imprime y es: " + unValor);
});

/* múltiples callbacks llamado en determinados casos*/

function algoOcurre(callback1, callback2, callback3){
	//pasa la primera vez
	callback1("Primer paso");

	//siguiente callback
	callback2("Segundo paso");

	//y por último
	callback3("último y tercer paso");
}

//llamado y uso de los múltiples callbacks para "algoOcurre"

algoOcurre(
	function(paso1){
		console.log(paso1);
	},
	function(paso2){
		console.log(paso2);
	},
	function(paso3){
		console.log(paso3);
	}
);