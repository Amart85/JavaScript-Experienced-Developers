//DEMO 1

var x = 3;

function numSquared(x){
	return x*x;
}

var sentence = "The square of " + x + " is " + numSquared(x); 
//unlike other ooj langauges the function can be used to build a variable

console.log(sentence); // "The square of 3 is 9"

// Sidenote:
// Just like other ooj languages, functions can be used to define an variable

var num = numSquared(6);
console.log(num); //36