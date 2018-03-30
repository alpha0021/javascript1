var harryPotter = new Object();

harryPotter.pages = 330 ;
harryPotter.author = "j.k. rowling";

//custom constructor


function Book (page,author,stall){
	this.page = page ;
	this.author = author;
	this.stall = stall;
}


var himu = new Book (222, "humayun ahmed" , "sheba prokashoni");

var stallName = himu["stall"];

console.log(himu);
console.log(himu.author);
console.log(stallName);