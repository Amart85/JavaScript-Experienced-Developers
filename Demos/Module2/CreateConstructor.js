function Fruit(/*name, color*/){ // this could have also been typed as an anonymous function,var Fruit = function()
	//just like constructors in other languages, you can pass
	//in values for instantiation
	console.log("Object created by constructor");
	
	//lets starts with a simple function
	this.type = function(){
		console.log("Hi I am fruit");
	} 
	
	//Lets add some properties
	//Do this second
	/*this.name = name;
	this.color = color;*/
	
}

var orange = new Fruit(/*"orange", "orange"*/);

console.log(orange);
orange.type();

//Notice the differences between creating an object and a constructor
// The constructor does not use the object literal notation!
// Also note that dot or bracket notation will work when creating 
// properties in the constructor