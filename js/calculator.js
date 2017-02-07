var displayOne;
var displayTwo;
var answer;
var inputOne;
var inputTwo;
window.onload = function(){
	document.getElementById("display").focus();
};
function getValueOne(){
	displayOne = document.getElementById("display").value;	
	inputOne = parseInt(displayOne); 	
	document.getElementById("display").value = "";	
	document.getElementById("display").focus();
};
function getValueTwo(){
	displayTwo = document.getElementById("display").value;		
	inputTwo = parseInt(displayTwo);
};
function setValue() {
	document.getElementById("display").value = answer;
};
document.getElementById("addition").onclick = function(){	
	getValueOne();
	document.getElementById("calcutate").onclick = function(){	
	getValueTwo();
	answer = parseInt(inputOne + inputTwo);	
	setValue();
}};
document.getElementById("subtraction").onclick = function(){	
	getValueOne();
	document.getElementById("calcutate").onclick = function(){	
	getValueTwo();
	answer = parseInt(inputOne - inputTwo);	
	setValue();
}};
document.getElementById("multiplication").onclick = function(){	
	getValueOne();
	document.getElementById("calcutate").onclick = function(){	
	getValueTwo();
	answer = parseInt(inputOne * inputTwo);	
	setValue();
}};
document.getElementById("division").onclick = function(){	
	getValueOne();
	document.getElementById("calcutate").onclick = function(){	
	getValueTwo();
	answer = parseInt(inputOne / inputTwo);	
	setValue();
}};