package qubonic.onec;

import android.app.Activity;
import android.os.*;
import android.webkit.*;
import android.view.*;

public class MainActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
		
		WebView qweb = (WebView) findViewById(R.id.qweb);
		WebSettings qws = (WebSettings) qweb.getSettings();
		
		qws.setJavaScriptEnabled(true);
		qws.setUseWideViewPort(true);
		qws.setDisplayZoomControls(false);
		qws.setDatabaseEnabled(true);
		qws.setDomStorageEnabled(true);
		qws.setBuiltInZoomControls(false);
		qws.setSupportZoom(false);
		qws.setLoadWithOverviewMode(true);
		
		if(Build.VERSION.SDK_INT < Build.VERSION_CODES.KITKAT) {
			qws.setDatabasePath("data/data" + qweb.getContext().getPackageName() + "/databases/");
		}
		
		qweb.loadUrl("file:///android_asset/index.html");
		
		View decorView = getWindow().getDecorView();
		int uiOptions = View.SYSTEM_UI_FLAG_FULLSCREEN | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION;
		decorView.setSystemUiVisibility(uiOptions);
    }
}