function testEcho(){
	var consoleInput = document.getElementById("userInput").value;

	if(trimInput){
		consoleInput = consoleInput.trim();
	}
	if(caseInsensitiveInput){
		consoleInput = consoleInput.toLowerCase();
	}

	document.getElementById("console").innerHTML +=consoleInput+"\n";
	document.getElementById("userInput").value = "";
}