package stepdefs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageobjects.LoginToAmazon;
import utils.Util;

public class LoginSteps extends Util {

    LoginToAmazon login = new LoginToAmazon(driver);

    public LoginSteps() throws Exception {
    }

    @Given("^User visits Amazon$")
    public void user_visits_Amazon() throws Throwable {
        login.navigateToAmazon();
    }
    @When("^User logins to Amazon$")
    public void userLoginsToAmazon() throws InterruptedException {
        login.navigateToLoginPage();
        login.enterEmailAddress();
        login.enterPassword();
    }

    @Then("^Login process should be successful$")
    public void login_process_should_be_successful() throws Throwable {
        login.successfulLogin();
    }


}
