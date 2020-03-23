package pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import utils.Util;

import static org.junit.Assert.*;

public class LoginToAmazon extends Util {

    private By signInButton = By.id("nav-link-accountList");
    private By loginPage = By.xpath("//*[contains(text(),'Email (phone for mobile accounts)')]");
    private By emailAddressField = By.id("ap_email");
    private By continueButton = By.id("continue");
    private By passwordField = By.id("ap_password");
    private By logOutText = By.xpath("//*[text()='Sign Out']");
    private By signInSubmitButton = By.id("signInSubmit");

    public LoginToAmazon(WebDriver driver) throws Exception {
        super(driver);
    }

    public void navigateToAmazon() {
        driver.get("https://www.amazon.com/");
    }

    public void navigateToLoginPage() throws InterruptedException {
        driver.findElement(signInButton).click();
        assertTrue(driver.findElement(loginPage).isDisplayed());
    }

    public void enterEmailAddress() {
        driver.findElement(emailAddressField).sendKeys("insidercasestudy@gmail.com");
        driver.findElement(continueButton).click();
        assertTrue(driver.findElement(passwordField).isDisplayed());
    }

    public void enterPassword() {
        driver.findElement(passwordField).sendKeys("Caseinsider");
        driver.findElement(signInSubmitButton).click();
    }

    public void successfulLogin() throws InterruptedException {
        /*Bir çok kez kodu çalıştırdım, şifre girdikten sonra
        sadece iki kere telefon numarası girmemi söyleyen sayfa geldi, yakalayamadım, handle edemedim.*/
        assertTrue(driver.findElement(logOutText).isEnabled());
    }
}
