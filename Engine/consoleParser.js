function testEcho(){
	var consoleInput = $("#userInput").val();

	if(trimInput){
		consoleInput = consoleInput.trim();
	}
	if(caseInsensitiveInput){
		consoleInput = consoleInput.toLowerCase();
	}

	$("#console").append(consoleInput+"\n"); 
	$("#userInput").val("");
};