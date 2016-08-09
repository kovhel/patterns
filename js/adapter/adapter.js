requirejs(["./js/adapter/adaptee"], function() {
	AdapterNS.EventListener = function(){
		this.add = function(element, eventName, handler){
			if (element.addEventListener ) {
				AdapterNS.ModernBrowserEventListener.addEventListener(element, eventName, handler);
			} else if (element.attachEvent) {
				AdapterNS.EarlyIEEventListener.attachEvent(element, eventName, handler);
			}
		};
	};
});
