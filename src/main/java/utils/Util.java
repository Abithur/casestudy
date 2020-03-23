package utils;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.concurrent.TimeUnit;

public class Util {

    protected static WebDriver driver;

    public Util(WebDriver driver) {
        Util.driver = driver;
    }

    public Util() {
    }

    /*
    hem windows platformunda hem de macbook platformunda chrome'u çalıştırabilmek için bu şekilde design ettim
     */
    public WebDriver launchChrome() throws Exception {
        if (System.getProperty("os.name").toLowerCase().contains("win")) {
            WebDriverManager.chromedriver().setup();
            driver = new ChromeDriver();
            driver.manage().window().maximize();
            driver.switchTo().window(driver.getWindowHandle());
            driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
            driver.manage().timeouts().setScriptTimeout(60, TimeUnit.SECONDS);
        } else {
            System.setProperty("webdriver.chrome.driver", "src/main/resources/drivers/chromedriver");
            driver = new ChromeDriver();
            driver.manage().window().maximize();
            driver.switchTo().window(driver.getWindowHandle());
            driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
            driver.manage().timeouts().setScriptTimeout(60, TimeUnit.SECONDS);
        }
        return driver;
    }

    public static void waitForLocatorExists(WebDriver driver, By locator) throws Exception {
        long DEFAULT_TIMEOUT = 30000L;
        WebDriverWait wait = new WebDriverWait(driver, DEFAULT_TIMEOUT / 1000L);
        wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
    }

    public static void scrollDown(WebDriver driver) {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("scroll(0,300)");
    }
}