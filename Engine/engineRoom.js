var EngineRoom = class{
	constructor(name){
		this.refName = name;
		this.rmObjects = {};
		this.rmFunctions = {};
	}

	hasObject(objName){
		return this.rmObjects.hasOwnProperty(objName);
	}

	getObject(objName){
		return this.rmObjects[objName];
	}

	hasFunction(functName){
		return this.rmFunctions.hasOwnProperty(functName);
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
		return this.rmFunctions[functName](args);
	}

	addObject(objName, aObject){
		this.rmObjects[objName] = aObject;
	}

	removeObject(objName){
		delete this.rmObject[objName];
	}

	removeFunction(functName){
		delete this.rmFunctions[functName];
	}

	transferObject(objectName, actualObject, toRoom){
		toRoom.addObject(objectName, actualObject);
		this.removeObject(objectName);
	}	
}
