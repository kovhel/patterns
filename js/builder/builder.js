/**
 * Created by Elena on 02.04.2016.
 */
define(function(){
    BuilderNS.MobileBuilder = function(){
        this._mobileDevice = new BuilderNS.MobileDevice();

        this.getMobileDevice = function(){
            var mobileDevice = this._mobileDevice;
            this._mobileDevice = new BuilderNS.MobileDevice();
            return mobileDevice;
        };

        this.buildDisplay = function() {};
        this.buildProcessor = function() {};
        this.buildMemoryBlock = function() {};
    };
});
