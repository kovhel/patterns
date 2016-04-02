/**
 * Created by Elena on 02.04.2016.
 */
var BuilderNS = window.BuilderNS || {};
requirejs(["./js/builder/director"], function() {
    function showBuilderPattern() {
        var mobileDeviceSupplier = new BuilderNS.MobileDevicesSupplier(),
            appleBuilder = new BuilderNS.AppleBuilder(),
            hTCBuilder = new BuilderNS.HTCBuilder();

        var myIPhone = mobileDeviceSupplier.constructMobileDevice(appleBuilder),
            myHTC = mobileDeviceSupplier.constructMobileDevice(hTCBuilder),
            myLastIPhone = mobileDeviceSupplier.constructMobileDevice(appleBuilder);

        console.log(myIPhone);
        console.log(myHTC);
        console.log(myLastIPhone);
        console.log(myIPhone == myLastIPhone);
    }

    window.showBuilderPattern = showBuilderPattern;
});
