/* Arrays */

var myArray = new Array();
var myArray = [];

myArray = [1, 2, 3, 4, 5, 33, 14];
console.log(myArray[0]);

//agregar elemento al final del array
myArray.push(10);
console.log(myArray);

myArray.push("Hola mundo");
console.log(myArray);

//pop elimina el último elemento del array
myArray.pop();
console.log(myArray);

//reverse invierte el orden del array
myArray.reverse();
console.log(myArray);

//shift elimina el primer elemento
myArray.shift();
console.log(myArray);

//sort organiza el array en forma ascendente
/*myArray.sort();
console.log(myArray);

var mySecondArray = ["Hola", "String", "cidei"];
mySecondArray.sort();
console.log(mySecondArray);*/

//splice
var tasks =["Hola mundo", "Hola cidei", "chao"];
console.log(tasks);
tasks.splice(1,1,"Chao cidei", "Adios", "holala");
console.log(tasks);