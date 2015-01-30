using WPCordovaClassLib.Cordova;
using WPCordovaClassLib.Cordova.Commands;
using WPCordovaClassLib.Cordova.JSON;

namespace Cordova.Extension.Commands {
    public class ExtApp : BaseCommand {
        public void launch(string options) {
            try {
                // TVB - First option should be the url to call
                string optVal = JsonHelper.Deserialize<string[]>(options)[0];

                // TVB - launch the app
                Windows.System.Launcher.LaunchUriAsync(new System.Uri(optVal));

                // TVB - Return success
                DispatchCommandResult();

            } catch (System.Exception) {
                // TVB - Return error
                DispatchCommandResult(new PluginResult(PluginResult.Status.ERROR, "ExtApp.launch error"));
            }
        }
    }
}