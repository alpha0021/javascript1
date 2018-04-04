//changing  the prototype of the class

function Person(name){
	this.name = name;
}



var me = new Person('rushdi hasan'); // object 1

Person.prototype.smile = function(){  //changed prototype of the class
	console.log('loudly');
}


me.smile();


var he = new Person('nasrul kadir sunny'); //object 2
he.smile();