function Person(name,age){
	this.name= name;
	this.age =age;
}


function printPersonAge(p){
	console.log(p.age);
}



var sunny = new Person('nasrul kadir ',33);

printPersonAge(sunny);