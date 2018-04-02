var rushdi = {
	firstName:"rushdi",
	lastName:"hasan",
	phoneNumber:3456778890,
	email:"rushdincb@gmail.com"
}


var nader  = {
	firstName:"nader",
	lastName:"khan",
	phoneNumber:3456278890,
	email:"naderkhan@gmail.com"
}


var contacts = [rushdi,nader];


function printPerson(person){
	console.log(person.firstName + " " + person.lastName);
}


function list(){
	var contactsLength = contacts.length;
	
	for(var i = 0 ; i < contactsLength; i ++){
		printPerson(contacts[i]);
	}
}


list();



//creating objects and add that  to the existing array

function add(firstName,lastName,phoneNumber,email){
		contacts[contacts.length]={
			firstName:firstName,
			lastName:lastName,
			phoneNumber:phoneNumber,
			email : email
		}

}

add("najrul","kadir",324556756,"rushdincb@gmail.com");

list();