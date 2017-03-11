package pl.tusonic.pixelshonadventure;

import android.app.Activity;
import android.os.Bundle;
import android.widget.Toast;

import org.xwalk.core.XWalkView;


public class MainActivity extends Activity {
    private XWalkView mXWalkView;

    int x=0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_main);
        mXWalkView = (XWalkView) findViewById(R.id.xwalkWebView);
        mXWalkView.load("file:///android_asset/index.html", null);
    }


    @Override
    public void onBackPressed()
    {
        if(x==0)
        {
            Toast.makeText(this, "Press BACK again to EXIT", Toast.LENGTH_SHORT).show();
            x++;
        }
        else
        {
            System.exit(0);
        }
    }


}