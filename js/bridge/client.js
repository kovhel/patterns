
var BridgeNS = BridgeNS || {};
requirejs(["./js/bridge/abstraction"], function() {
    function showBridge(){
        var osHelperImplementor = null;
        // detect OS
        if(navigator.platform.toLowerCase().indexOf('win') >= 0) {
            osHelperImplementor = new BridgeNS.WindowsThreadCreator();
        } else {
            osHelperImplementor = new BridgeNS.LinuxThreadCreator();
        }
        var osHelper = new BridgeNS.OSApiHelper(osHelperImplementor);
        var module = { handler: function(){}, thread: "" };
        osHelper.launchInNewThread(module);
        console.log(module);
    }

    window.showBridge = showBridge;
});
