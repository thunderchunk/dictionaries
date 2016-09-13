//alert
alert("ninjas");

//
console.log("ninjas");

// variable

var butts = "ass";

//types

var booLean = "true";
var sTring = "tacos are cheesy and delicious";
var nuM = 4;

// operators (plus, minus, multiply, divisor, equals, strict equals, not eauql to, and, or)

var op1 = "+ - * % == === !== && || ";

// 5 === "5" returns false
// 5 == "5" returns true

var op2 = 2 === "2"; //returns false
var op3 = 2 == "2"; //returns true

if (butts === "ass") {
  alert(butts);
  else (butts !== "ass") {
  	alert ("neupe");
}
}

// first digit is the index of the first element, the second is the element after the last one

var practiceNumbers = [1, 2, 3, 4, 5];

for (var i = 0; i < practiceNumbers.length; i++) {
	if (practiceNumbers[i] % 2) {
		alert("Some are % 2!");
		break;
	}
	else {
		alert("nope");
	}
}

// Reverse a string

function reverse(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}

//String to number
function ninjas (x) {
	for (i = 0; i < x.length; i++) {
		x[i] = (Number(x[i]) + 10);
	}
	return x;
}

//Fill an array from 1 to 25
function maker (x) {
	var a = [];
	for(i = 1; i < 26; i++) {
		a.push(i);
	}
	return a;
}

// incriment array by 1

function myLoop (x,y) {
	for(i = 0; i < y; i++){
		x++;
	}
	return x;
}

myLoop (4,4);

// Loop through # entered and apply to array
var myArray = [];

function arrayFiller (x) {
	var y = "item";
	for (i = 0; i < x; i++) {
		myArray[i] = y;
	}
	return myArray;
}



//array

var xMen = ["Cyclops", "Wolverine", "Quicksilver", "Maggot", "Jubilee", "Gambit", "Beast"];

//last element of an array
var lastXmen = xMen.pop();
//add elements to an array
var newXmen = xMen.push("Cannonball", "Bishop");
//first element of an array
var firstXmen = xMen.shift();
// adds to the beginning of an array
var newNewXmen = xMen.unshift("Rogue", "Professor X");
// insert into an array
// first number is starting position, 2nd is number to remove, then what to add
var morlokXmen = xMen.splice(0, 2, "Marrow", "Storm");
//get elements of an array
var alwaysFighting = xMen.slice(0, 2);


//find and replace
var newText = text.replace("a man", "a woman");
// global
var newText2 = text.replace(/a man/g, "a woman");


//working in arrays
var practiceNumbers = [1, 2, 3, 4, 5];

for (var i = 0; i < practiceNumbers.length; i++) {
	if (practiceNumbers[i] % 2) {
		alert("Some are % 2!");
		break;
	}
	else {
		alert("nope");
	}
}

//Delete something from an array:
var myGroceryList = ["tacos", "ninjas", "eyeballs", "ducks"];

function removeItem (x, y) {
	for (i = 0; i < x.length; i++) {
		if (x[i] == y) {
			x.splice(i, 1);
		}
		return x;
		
	}
}

removeItem (myGroceryList, "tacos");

function addItem (x, z) {
	for (i = 0; i < x.length; i++) {
		if (! x.includes(z)) {
			x.push(z);
		}
		return x;
		
	}
}

addItem (myGroceryList, "farts");


//for if nested statements
var firstNms = ["Joe", "Nacho"]
var lastNms = ["Johnson", "Brochacho"]
var fullNms = []
for (var i = 0; i < firstNms.length; i++) {
	for (var j = 0; j < lastNms.length; j++){
			fullNms.push(firstNms[i] + " " + lastNms[j]);
	}
}
console.log(fullNms);

// .length

var x = practiceNumbers.length;

// for loops

var animals = ["dog", "monkey", "tiger"];

function fun (ex) {
	for (var i = 0; i < ex.length; i++) {
		if (ex[i] === "monkey") {
			alert("There's a monkey in there!");
		}
		else (ex[i] !== "monkey") {
			alert("Ain't no monkey, bro.");
		}
	}
}

// flags

var toggle = true;

//index

var par = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
// first index of
var parIndx = par.indexOf("Lorem");
// last index of
var parIndx2 = par.lastIndexOf("Lorem");
// Character at
var charAtz = par.charAt("4");
// SWITCH STATEMENTS

var theAnimal = "Monkey";

switch(theAnimal) {
	case "Monkey" :
		alert("There's a monkey in there!")
		break;
	case "Tiger" :
		alert("There's a tiger in there!")
		break;
	default :
		alert("I dunno.");
}

//While loops

var i = 0;
while (i < 3) {
	alert(i);
	i++;
}

// do while loops

var i = 0;
do {
	alert(i);
	i++;
} while (i < 3);

// SWITCH STATEMENTS

var theAnimal = "Monkey";

switch(theAnimal) {
	case "Monkey" :
		alert("There's a monkey in there!")
		break;
	case "Tiger" :
		alert("There's a tiger in there!")
		break;
	default :
		alert("I dunno.");
}

//this is the long way

var newText = text.replace("a man", "a woman");

// global
var newText2 = text.replace(/a man/g, "a woman");

// rounding numbers and decimals

var w = 1.5654654;

var q = Math.round(w);	//returns 2
var e = Math.ceil(w);	//returns 2
var r = Math.floor(w);	// returns 1


// RANDOM NUMBER

var bNum = Math.random();	
var nNum = (bNum * 6) + 1;	
var ran6 = Math.floor(nNum);

var sNum = bNum.toFixed(2);

//numbers to strings

var xy = "1";
var yx = 1;

var yxXyadder = Number(xy) + Number(yx);
var yxXystringer = xy.toString() + yx.toString();


// Dates

var dD = new Date();

var dDday = dD.getDay();				// day of the week 0-6
var dDmonth = dD.getMonth();			// month 0-11
var dDDate = dD.getDate();				// 1-31
var dDfullYear = dD.getFullYear();		// 2016
var dDhours = dD.getHours();			// 0-23 (0 = midnight, 12 is noon)
var dDminutes = dD.getMinutes();		// 0-59
var dDseconds = dD.getSeconds();		// 0-59
var dDtime = dD.getTime();				// milliseconds since jan 1 1970

var specD = new Date("July 23, 1972 13:25:50");

/*
setFullYear()
setMonth()
setDate()
setHours()
setMinutes()
setSeconds()
setMilliseconds()
*/

bjects
*/

var taco1 = {
  cheese: "white",
  meat: "beef",
  shell: "corn"
  misc: ["cilantro", "onion", "lime"]
};

//cycle through properties of an object and change

function unknownPerson (y) {
	for (var prop in y){
		y[prop] = "Unknown";
	}
	return y;
}

//constructor

function Dude(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

var dude1 = new Dude("Joe", "Smith", 22, "brown");

//prototype

Dude.prototype.smell = "nasty";

Dude.prototype.smellAlert = function(){
	if (this.smell = "nasty") {
		alert("ew");
	}
};

//checking for properties / methods

var listOfProperties = [];

for (var prop in dude1) {
  if (dude1.hasOwnProperty(prop)) {
  	listofProperties.push(prop);
  }
}

// var isPropertyOf = "color" in thing;    is the single method

var whereWeAt = window.location.href;
var theHost = window.location.hostname;
var currentPage = window.location.pathname;
var pageSection = window.location.hash;

// if (window.location.pathname === "/") {

// window.location.assign("");
// window.location.replace("");
//  window.location.reload(true);
//  window.location.reload(false);
//  window.location.reload();

