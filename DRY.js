function Animal(name,numLegs){
	this.name = name;
	this.numLegs = numLegs;
}



Animal.prototype.sayName = function(){
	console.log("Hi i am " + this.name);
}



function Penguin(name,numLegs){
	this.name = name;
	this.numLegs = 2;
}



Penguin.prototype = new Animal();


var dimba = new Penguin('gamni',2);


dimba.sayName();
