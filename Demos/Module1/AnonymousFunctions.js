/* Here I will present the different types of Anonymous Functions */

//function expression
var sayHi = function(){
	alert("hello");
};

// in an object
var Pony = {
	sayName: function(){
		alert("My name is Pony");
	}
};

// event handler
$("p").click = function(){
	alert("hello");
};

// self invoking functions
((function(){
	alert("hello");
})());