var ENGINE_global = {
	userVars: {},
	functList: {},
	activeRoom: new EngineRoom("default"),

	loadUserVars: function(userDefinedVarObject){
		var objNames = Object.keys(userDefinedVarObject);

		for(var i=0; i< objNames.length; i++){
			var objName = objNames[i];
			this.userVars[objName] = userDefinedVarObject[objName];
		}		
	},

	addFunctionToList: function(functRefName, globalFunction){
		this.functList[functRefName.toLowerCase()] = globalFunction;
	},

	addFunctionsToList: function(functObject){
		var propNames = Object.keys(functObject);

		for(var i=0; i< propNames.length; i++){
			var name = propNames[i];
			this.functList[name.toLowerCase()] = functObject[name];
		}

	},

	hasFunction: function(functName){
		return this.functList.hasOwnProperty(functName.toLowerCase());
	},

	callFunction: function(functName, ...args){
		return this.functList[functName.toLowerCase()](args);
	},

	setActiveRoom: function(activeRM){
		this.activeRoom = activeRM;
	}
}