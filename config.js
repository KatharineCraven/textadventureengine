/**Names of variables in these files are not to be changed, only the values for configuration.**/

//when set to true, input will be parsed to all lower-case for checking and handling
var caseInsensitiveInput = true;
//when set to true, trims leading and trailing whitespace
var trimInput = true;


/**Function names and parameters cannot be changed, but the internal function may be changed**/

//default handling of invalid input. Currently has an engine-defined default.
function badInputHandler(consoleInput){
	return consoleParser.defaultCmndNotFound(consoleInput);
};