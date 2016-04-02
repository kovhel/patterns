/**
 * Created by Elena on 02.04.2016.
 */
requirejs(["./js/builder/builder"], function() {
    BuilderNS.AppleBuilder = function() {
        this.buildDisplay = function () {
            this._mobileDevice.setDisplay("Gorilla Glass 3");
        };
        this.buildProcessor = function () {
            this._mobileDevice.setProcessor("A9");
        };
        this.buildMemoryBlock = function () {
            this._mobileDevice.setMemoryVolume(1);
        };
    };

    BuilderNS.AppleBuilder.prototype = new BuilderNS.MobileBuilder();

    BuilderNS.HTCBuilder = function() {
        this.buildDisplay = function () {
            this._mobileDevice.setDisplay("Gorilla Glass 4");
        };
        this.buildProcessor = function () {
            this._mobileDevice.setProcessor("Qualcomm Snapdragon 801");
        };
        this.buildMemoryBlock = function () {
            this._mobileDevice.setMemoryVolume(2);
        };
    };

    BuilderNS.HTCBuilder.prototype = new BuilderNS.MobileBuilder();
});
