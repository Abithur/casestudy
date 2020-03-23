Feature: remove product from favourites

  Scenario: Remove product from favourites
    Given User visits Amazon
    When User logins to Amazon
    Then Login process should be successful
    And User searches for samsung
    And User verifies if search results are correct
    And User clicks on second page and verifies if it is the correct page
    And User adds the third product from the top to the list and verifies if it is correct product
    When User deletes the product from wish list
    Then Product should be deleted successfully


