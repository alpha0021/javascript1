function Person(job,married){
	this.job = job;
	this.married = true;
	this.speak = function(){
		console.log("hi dear programmer");
	}

}


var imran = new Person("manager" , false);

imran.speak();