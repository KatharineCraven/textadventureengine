function takeInput(){
	var consoleInput = $("#userInput").val();
	var consoleOutput = "";

	if(trimInput){
		consoleInput = consoleInput.trim();
	}
	if(caseInsensitiveInput){
		consoleInput = consoleInput.toLowerCase();
	}

	var inputArray = consoleInput.split(" ");

	if(inputArray[0] == "burn"){
		consoleOutput = burn();
	}else if(inputArray[0] == "test"){
		consoleOutput = testEcho(consoleInput);
	}else{
		consoleOutput = badInputHandler(consoleInput);
	}

	$("#console").append(consoleOutput+"\n"); 
	$("#userInput").val("");
}

function defaultCmndNotFound(consoleInput){
	return "Command Not Found -- \""+consoleInput+"\"";
}