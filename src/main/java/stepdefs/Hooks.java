package stepdefs;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import utils.Util;

public class Hooks extends Util {

    private Util util;

    public Hooks(Util util) {
        this.util = util;
    }

    @Before
    public void setup() throws Exception {
        launchChrome();
    }

    @After
    public void teardownScenario(Scenario scenario) {
        scenario.embed(((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES), "image/png");
        driver.manage().deleteAllCookies();
        driver.quit();
        driver = null;
    }
}
