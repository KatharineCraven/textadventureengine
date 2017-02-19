var EngineObject = class {
	
	constructor(name){
		this.refName = name.toLowerCase();
		this.objObjects = {};
		this.objProps = {};
		this.objFunctions = {};
	}

	addObject(objName, objObject){
		this.objObjects[objName.toLowerCase()] = objObject;
	}

	getObject(objName){
		this.objObjects[objName.toLowerCase()];
	}

	removeObject(objName){
		delete this.objObjects[objName.toLowerCase()];
	}

	transferObject(objName, toObject){
		toObject.addObject(objName, this.getObject(objName));
		this.removeObject(objName);
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