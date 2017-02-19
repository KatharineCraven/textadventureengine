var ENGINE_consoleParser = {
	takeInput: function(consoleInput){
		var consoleOutput = "";

		if(trimInput){
			consoleInput = consoleInput.trim();
		}
		if(caseInsensitiveInput){
			consoleInput = consoleInput.toLowerCase();
		}

		var inputArray = consoleInput.split(" ");

		if(ENGINE_global.activeRoom.hasFunction(inputArray[0])){ //Checks Room Function
			consoleOutput = ENGINE_global.activeRoom.callFunction(inputArray[0], consoleInput);
		}
		else if (ENGINE_global.activeRoom.hasObjectWithFunction(inputArray[1], inputArray[0])){ //Checks Objects in Room
			consoleOutput = ENGINE_global.activeRoom.callObjectFunction(inputArray[1], inputArray[0], consoleInput);
		}
		else if(ENGINE_global.hasFunction(inputArray[0])){ //Checks Global Function
			consoleOutput = ENGINE_global.callFunction(inputArray[0], consoleInput);
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