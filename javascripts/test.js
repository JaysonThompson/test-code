var myArray = [1,2,3,4,5];
var numArray = [2,3,4,5,6];
var myString = "Hello World.";
var score = 0;
var myObj = {
	"name": "Jayson Thompson",
	"age": 41,
	"dob": "9/22/75",
	"weight": "171 lbs",
	"height": "68 inches"
}
var multipleArr = [[1,2],[3,4],[5,6,7]];


function convertToF(celsius){
	var fehrenheit = (celsius * (9/5) + 32);
	return fehrenheit;
};

function milesToMeters(){
	var miles = document.getElementById("miles").value;
	var meters = Math.floor(miles * 1609.344);
	if (miles === ""){
		alert('Please enter a numeric number of miles');
	}
	else {
		alert(miles + ' miles is about ' + meters + ' meters');
	}
};

function metersToMiles(){
	var meters = document.getElementById("meters").value;
	var miles = Math.floor(meters / 1609);
	if(meters === ""){
		alert('Please enter a numeric number of meters.');
	}
	else if (miles < 1) {
		alert(meters + ' meters is less than one mile');
	}
	else{
		alert(meters + ' meters is about ' + miles + ' miles');
	}
};

//function nextInLine(arr, item){
//	arr.push(item);
//	var removed = arr.shift();
//	return removed;
//}
//
//console.log("Original Array: " + JSON.stringify(myArray));
//console.log("Item removed: " + nextInLine(myArray, 10));
//console.log("Item added: " + myArray[4]);
//console.log("New Array: " + JSON.stringify(myArray));

function reverseString (str) {

	var newString = "";

	for (var i = str.length - 1; i >= 0; i--){
		newString += str[i];
	}
	return newString;
};

function stringToArray(str){

	var newArray = [];

	for (var i = 0; i < str.length; i++){
		newArray.push(str[i]);
	}
	return newArray.reverse();
};


function nextInLine2(arr, item){

	var added = arr.push(item);
	var removed = arr.shift();
	return removed;
};

console.log("Before: " + JSON.stringify(myArray));
console.log("This item was removed: " + nextInLine2(myArray, 10));
console.log("After: " + JSON.stringify(myArray));

function golfScore(par, strokes) {
	if (strokes === 1) {
		return "Hole-in-one!";
	}
	else if (strokes <= par - 2) {
		return "Eagle";
	}
	else if (strokes === par - 1) {
		return "Birdie";
	}
	else if (strokes === par) {
		return "Par";
	}
	else if (strokes === par + 1) {
		return "Bogey";
	}
	else if (strokes === par + 2) {
		return "Double Bogey";
	}
	else if (strokes >= par + 3) {
		return "Go Home Shitty Golf Player!";
	}
	else {
		return "Change me";
	}
};

function cc(card){

	switch (card){
		
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			score = score + 1;
			break;
		case 7:
		case 8:
		case 9:
			score = score + 0;
			break;
		case 10:
		case 'J':
		case 'Q':
		case 'K':
		case 'A':
			score = score - 1;
			break;

	};
	if (score <= 0) {
		return score + " Hold";
	}
	else if (score <= 5) {
		return score + " Bet";
	}
	else {
		return "Bust!";
	}
	
};

function resetScore() {
	score = 0;
	alert(score);
};

function showScore() {
	alert('Your score is: ' + score);
};

cc('J'); cc('K'); cc(2); cc(3)


var players = {

	12: "Jayson",
	13: "Lisa",
	14: "Mariah",
	15: "Nava"
}
var playerNumber = 16;

players[12] = "Jayson Thompson";
players[16] = "Colton";
players[16] = "Colton Costello";

delete players[12];
console.log(players[playerNumber]);

function addItemsInArray(arr){
	var total = 0;
	for (var i = 0; i < arr.length; i++){
		total += arr[i];
	}
	return total;
}

function checkObj(obj, checkProp){
	if (obj.hasOwnProperty(checkProp)){
		return obj[checkProp];
	}
	else {
		return "Not found";
	}
};
function phoneticLookup(val){
	var result = "";

	var lookup = {
		"alpha": "Adams",
		"bravo": "Boston",
		"charlie": "Chicago",
		"delta": "Denver",
		"echo": "Easy",
		"foxtrot": "Frank",
	}
	result = lookup[val];
	if (result != undefined){
		return result;
	}
	else {
		return "Not Found";
	}
}

function multiplyArray(arr){
	var product = 1;

	for (var i = 0; i < arr.length; i++){
		for(var j = 0; j < arr[i].length; j++){
			product *= arr[i][j];
		}
	}
	return product;
}

function whileLoop(){
	var myArray = [];
	var i = 0;

	while(i <= 5){
		myArray.push(i);
		i++;
	}
	return myArray
}
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(firstName, prop){
	for(var i = 0; i < contacts.length; i++){
		if(contacts[i].firstName === firstName){
			if(contacts[i].hasOwnProperty(prop)){
				return contacts[i][prop];
			}
			else {
				return "No such property";
			}
		}
	}
	return "No such contact";
}

function randomNumber0through9() {
	var randomNumber = Math.floor(Math.random() * 10);

	return randomNumber;
}

function randomFraction () {

	var decimal = Math.random();

	return decimal;

}

function randomNumber(min, max) {

	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var Car = function () {
	this.wheels = 4;
	this.engines = 1;
	this.seats =5;
}

var myCar = new Car();

var Motorcycle = function (seats, engines, wheels) {

	this.seats = seats;
	this.engines = engines;
	this.wheels = wheels;

}

var myMotorcycle = new Motorcycle(1, 2, 3);

function searchContacts(firstName, prop){

	for(var i = 0; i < contacts.length; i++){
		if(contacts[i].firstName === firstName)
			if (contacts[i].hasOwnProperty(prop)){
				return contacts[i][prop];
			}
			else{
				return "No property found";
			}
	}
	return "No contacts found";
};

var Vehicle = function (wheels, engine, seats) {
	this.wheels = wheels;
	this.engine = engine;
	this.seats = seats;
}

var Car = new Vehicle(4, 4, 6);





















