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
document.getElementById("display").onkeypress = function(event){
	
	if (event.which == 43 || event.which == 45
		|| event.which == 42 || event.which == 47){
		getValueOne();				
	}
	if (event.which == 13){
		displayTwo = document.getElementById("display").value;
		var x = displayTwo[0];
		switch(x){
			case "+" :					
				displayTwo = displayTwo.slice(1);			
				inputTwo = parseInt(displayTwo);
				answer = parseInt(inputOne + inputTwo);
				setValue();
				break;
			case "-" :
				displayTwo = displayTwo.slice(1);			
				inputTwo = parseInt(displayTwo);
				answer = parseInt(inputOne - inputTwo);
				setValue();
				break;
			case "*" :
				displayTwo = displayTwo.slice(1);			
				inputTwo = parseInt(displayTwo);
				answer = parseInt(inputOne * inputTwo);
				setValue();
				break;
			case "/" :
				displayTwo = displayTwo.slice(1);			
				inputTwo = parseInt(displayTwo);
				answer = parseInt(inputOne / inputTwo);
				setValue();
				break

		}
	}	
};