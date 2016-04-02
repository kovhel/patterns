/**
 * Created by Elena on 02.04.2016.
 */
requirejs(["./js/proxy/isubject"], function() {
    ProxyNS.optimizedResizableWindow = (function(){
        var callbacks = [],
            running = false;

        function resize(event) {
            if (!running) {
                running = true;
                if (window.requestAnimationFrame) {
                    window.requestAnimationFrame(runCallbacks.bind(window, event));
                } else {
                    setTimeout(runCallbacks.bind(window, event), 66);
                }
            }
        }

        function runCallbacks(event) {
            callbacks.forEach(function(callback) {
                callback(event);
            });
            running = false;
        }

        function addEventlistener(type, listener, useCapture){
            if(type === "resize"){
                if (!callbacks.length) {
                    window.addEventListener('resize', resize);
                }
                if (listener) {
                    callbacks.push(listener);
                }
            } else {
                window.addEventListener(type, listener, useCapture);
            }
        };

        return {
            addEventListener: addEventlistener,
            __proto__: new ProxyNS.IResizable()
        }
    })();
});

//https://developer.mozilla.org/ru/docs/Web/Events/resize is used for optimization
