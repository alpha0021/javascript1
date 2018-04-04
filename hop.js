var kingsman = {
	blezzer:'england'
}


if(kingsman.hasOwnProperty('pants')){
	console.log(kingsman.pants);
}else{
	kingsman.pant = "sweden";
	console.log(kingsman.pant);
}