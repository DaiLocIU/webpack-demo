function insertScriptCustom(url, cb) {
    var a = document.createElement("script");
    a.async = 0;
    a.onload = cb;
    if (url) {
        a.src = url;
    }
    document.body.appendChild(a);
}
var supportsES6 = function() {
    try {eval("(a = 0) => a");return true;}
    catch (err) {return false;}
}();
function getFileBuild(emsVersion) {
    return ASSETS + '/js/script.' + emsVersion + '.js?v=' + VERSION
}
if (supportsES6) {
    insertScriptCustom(getFileBuild('es6'));
} else {
    insertScriptCustom(getFileBuild('es5'));
}
