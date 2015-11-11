var vegetable = function() {
    this.name = "Vegetable";
}

ClassA.prototype.print = function() {
    console.log(this.name + " is healthy for you");
}

var carrot = new ClassA();

carrot.print();