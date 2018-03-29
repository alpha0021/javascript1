function Person(name,age){
	this.name = name;
	this.age=age;
}


var family = new Array();   // new array family  created

family[0] = new Person("rushdi hasan",22);
family[1] = new Person("duruvashan damodaran" ,22);
family[2] = new Person("nasrul kadir sunny" ,122);
family[3] = new Person("rajiv saha" ,29);


//creating the  for loop



for(var i = 0 ; i < family.length ; i++){
	console.log(family[i]);
}

