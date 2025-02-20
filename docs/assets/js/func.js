var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?3435d6871e8ac7634f7fb7728fda5967";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
})();

window.onscroll=function() {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    var left = document.getElementById("nav");
    if (t > 60) {
        left.style.position = "fixed";
        left.style.top = "0";
    } else {
        left.style.position = "relative";
    }
}