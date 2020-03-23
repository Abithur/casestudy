package pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import utils.ContextHelper;
import utils.Util;

import java.util.List;

import static org.junit.Assert.*;

//Utilden extend ediyorum. WebDriver ve diğer yardımcı metodlar Util içerisinde
public class AddToWishList extends Util {

    private By topSearchField = By.id("twotabsearchtextbox");
    private By searchSubmitButton = By.xpath("//*[@class='nav-search-submit nav-sprite']");
    private By samsungSearchResult = By.xpath("//*[@class='sg-col-4-of-12 sg-col-8-of-16 sg-col-12-of-32 sg-col-12-of-20 sg-col-12-of-36 sg-col sg-col-12-of-24 sg-col-12-of-28']");
    private By productCatalog = By.xpath("//*[@class='a-section aok-relative s-image-fixed-height']");
    private By secondPageButton = By.xpath("//*[text()='2']");
    private By secondPageVerification = By.xpath("//*[@class='a-selected']//*[text()='2']");
    private By wishListDropDown = By.id("add-to-wishlist-button");
    private By wishListButton = By.id("atwl-link-to-list-1YVQTIO3PHYUT");
    private By wishListDeleteButton = By.id("a-autoid-7");
    private By viewListButton = By.id("WLHUC_viewlist");
    private By wishListCatalog = By.xpath("//*[@class='a-row a-size-small']");

    public AddToWishList(WebDriver driver) {
        super(driver);
    }

    public void searchForSamsung() {
        driver.findElement(topSearchField).sendKeys("samsung");
        driver.findElement(searchSubmitButton).click();
    }

    public void searchVerification() throws Exception {
        /*
        Samsung'u arattıktan sonra burada doğru sonuçların gelip gelmediğini kontrol ettim.
        Testleri yaparken iki şey gözüme çarptı.
        1- Sponsonred olanlarda bazen samsung içerikli ürünler gelmiyordu
        2- Bazı ürünlerin başında [2 Pack] gibi ibareler vardı.
        O yüzden bu iki koşulu handle ettim diğerlerinin içinde samsung geçiyorsa sonuçlar doğrudur şeklinde kodu yazdım
         */
        waitForLocatorExists(driver, samsungSearchResult);
        List<WebElement> topResults = driver.findElements(samsungSearchResult);
        for (WebElement topResult : topResults) {
            if (!topResult.getText().contains("Sponsored") && !topResult.getText().contains("Pack]")) {
                assertTrue(topResult.getText().toLowerCase().contains("samsung"));
            }
        }
    }

    public void navigateToSecondPageAndVerify() throws Exception {
        /*
        İkinci sayfaya geçiyorum. Kontrolü'de selected class'ının aldındaki 2'yi çekerek yapıyorum.
         */
        driver.findElement(secondPageButton).click();
        waitForLocatorExists(driver, secondPageVerification);
        assertTrue(driver.findElement(secondPageVerification).isEnabled());
    }

    public void addThirdProductToWishListAndVerify() throws Exception {
        String[] productContent = driver.findElements(samsungSearchResult).get(2).getText().split("\n");
        /* Context helper parametreyi set edip, aynı RUN içinde diğer metod'da kullanmamı sağlıyor.
        Burada 3. ürüne tıklamadan önce içeriğini ContextHelper'a kaydediyorum.
        İleride doğru ürünün geldiğini kontrol etmek için bu içeriği kullanıyorum.
        */
        ContextHelper.setProductContent(productContent[0]);
        driver.findElements(productCatalog).get(2).click();
        waitForLocatorExists(driver, wishListDropDown);
        scrollDown(driver);
        driver.findElement(wishListDropDown).click();
        waitForLocatorExists(driver, wishListButton);
        driver.findElement(wishListButton).click();
        waitForLocatorExists(driver, viewListButton);
        driver.findElement(viewListButton).click();
        waitForLocatorExists(driver, wishListCatalog);
        if (driver.findElements(wishListCatalog).get(0).getText().equals(ContextHelper.getProductContent())) {
            assertTrue(true);
        } else {
            throw new Exception("Product could not be added to wish list");
        }
    }

    public void deleteProductFromList() {
        driver.findElement(wishListDeleteButton).click();
    }

    public void verifyProductDeleted() throws Exception {
        /*
        WishList'ten ürünü sildikten sonra, Wish List'te varolan bütün ürünleri kontrol ediyorum ve aynı üründen olup olmadığını kontrol ediyorum.
        Eğer aynı üründen varsa exception atıyorum.
        Sleep kullanmak durumunda kaldım çünkü ürünü sildikten sonra bekleyebileceğim bir yapı kalmadı. waitForLocatorExists kullanamadım.
         */
        Thread.sleep(2000);
        List<WebElement> wishList = driver.findElements(wishListCatalog);
        for (WebElement webElement : wishList) {
            if (webElement.getText().equals(ContextHelper.getProductContent())) {
                throw new Exception("Product could not be deleted successfully");
            }
        }
    }
}
