package org.apache.cordova.extapp;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;

/**
 * This class echoes a string called from JavaScript.
 */
public class ExtApp extends CordovaPlugin {
    
	public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals("launch")) {
        	JSONObject jsonObject = args.getJSONObject(0);
            String appId = jsonObject.getString("appId");
            this.launch(appId, callbackContext);
            return true;
        }
        return false;
    }

	
    private void launch(String appId, CallbackContext callbackContext) {
    	
    	if (appId != null && appId.length() > 0) {
    		Context context = cordova.getActivity().getApplicationContext();
    		Intent intent = null;
    		try {
    			PackageManager packageManager = cordova.getActivity().getPackageManager();
        		intent = packageManager.getLaunchIntentForPackage(appId);
        		
  			  if (intent != null) {
  				intent.addCategory(Intent.CATEGORY_LAUNCHER);
  				
  			  } else {
  				//intent = new Intent(Intent.ACTION_VIEW, Uri.parse("market://details?id=" + appId));
  				  callbackContext.error("playstore");
  			  }
  			  
  			  context.startActivity(intent);
        	    
        	/*    
        	} catch (android.content.ActivityNotFoundException e) {
        	    context.startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse("https://play.google.com/store/apps/details?id=" + appId)));
        	*/
        	} catch (Throwable t) {
        		callbackContext.error("Error launching intent : " + t.getMessage());
        	}
        	
        	callbackContext.success();
        } else {
            callbackContext.error("Expected one non-empty string argument.");
        }
    }
}
