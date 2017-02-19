var ENGINE_global = {
	userVars: {},
	functList: {},
	activeRoom: new EngineRoom("default"),
	inventory: new EngineRoom("default"),
	passiveRooms: {},

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

	setActiveRoom: function(rmName){
		this.activeRoom = this.passiveRooms[rmName.toLowerCase()];
		delete this.passiveRooms[rmName.toLowerCase()];
	},

	setInventory: function(rmName){
		this.passiveRooms[this.activeRoom.refName.toLowerCase()] = this.inventory;
		this.inventory = this.passiveRooms[rmName.toLowerCase()];
		delete this.passiveRooms[rmName.refName.toLowerCase()];
	},

	switchActiveRoom: function(rmName){
		this.passiveRooms[this.activeRoom.refName.toLowerCase()] = this.activeRoom;
		this.activeRoom = this.passiveRooms[rmName.toLowerCase()];
		delete this.passiveRooms[rmName.toLowerCase()];
	},

	loadRoom: function(rmName, room){
		this.passiveRooms[rmName.toLowerCase()] = room;
	}
}