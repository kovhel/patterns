/**
 * Created by Elena on 02.04.2016.
 */
var AdapterNS = AdapterNS || {};
requirejs(["./js/adapter/adapter"], function() {
    function showAdapter(){
        var eventListener = new AdapterNS.EventListener();
        eventListener.add(document, "click", function(){ console.log("Adapter works fine"); });
    }

    window.showAdapter = showAdapter;
});
