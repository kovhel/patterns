define(function() {
	AdapterNS.EarlyIEEventListener = new (function(){
		this.attachEvent = function(element, eventName, handler){
			element.attachEvent("on" + eventName, handler);
		};
	})();
	AdapterNS.ModernBrowserEventListener = new (function() {
		this.addEventListener = function (element, eventName, handler) {
			element.addEventListener(eventName, handler);
		}
	})();
});