package qubonic.onec;

import android.app.Activity;
import android.os.Bundle;
import android.webkit.WebView;
import android.webkit.WebSettings;

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
		qws.setBuiltInZoomControls(false);
		qws.setLoadWithOverviewMode(true);
		qws.setAppCacheEnabled(false);
		qws.setLoadsImagesAutomatically(true);
		
		qweb.loadUrl("file:///android_asset/index.html");
    }
}