/** File for user-defined objects **/

var userObjects = {
	
	setObjects: function(){
		var candlestick = new EngineObject("candlestick");
		var burn = function(consoleInput){
			return "You burn the " + this.refName;
		};

		candlestick.addFunction("burn", burn);
		ENGINE_ObjectsList.loadObject(candlestick);

		var firewood = new EngineObject("firewood");
		firewood.addFunction("burn", burn);		
		ENGINE_ObjectsList.loadObject(firewood);

	}

}


