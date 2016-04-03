var consoleParser = {
	takeInput: function(consoleInput){
		//var consoleInput = ;
		var consoleOutput = "";

		if(trimInput){
			consoleInput = consoleInput.trim();
		}
		if(caseInsensitiveInput){
			consoleInput = consoleInput.toLowerCase();
		}

		var inputArray = consoleInput.split(" ");

		if(genFunction.hasOwnProperty(inputArray[0])){
			consoleOutput = genFunction[inputArray[0]](consoleInput);
		}else{
			consoleOutput = badInputHandler(consoleInput);
		}

		$("#console").append(consoleOutput+"\n"); 
		$("#userInput").val("");
	},

	defaultCmndNotFound: function(consoleInput){
		return "Command Not Found -- \""+consoleInput+"\"";
	}
};