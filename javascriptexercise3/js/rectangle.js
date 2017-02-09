var button = document.getElementById("display");
button.onclick = function(){	
	if (button.innerHTML == "Hide"){
		document.getElementById("rectangle").style.display = "none";
		button.innerHTML = "Show";
		button.style.background = "#4CAF50"
	}
	else{
		document.getElementById("rectangle").style.display = "block";
		button.innerHTML = "Hide";	
		button.style.background = "#ff3333"	
	}	
}