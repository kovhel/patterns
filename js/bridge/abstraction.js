requirejs(["./js/bridge/implementor"], function() {
	BridgeNS.IOSApiHelper = function(){
		this.launchInNewThread = function(module) {}
	};
	BridgeNS.OSApiHelper = function(OSImplementor){
		this.OSImplementor = OSImplementor;
		this.launchInNewThread = function(module) {
			module.thread = this.OSImplementor.createNewThread();
		}
	};
	BridgeNS.OSApiHelper.prototype = new BridgeNS.IOSApiHelper();
});
