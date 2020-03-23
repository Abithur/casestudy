package stepdefs;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageobjects.AddToWishList;
import utils.Util;

public class WishListSteps extends Util {
    AddToWishList wishList = new AddToWishList(driver);

    @And("^User searches for samsung$")
    public void user_searches_for_samsung() throws Throwable {
        wishList.searchForSamsung();
    }

    @And("^User verifies if search results are correct$")
    public void user_verifies_if_search_results_are_correct() throws Throwable {
        wishList.searchVerification();
    }

    @And("^User clicks on second page and verifies if it is the correct page$")
    public void user_clicks_on_second_page_and_verifies_if_it_is_the_correct_page() throws Throwable {
        wishList.navigateToSecondPageAndVerify();
    }

    @And("^User adds the third product from the top to the list and verifies if it is correct product$")
    public void userAddsTheThirdProductFromTheTopToTheListAndVerifiesIfItIsCorrectProduct() throws Exception {
        wishList.addThirdProductToWishListAndVerify();
    }

    @When("^User deletes the product from wish list$")
    public void userDeletesTheProductFromWishList() {
        wishList.deleteProductFromList();
    }

    @Then("^Product should be deleted successfully$")
    public void productShouldBeDeletedSuccessfully() throws Exception {
        wishList.verifyProductDeleted();
    }
}
