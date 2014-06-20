/* Objetos y funciones */

var myObject = new Object();
var myObject = {};

//los arrays también son Objetos
var lotter = [4,6,7,7,7,8];

profile = {
	firstName : "Diana",
	lastName : "Marin",
	phone : "7167372"
}

console.log(profile.firstName);
console.log(profile["lastName"]);

//iterando sobre un objeto {}
for(key in profile){
	console.log(profile[key]);
}

/* Funciones*/
function test(){
	console.log("Hola");
}

test();

//Uso de función anónima
chao = function(){
	console.log("Chao");
}

chao();