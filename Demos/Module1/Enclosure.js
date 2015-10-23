// This first example shows how enclosures can be called after other functions have

function celebrityName (firstName) {	
	var nameIntro = "This celebrity is ";

	function lastName (theLastName) {
		console.log( nameIntro + firstName + " " + theLastName);
	}
	
	return lastName;
}
	
var mjName = celebrityName ("Gabrielle"); // The celebrityName outer function has returned. 
mjName("Crevecoeur"); // This celebrity is Gabrielle Crevecoeur
	
// The enclosure (lastName) is called here after the outer function has returned above 
// Yet, the closure still has access to the outer function's variables and parameter 
// If you were to comment out the last line, the enclosure will never be envoked.






/* DEMO on variables by reference */


function theLocation(){
	var city = "San Francisco";
	
	return {
		get: function() {console.log(city);},
		set: function(newCity) {city = newCity;}
	};
}

var myPlace = theLocation();

myPlace.get();
myPlace.set("Oakland");
myPlace.get();

