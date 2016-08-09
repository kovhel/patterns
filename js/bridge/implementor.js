define(function() {
	BridgeNS.IThreadCreator = function() {
		this.createNewThread = function(){};
	};

	BridgeNS.LinuxThreadCreator = function() {
		this.createNewThread = function(){
			console.log("pthread_create()");
			return "linux thread";
		};
	};
	BridgeNS.LinuxThreadCreator.prototype = new BridgeNS.IThreadCreator();

	BridgeNS.WindowsThreadCreator = function() {
		this.createNewThread = function(){
			console.log("CreateThread()");
			return "windows thread";
		};
	};
	BridgeNS.WindowsThreadCreator.prototype = new BridgeNS.IThreadCreator();
});