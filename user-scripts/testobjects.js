/** File for user-defined objects **/

var userObjects = {
	
	setObjects: function(){
		var candlestick = new EngineObject("candlestick");
		var burn = function(consoleInput){
			return "You burn the " + this.refName;
		};

		var town = new EngineRoom("town");

		candlestick.addFunction("burn", burn);
		town.addObject("candlestick", candlestick);

		var firewood = new EngineObject("firewood");
		firewood.addFunction("burn", burn);		
		town.addObject("firewood", firewood);
		ENGINE_global.loadRoom("town", town);
	}

}


