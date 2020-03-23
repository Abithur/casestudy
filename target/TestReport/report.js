$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("remove-product-from-favourites.feature");
formatter.feature({
  "line": 1,
  "name": "remove product from favourites",
  "description": "",
  "id": "remove-product-from-favourites",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1639363514,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Remove product from favourites",
  "description": "",
  "id": "remove-product-from-favourites;remove-product-from-favourites",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User visits Amazon",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User logins to Amazon",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Login process should be successful",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User searches for samsung",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User verifies if search results are correct",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on second page and verifies if it is the correct page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User adds the third product from the top to the list and verifies if it is correct product",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User deletes the product from wish list",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Product should be deleted successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_visits_Amazon()"
});
formatter.result({
  "duration": 1722736070,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userLoginsToAmazon()"
});
formatter.result({
  "duration": 4268637696,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.login_process_should_be_successful()"
});
formatter.result({
  "duration": 35946305,
  "status": "passed"
});
formatter.match({
  "location": "WishListSteps.user_searches_for_samsung()"
});
formatter.result({
  "duration": 2795234869,
  "status": "passed"
});
formatter.match({
  "location": "WishListSteps.user_verifies_if_search_results_are_correct()"
});
formatter.result({
  "duration": 1051449995,
  "status": "passed"
});
formatter.match({
  "location": "WishListSteps.user_clicks_on_second_page_and_verifies_if_it_is_the_correct_page()"
});
formatter.result({
  "duration": 1218281358,
  "status": "passed"
});
formatter.match({
  "location": "WishListSteps.userAddsTheThirdProductFromTheTopToTheListAndVerifiesIfItIsCorrectProduct()"
});
