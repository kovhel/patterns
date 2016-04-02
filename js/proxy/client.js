/**
 * Created by Elena on 02.04.2016.
 */
var ProxyNS = window.ProxyNS || {};
requirejs(["./js/proxy/proxy"], function() {
    function showProxyPattern(){
        window.addEventListener("resize", resizeHandler);
        ProxyNS.optimizedResizableWindow.addEventListener("resize", optimizedResizeHandler);
        console.log(ProxyNS.optimizedResizableWindow instanceof ProxyNS.IResizable);
    }

    function resizeHandler(){
        console.log("Base Resize handler: " + event.target.outerWidth + "x" + event.target.outerHeight);
    }
    function optimizedResizeHandler(event){
        console.log("Optimized Resize handler: " + event.target.outerWidth + "x" + event.target.outerHeight);
    }

    window.showProxyPattern = showProxyPattern;
});
