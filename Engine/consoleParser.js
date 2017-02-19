var ENGINE_consoleParser = {
	parsingMapper: {},

	setParsingMapper: function(pMapper){
		this.parsingMapper = pMapper;
	},

	takeInput: function(consoleInput){
		var consoleOutput = "";

		if(trimInput){
			consoleInput = consoleInput.trim();
		}
		if(caseInsensitiveInput){
			consoleInput = consoleInput.toLowerCase();
		}

		var inputArray = this.mapParsingText(consoleInput);

		if(ENGINE_global.activeRoom.hasFunction(inputArray[0])){ //Checks Room Function
			consoleOutput = ENGINE_global.activeRoom.callFunction(inputArray[0], consoleInput);
		}
		else if(ENGINE_global.inventory.hasFunction(inputArray[0])){
			consoleOutput = ENGINE_global.inventory.callFunction(inputArray[0], consoleInput);
		}
		else if (inputArray.length >= 2){ //Checks Objects in Room
			if(ENGINE_global.activeRoom.hasObjectWithFunction(inputArray[1], inputArray[0])){
				consoleOutput = ENGINE_global.activeRoom.callObjectFunction(inputArray[1], inputArray[0], consoleInput);
			}
			else if(ENGINE_global.inventory.hasObjectWithFunction(inputArray[1], inputArray[0])){
				consoleOutput = ENGINE_global.inventory.callObjectFunction(inputArray[1], inputArray[0], consoleInput);
			}
			else{
				consoleOutput = badInputHandler(consoleInput);
			}
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
	},

	mapParsingText: function(consoleInput){
		var mapNames = Object.keys(this.parsingMapper);
		var mapStrings = Object.values(this.parsingMapper);
		var inArray = consoleInput.split(" ");

		for(var i=0; i<mapNames.length; i++){
			var s = mapStrings[i];
			var parsingIndex = s.lastIndexOf("!*(");
			var endParsingIndex = s.lastIndexOf(")len");
			var stringToMatch = s.substring(0, parsingIndex).trim();

			var stringBreaker = stringToMatch.split(" ");
			var parsingPositions = s.substring((parsingIndex+3), (endParsingIndex)).split(",");
			var matchLength = parseInt(s.substring((endParsingIndex+4), s.length));

			var matchesPattern = false;
			if(inArray.length == matchLength){
				for(var j=0; j< parsingPositions.length; j++){
					var posChker = parsingPositions[j];
					if(stringBreaker[posChker] === inArray[posChker]){
						matchesPattern = true;
					}else{
						matchesPattern = false;
					}
				}
			}

			//if we match a pattern, return pattern split
			if(matchesPattern){
				var outString = mapNames[i];
				if (outString.includes("_")){
					outString = outString.substring(0, outString.indexOf("_"));
				}

				for(var k = 0; k< inArray.length; k++){
					var canAdd = true;
					for(var z=0; z< parsingPositions.length; z++){
						if(k == parseInt(parsingPositions[z])){
							canAdd = false;
							break;
						}
					}

					if(canAdd){
						outString = outString+ " " + inArray[k];
					}
				}
				return outString.split(" ");
			}
		}

		//otherwise returns split consoleInput as usual
		return inArray;
	}

};

