var bob = new Object()
	bob.name = "Bob Smth";
	bob.age = 20;
	bob.setAge=function(newAge){
    	bob.age = newAge;
    };


bob.setAge(34);

bob.setAge
//console.log(bob.age);

//another one

var car = new Object();  //bject created
car.name = "Mazda";     //property name
car.price = "134560 euro"; // property price

//creating the function to change the price

car.setPrice=function(newPrice){
	car.price = newPrice;
	}


car.setPrice("10000 euro"); // calling the  function with the changed price

//console.log(car.price); //now  log to see if the  price is changed  or not 


//more method practise

var bob = new Object();
bob.age = 12;


//method 1

bob.setAge=function(newAge){
	bob.age = newAge;
}
bob.setAge(33);
//console.log(bob.age);


bob.getYearOfBirth=function(){
	return 2018 - bob.age;
}

 //console.log(bob.getYearOfBirth());


// using the this method



var bob = new Object();
bob.age = 30;
bob.setAge = function(newAge){
   this.age = newAge;
}
bob.setAge(40);

//console.log(bob.age);


//setAge method for more people(object)

var setAge = function(newAge){
   this.age = newAge;
}
var bob = new Object();
bob.age = 30;
bob.setAge = setAge;
bob.setAge(44);
//console.log(bob.age);

var susan = new Object();
susan.age=22;
susan.setAge=setAge;
susan.setAge(11);
//console.log(susan.age);



//creating own method 


var square = new Object();
square.height = 23;


square.setHeight = function(newHeight){
	this.setHeight = newHeight;
}

//now store the value  of the new square

square.setHeight(20)
;

//console.log(dds);

//console.log("The new height of the square is", square.height);


//Let's look at another method that calculates useful 
//information about an object

var square = new Object();
square.sideLength = 6;
square.calcPerimeter = function() {
  return this.sideLength * 4;
};
//  define an area method here

square.calcArea = function(){
	return this.sideLength * 2;
}


var p = square.calcPerimeter();
var a = square.calcArea();



//console.log(p);
//console.log(a);


//custom construction of an  object
function Person(name,age){
		this.name= name;
		this.age=age;
}


var nuba = new Person("nuba ali",22);

var ruba = new Person("nuba ",62);

//console.log(nuba,ruba);


//constructor with this

function Person(firstName,lastName,age){
	this.firstName =firstName;
	this.lastName= lastName;
	this.age=age;
	this.sepiens = "Homo Sepiens";
	this.fullName = function(){
		return this.firstName + this.lastName;
	}
}


var person1 = new Person("Rushdi" ,"hasan" ,29);
var person2 = new Person("Subit Das",33);


//console.log("this is " + person1.name + " " + "and"+ " " + person1.name + "  "  + "is" 
//	+person1.age+ "years old");
//console.log("The  sepiens of this man is " + person1.sepiens);

//constructor with methods

//console.log("The full name of person1 is " + person1.fullName());

function  Person(adjective){
	this.adjective = adjective;
	this.describeMySelf = function(){
		return "this man "+ " is " + this.adjective ;
	}
}

var javed = new Person("angry");

//console.log("javed is very " + javed.adjective);
//console.log("javed is very " + javed.describeMySelf());


//arrays of  objects

function Person(name,age){
	this.name = name;
	this.age=age;
}


var family = new Array();   // new array family  created

family[0] = new Person("rushdi hasan",22);


console.log(family[0]);













