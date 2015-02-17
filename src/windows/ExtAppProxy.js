/**
 * Created by Tom Van Boghout on 2015-02-17.
 */
 
 var cordova = require('cordova'),
    channel = require('cordova/channel');

module.exports = {
	launch: function(success, fail, args) {
		success(true);
	}
}

require("cordova/exec/proxy").add("ExtApp", module.exports);
