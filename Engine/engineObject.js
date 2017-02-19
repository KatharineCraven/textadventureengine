var EngineObject = class {
	
	constructor(name){
		this.refName = name.toLowerCase();
		this.objObjects = {};
		this.objProps = {};
		this.objFunctions = {};
	}

	addObject(objName, objObject){
		this.rmObjects[objName.toLowerCase()] = objObject;
	}

	addFunction(name, objFunction){
		this.objFunctions[name.toLowerCase()] = objFunction.bind(this);
	}

	callFunction(name, ...args){
		return this.objFunctions[name.toLowerCase()](args);
	}

	hasFunction(name){
		return this.objFunctions.hasOwnProperty(name.toLowerCase());
	}
}

var ENGINE_ObjectsList = {
	objectsList: {},
	loadObject: function(objToAdd){
		this.objectsList[objToAdd.refName] = objToAdd;
	}
};