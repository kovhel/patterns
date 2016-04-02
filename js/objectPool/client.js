/**
 * Created by Elena on 02.04.2016.
 */
var ObjectPoolNS = ObjectPoolNS || {};
requirejs(["./js/objectPool/reusablePool"], function() {
    function showObjectPool(){
        var audioContextsPool = ObjectPoolNS.AudioContextsPool.getInstance();
        var contexts = [];
        for(var i = 0; i < 6; ++i){
            var context = audioContextsPool.acquireAudioContext();
            if(contexts !== null){
                contexts.push(context);
                context.createAnalyser();
            }
        }
        setTimeout(function(){
            audioContextsPool.releaseAudioContext(contexts[5]);
        }, 2000);
        audioContextsPool.acquireAudioContext(function(context){
            if(contexts !== null) {
                contexts.push(context);
                context.createBuffer(1, 3000, 48000);
            }
        });
        setTimeout(function(){
            audioContextsPool.releaseAudioContext(contexts[2]);
        }, 1000);

        setTimeout(function(){
            var context = audioContextsPool.acquireAudioContext();
        }, 3000);
    }

    window.showObjectPool = showObjectPool;
});
