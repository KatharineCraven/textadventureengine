/**File for user-defined commands. All commands MUST take in consoleInput and return something to be outputted to the console.**/
var genFunction = {
	test: function(consoleInput){
		return consoleInput;
	},

	burnIt: function (consoleInput){
		ENGINE_global.userVars.fireStart++;
		return "We didn't start the fire x"+ENGINE_global.userVars.fireStart;
	}
}
