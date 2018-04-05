//class 1


function Animal(name,numLegs){
	this.name = name;
	this.numLegs = numLegs;
}


//creating method of the class


Animal.prototype.sayName = function(){
	console.log("Hi my name is " + this.name);
}

var tiger = new Animal('Tomas' ,33);


tiger.sayName();


//class 2 


function Penguin(name , numLegs){
	this.name = name ;
	this.numLegs = numLegs;
}


Penguin.prototype.sayName = function(){
	console.log("howdy partner ! my name is " + this.name + 'and ' + 'my number of leg  is ' + this.numLegs);

}


var anisha = new Penguin('gulus pugus' , 2);

anisha.sayName();