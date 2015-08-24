/**
 * Created by driesgijssels on 3/12/13.
 */
var ExtApp = function() {
};


// Call this to register for push notifications. Content of [options] depends on whether we are working with APNS (iOS) or GCM (Android)
ExtApp.prototype.launch = function(successCallback, errorCallback, options) {
    if (errorCallback == null) { errorCallback = function() {}}
    if (successCallback == null) { successCallback = function() {}}

    if (typeof errorCallback != "function")  {
        console.log("ExtApp.launch failure: failure parameter not a function");
        return;
    }

    if (typeof successCallback != "function") {
        console.log("ExtApp.launch failure: success callback parameter must be a function");
        return;
    }

    cordova.exec(successCallback, errorCallback, "org.apache.cordova.extapp.ExtApp", "launch", [options]);
};



//-------------------------------------------------------------------

if(!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.extapp) {
    window.plugins.extapp = new ExtApp();
}
