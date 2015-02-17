/**
 * Created by Tom Van Boghout on 2015-02-17.
 */
 
 var cordova = require('cordova'),
    channel = require('cordova/channel');

function launchUri(success, fail, uriString) {
    var appUri = new Windows.Foundation.Uri(uriString);
    var storeUriString = "http://www.windowsphone.com/nl-be/store/app/" + uriString.substring(uriString.indexOf(":")+1, uriString.length);
    var options = new Windows.System.LauncherOptions();
    var fallbackURI = new Windows.Foundation.Uri(storeUriString);
    options.fallbackUri = fallbackURI;

    Windows.System.Launcher.launchUriAsync(appUri, options).then(
        function (launched) {
            if (launched) {
                success(true);
            } else {
                fail(false);
            }
        });
}

module.exports = {
	launch: function(success, fail, args) {
        launchUri(success, fail, args[0]);
	}
}

require("cordova/exec/proxy").add("ExtApp", module.exports);