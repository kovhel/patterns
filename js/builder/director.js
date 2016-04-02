/**
 * Created by Elena on 02.04.2016.
 */
requirejs(["./js/builder/concreteBuilder", "./js/builder/product"], function() {
    BuilderNS.MobileDevicesSupplier = function() {
        this.constructMobileDevice = function (mobileBuilder) {
            mobileBuilder.buildDisplay();
            mobileBuilder.buildProcessor();
            mobileBuilder.buildMemoryBlock();
            return mobileBuilder.getMobileDevice();
        }
    };
});
