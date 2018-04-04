var james = {
	job:"driver",
	married:true,
	sayJob:function(job){
		console.log("hi i work as a"+ " " + this.job);
	}
}

james.sayJob();


//change the property of an object

james.job = "teacher";

//calling the  function again


james.sayJob();