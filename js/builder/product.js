/**
 * Created by Elena on 02.04.2016.
 */
define(function() {
    BuilderNS.MobileDevice = function() {
        this._display = "";
        this._processor = "";
        this._memory = 0;

        this.setDisplay = function (displayModel) {
            this._display = displayModel;
        };
        this.setProcessor = function (processorModel) {
            this._processor = processorModel;
        };
        this.setMemoryVolume = function (memoryGb) {
            this._memory = memoryGb;
        };
    };
});
