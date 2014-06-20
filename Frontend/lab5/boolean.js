/* Variables y elementos del tipo booleano */

var verdadero = true;
var falso = false;

/*elementos de comparación */

/* igualdad (==) */
console.log(1 == 1);
/*corrección de tipos*/
console.log("1" == 1);  //Convierte de "1" a 1
/* igual estricto (===) */
console.log("1" === 1);

console.log(1 == true);
console.log(0 == false);
console.log("" == 0); //Convierte de "" a 0
console.log(0 == ""); //Convierte "" a 0
console.log("     " == 0); //Convierte de "    " a 0
console.log("" === 0); 

//declarar un objeto
var x = {};
var y = x; 
//comparo los objetos
console.log("La comparación de los objetos es: " + (x == y));

var w = {};
var z = w; 
console.log("La comparación de los objetos de manera estricta es: " + (w === z));

//comparación no estricta de no igual (!=)
console.log("" != 0);

//comparación estricta de no igual (!==)
console.log("" !== 0);

/* Flujos lógicos */
console.log("--- Flujos lógicos -----");
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

//Operador del tipo OR
console.log("--- Tabla básica del OR -----");
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
