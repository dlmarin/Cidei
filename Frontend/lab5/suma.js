function Suma(a, b){
	this.a = a;
	this.b = b;
}

Suma.prototype ={
	constructor : Suma,
	getA : function(){
		console.log("Valor de a: " + this.a);
	},
	getB : function(){
		console.log("Valor de b: " + this.b);
	},
	getResult : function(){
		console.log("Resultado: " + (this.a+this.b))
	}
}



function Arreglo(){
	this.arreglito = [];
}

Arreglo.prototype = {
	constructor : Arreglo,
	getSumaArreglo : function(){
		var i=0;
		var sum=0;
		for (i; i < this.arreglito.length; i++) {
			sum= this.arreglito[i]+sum;
		}
		console.log("La suma es: " + sum);
	},
	getMultiplicacion : function(){
		var i=0;
		var mult=1;
		for (i; i < this.arreglito.length; i++) {
			mult= this.arreglito[i] * mult;
		}
		console.log("La multiplicación es: " + mult);
	}
}


function Abecedario(){
	this.arregloAbc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
}

Abecedario.prototype = {
	constructor : Abecedario,
	getNoVocales : function(){
		var i=0;
		var letra;
		for (i; i < this.arregloAbc.length; i++) {
			letra = this.arregloAbc[i]; 
			if((letra === "A") || (letra === "E") || (letra === "I") || (letra === "O") || (letra === "U")){
				console.log("no es consonante");
			}
			else{
				console.log("letra: " + letra);
			}
		}
	}
}


function FisBus(){
	
}

FisBus.prototype = {
	constructor : FisBus,
	getMultiplos : function(){
		var i=1;
		for (i; i <= 100; i++) {
			if((i%3 === 0) && (i%5 ===0)){
				console.log("FisBus");
			}
			else 
				if(i%3 === 0){
				console.log("fis");
			}
			else 
				if (i%5 === 0) {
				console.log("bus");
			}
			else {
				console.log(i);
			}
		}
	}
}