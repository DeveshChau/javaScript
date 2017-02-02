document.getElementById("addition").onclick = function(){
	var displayOne = document.getElementById("display").value;
	inputOne = parseInt(displayOne); 	
	document.getElementById("display").value = "0";
	var displayTwo = document.getElementById("display").value;
	inputTwo = parseInt(displayOne);
	var answer = inputTwo + inputOne;
	document.getElementById("calculate").onclick = function (answer) {
		document.getElementById("display").value = answer;
	}
};
