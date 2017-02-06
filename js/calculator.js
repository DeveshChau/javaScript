var displayOne;
var displayTwo;
var answer;
var inputOne;
var inputTwo;
window.onload = function(){
	document.getElementById("display").focus();
};
document.getElementById("addition").onclick = function(){	
	displayOne = document.getElementById("display").value;	
	inputOne = parseInt(displayOne); 	
	document.getElementById("display").value = "";	
	document.getElementById("display").focus();
	document.getElementById("calcutate").onclick = function(){	
	displayTwo = document.getElementById("display").value;		
	inputTwo = parseInt(displayTwo);
	answer = parseInt(inputOne + inputTwo);	
	document.getElementById("display").value = answer;	
}};
document.getElementById("subtraction").onclick = function(){	
	displayOne = document.getElementById("display").value;	
	inputOne = parseInt(displayOne); 	
	document.getElementById("display").value = "";	
	document.getElementById("display").focus();
	document.getElementById("calcutate").onclick = function(){	
	displayTwo = document.getElementById("display").value;		
	inputTwo = parseInt(displayTwo);
	answer = parseInt(inputOne - inputTwo);	
	document.getElementById("display").value = answer;	
}};
document.getElementById("multiplication").onclick = function(){	
	displayOne = document.getElementById("display").value;	
	inputOne = parseInt(displayOne); 	
	document.getElementById("display").value = "";	
	document.getElementById("display").focus();
	document.getElementById("calcutate").onclick = function(){	
	displayTwo = document.getElementById("display").value;		
	inputTwo = parseInt(displayTwo);
	answer = parseInt(inputOne * inputTwo);	
	document.getElementById("display").value = answer;	
}};
document.getElementById("division").onclick = function(){	
	displayOne = document.getElementById("display").value;	
	inputOne = parseInt(displayOne); 	
	document.getElementById("display").value = "";	
	document.getElementById("display").focus();
	document.getElementById("calcutate").onclick = function(){	
	displayTwo = document.getElementById("display").value;		
	inputTwo = parseInt(displayTwo);
	answer = parseInt(inputOne / inputTwo);	
	document.getElementById("display").value = answer;	
}};