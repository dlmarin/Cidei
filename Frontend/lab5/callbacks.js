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