var someOtherVar;

var someVar = "Some text";
var foo = true;
var someNumber = 9;
var someFloat = 3.1416;
var someArray = [
	"Perro",
	"Gato",
	"Araña",
	"León"
]
var someMatrix = [
	[
		"Perro",
		"Gato",
		"Araña",
		"León"
	],[
		"Mesa",
		"Silla",
		"Cama"
	]
]

var studentObject = {
	name:"Eleonor",
	lastName:"Peralta Rivera",
	address:"Some Address",
	phoneNumber:"5454888548"
}

var studentsList = [
	{
		name:"Eleonor",
		lastName:"Peralta Rivera",
		address:"Some Address",
		phoneNumber:"5454888548"
	},
	{
		name:"Javier",
		personalData:{
			lastName:"Medina Bautista",
			address:"Some Address",
			phoneNumber:"5454888548",
		},
		
		hobbies: [
			"Videojuegos",
			"Cine",
			"Basketball"
		],

	}
]

function twoNumberAddtition(number1,number2){
	return number1 + number2;
}

function twoNumberSubstraction(number1,number2){
	return number1 - number2;
}

function compareTwoNumbers(number1,number2){
	debugger
	if(number1 > number2){
		alert("El primer número es mayor")
	} else if(number1 == number2){
		alert("los números son iguales")
	} else {
		alert("El primer número es menor")
	}
}

//= /*asignacion*/
//== /*comparación*/
//=== /*extrema comparación*/
//< /*Menor qué*/
//> /*Mayor que*/
//<= /*menor o igual que */
//>= /*mayor o igual que*/
//!= /*diferente*/
//! /*negacion*/
//!true
//!false