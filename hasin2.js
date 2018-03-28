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
console.log(bob.age);


bob.getYearOfBirth=function(){
	return 2018 - bob.age;
}

 
console.log(bob.getYearOfBirth());


