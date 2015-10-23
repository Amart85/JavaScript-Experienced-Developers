function Fruit(name, color){ 
	console.log("Object created by constructor");
	
	this.type = function(){
		console.log("Hi I am fruit");
	} 
	this.name = name;
	this.color = color;
	
}

var orange = new Fruit("orange", "orange");

console.log(orange);
orange.type();

// Prototyping starts off with have a constructor
// like the one we just created

/*Lets start with adding a new property*/

Fruit.prototype.seeds = false;

console.log(orange);
orange.seeds = true;


console.log(orange);