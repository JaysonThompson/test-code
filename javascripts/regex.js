var reSSN = new RegExp('^[0-9]{3}[\- ]?[0-9]{2}[\- ]?[0-9]{4}$');
var rePhone = /^\(\d{3}\) ?\d{3}( |-)?\d{4}|^\d{3}( |-)?\d{3}( |-)?\d{4}$/;


function checkssn(ssn){
	if(reSSN.test(ssn)){
		alert('Valid SSN');
	}
	else{
		alert('Invalid SSN');
		return false;
	}
}
function checkPhone(phone){
	if(rePhone.test(phone)){
		alert('Valid phone');
	}
	else{
		alert('Invalid phone');
	}
}