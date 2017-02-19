/** File for user-defined objects **/

var mmpObjects = {
	
	setObjects: function(){
		var kid = new EngineObject("kid");
		var doll = new EngineObject("doll");
		var town = new EngineRoom("town");

		kid.description = "Maybe you can talk";

		var talk = function(consoleInput){
			return "You talk to the kid... Nothing happens.";
		};

		var examine = function(consoleInput){
			return this.description;
		}

		kid.addFunction("talk", talk);
		kid.addFunction("examine", examine);
		town.addObject("kid", kid);

		doll.description = "An Arlene doll";
		doll.addFunction("examine", examine);

		town.addObject("doll", doll);
		ENGINE_global.setActiveRoom(town);
	}

}


