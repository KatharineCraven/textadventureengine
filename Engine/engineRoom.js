var EngineRoom = class{
	constructor(name){
		this.refName = name;
		this.rmObjects = {};
		this.rmFunctions = {};
	}

	hasObject(objName){
		return this.rmObjects.hasOwnProperty(objName.toLowerCase());
	}

	getObject(objName){
		return this.rmObjects[objName.toLowerCase()];
	}

	hasFunction(functName){
		return this.rmFunctions.hasOwnProperty(functName.toLowerCase());
	}

	hasObjectWithFunction(objName, functName){
		if(this.hasObject(objName)){
			return this.getObject(objName).hasFunction(functName);
		}
		return false;
	}

	callObjectFunction(objName, functName, ...args){
		return this.getObject(objName).callFunction(functName, args);
	}

	callFunction(functName, ...args){
		return this.rmFunctions[functName.toLowerCase()](args);
	}

	addObject(objName, aObject){
		this.rmObjects[objName.toLowerCase()] = aObject;
	}

	removeObject(objName){
		delete this.rmObject[objName.toLowerCase()];
	}

	removeFunction(functName){
		delete this.rmFunctions[functName.toLowerCase()];
	}

	transferObject(objectName, toRoom){
		toRoom.addObject(objectName, this.getObject(objectName));
		this.removeObject(objectName);
	}	
}
