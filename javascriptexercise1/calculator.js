function addition (){	
	document.getElementById("answer").value = 
	parseInt(document.getElementById("firstNumber").value) +
	parseInt(document.getElementById("secondNumber").value);	
}
function subtraction(argument) {
	document.getElementById("answer").value = 
	parseInt(document.getElementById("firstNumber").value) -
	parseInt(document.getElementById("secondNumber").value);
}
function multiplication(argument) {
	document.getElementById("answer").value = 
	parseInt(document.getElementById("firstNumber").value) *
	parseInt(document.getElementById("secondNumber").value);
}
function division(argument) {
	document.getElementById("answer").value = 
	parseInt(document.getElementById("firstNumber").value) /
	parseInt(document.getElementById("secondNumber").value);
}