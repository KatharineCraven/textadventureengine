var EngineObject = class {
	
	constructor(name){
		this.refName = name;
		this.objObjects = [];
		this.objProps = {};
		this.objFunctions = {};
	}

	addObject(objObject){
		this.objObjects.push(objObject);
	}

	addFunction(name, objFunction){
		this.objFunctions[name] = objFunction.bind(this);
	}

	callFunction(name, ...args){
		return this.objFunctions[name](args);
	}

	hasFunction(name){
		return this.objFunctions.hasOwnProperty(name);
	}
}

var ENGINE_ObjectsList = {
	objectsList: {},
	loadObject: function(objToAdd){
		this.objectsList[objToAdd.refName] = objToAdd;
	}
};