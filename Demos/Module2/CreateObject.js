// first we will look at creating an object with object literals

var myGrades = {}; // this is an empty object but because there are brackets
                   // this is still considered an object

// this is an object made using object literals and different data types
var collegeAlgebra = {
	level: "freshman",
	difficulty: "hard",
	expectedGrade: 98,
	
	textbookName: function(){
		console.log("College Algebra for Freshman will be rquired");
	}
}

console.log(collegeAlgebra);
collegeAlgebra.textbookName();


//next we will explore creating an object using the object constructor

var collegeAlg = new Object();
collegeAlg.level = "freshman";
collegeAlg.difficulty = "hard";
collegeAlg.expectedGrade = 98;
collegeAlg.textbookName = function(){
	console.log("College Algebra for Freshman will be rquired");
}

console.log(collegeAlg);
collegeAlg.textbookName();