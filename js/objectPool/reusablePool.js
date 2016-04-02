/**
 * Created by Elena on 02.04.2016.
 */
define(function() {
    ObjectPoolNS.AudioContextsPool = (function(){
        var instance = null;
        function AudioContextsPool(){
            var audioContextsAvailability = [];
            var audioContextsInstances = [];
            var pendingRequests = [];
            var MAX_NUMBER = 6;
            this.acquireAudioContext = function(handler){
                if(audioContextsInstances.length === 0){
                    return createContext();
                } else {
                    for(var i = 0, length = audioContextsAvailability.length; i < length; ++i){
                        if(audioContextsAvailability[i] === true){
                            audioContextsAvailability[i] = false;
                            console.log("Returning unused object " + i + " " + Date.now().toString());
                            return audioContextsInstances[i];
                        }
                    }
                    if(length < MAX_NUMBER){
                        return createContext();
                    } else {
                        if(handler && {}.toString.call(handler) === '[object Function]'){
                            pendingRequests.push(handler);
                        }
                        console.log("No available objects, cannot create new one" + " " + Date.now().toString());
                        return null;
                    }
                }
            };
            this.releaseAudioContext = function(audioContext){
                var index = audioContextsInstances.indexOf(audioContext);
                if(index >= 0){
                    if(pendingRequests.length > 0){
                        var handler = pendingRequests.shift();
                        console.log("Return object for pending request " + index + " " + Date.now().toString());
                        handler(audioContext);
                    } else {
                        audioContextsAvailability[index] = true;
                    }
                } else {
                    console.warn("Wrong parameter");
                }
            };

            var createContext = function(){
                console.log("Creating new object " + audioContextsInstances.length + " " + Date.now().toString());
                var audioContext = new AudioContextWrapper(Math.round(Math.random()*2000));
                audioContextsAvailability.push(false);
                audioContextsInstances.push(audioContext);
                return audioContext;
            };

             function AudioContextWrapper(id) {
                var id = id;
                var audioContext = new AudioContext();
                this.createBuffer = function (numOfChannels, length, sampleRate) {
                    console.log("Creating buffer, id = " + id);
                    return audioContext.createBuffer(numOfChannels, length, sampleRate);
                };
                this.createAnalyser = function () {
                    console.log("Creating analyzer, id = " + id);
                    return audioContext.createAnalyser();
                };
            };
        }
        function getInstance(){
            if(instance === null){
                instance = new AudioContextsPool();
            }
            return instance;
        }
        return {
            getInstance: getInstance
        }
    })();
});
