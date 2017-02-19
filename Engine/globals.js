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
		this.functList[functRefName] = globalFunction;
	},

	addFunctionsToList: function(functObject){
		var propNames = Object.keys(functObject);

		for(var i=0; i< propNames.length; i++){
			var name = propNames[i];
			this.functList[name] = functObject[name];
		}

	},

	hasFunction: function(functName){
		return this.functList.hasOwnProperty(functName);
	},

	callFunction: function(functName, ...args){
		return this.functList[functName](args);
	},

	setActiveRoom: function(activeRM){
		this.activeRoom = activeRM;
	}
}