/** File for user-defined objects **/

var mmpObjects = {
	
	setObjects: function(){
		var kid = new EngineObject("kid");
		var doll = new EngineObject("doll");
		var town = new EngineRoom("town");
		var inventory = new EngineRoom("inventory");
		var unreachable = new EngineRoom("unreachable");

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
		ENGINE_global.loadRoom("town", town);

		var rustyKnife= new EngineObject("rustyKnife");
		rustyKnife.description = "A rusty knife.";
		rustyKnife.addFunction("examine", examine);

		var outtaScope = new EngineObject("outtaScope");
		outtaScope.description = "Can't touch this.";
		outtaScope.addFunction("examine", examine);

		inventory.addObject("knife", rustyKnife);
		unreachable.addObject("doop", outtaScope);

		ENGINE_global.loadRoom("inventory", inventory);
		ENGINE_global.loadRoom("unreachable", unreachable);

	}

}


