/* Programación orientada a Objetos*/

function Person(firstName, lastName, profession, genre, age, city){
	this.firstName = firstName;
	this.lastName = lastName;
	this.profession = profession;
	this.genre = genre;
	this.age = age;
	this.city = city;

	this.studies = [];
}

Person.prototype = {
	constructor : Person,
	getFirstName : function(){
		console.log("El primer nombre de la persona es: " + this.firstName);
	},
	getLastName : function(){
		console.log("El apellido de la persona es: " + this.lastName);	
	},
	getProfession : function(){
		console.log("La profeción de la persona es: " + this.profession);
	},
	getGenre : function(){
		console.log("El género de la persona es: " + this.genre);
	},
	getAge : function(){
		console.log("La edad de la persona es: " + this.age);
	},
	getCity : function(){
		console.log("La ciudad de la persona es: " + this.city);
	},
	getStudies : function(){
		var i;
		for (i = 0; i < this.studies.length; i++) {
			console.log("Tiene estudios en: " + this.studies[i]);
		}
	}

}



function Animal(name, genre, age, species, zooNumber, zooName){
	this.name = name;
	this.genre = genre;
	this.age = age;
	this.species = species;
	this.zooNumber = zooNumber;
	this.zooName = zooName;
}

Animal.prototype = {
	constructor : Animal,
	getName : function(){
		console.log("El nombre del animal es: " + this.name);
	},
	getGenre : function(){
		console.log("El género del animal es: " + this.genre);
	},
	getAge : function(){
		console.log("La edad del animal es: " + this.age);
	},
	getSpecies : function(){
		console.log("La especie del animal es: " + this.species);	
	},
	getZooNumber: function(){
		console.log("El número del animal es: " + this.zooNumber);
	},	
	getZooName : function(){
		console.log("El zoológico del animal es: " + this.zooName);
	}	

}