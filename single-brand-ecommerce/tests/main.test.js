load("home/HomePage.js");
load("home/Search.js");
load("home/Filter.js");
load("home/Sort.js");
load("home/ViewItem.js");
load("home/Quantity.js");
load("home/CheckOut.js");
load("home/Payment.js");
// load("Address.js");


// forAll(
//   [
//     ["mobile", "400x700"],
//     ["tablet", "600x800"],
//     ["desktop", "1024x768"],
//   ],
//   (deviceName, size) => {
//     test("Home page on " + deviceName + " device", function () {
//       const driver = createDriver("http://DXL.com ","1024x768");
//       const loginPage=new LoginPage(driver).waitForIt( {time: "30s"});
//       loginPage.loginAs("t-shirt");
//       //  checkLayout(driver, "specs/home.gspec", [deviceName]);
//       // const logoutpage=new LogoutPage(driver);
//       // logoutpage.logoutAs();
//       // driver.quit();
//     });
//   }
// );
// const driver=createDriver("http://testphp.vulnweb.com/login.php","1024x768");
// const loginPage=new LoginPage(driver).waitForIt();
// loginPage.loginAs("test","test");
// test("Home page", function() {
//    driver = createDriver("https://www.radiustheme.com/demo/wordpress/themes/homlisti/home-5",
//                             "1024x768");
//   checkLayout(driver, "specs/home.gspec", ["all", "desktop"]);
// });
test("Home page on " + "desktop" + " device", function () {
  const driver = createDriver("https://www.nike.com/", "1024x768");
  Thread.sleep(5000);
  const homePage = new HomePage(driver).waitForIt();
  homePage.homeAs();
  // Thread.sleep(5000);
  // checkLayout(driver, "specs/home.gspec", ["all", "desktop"]);
  // Thread.sleep(5000);
  checkLayout(driver, "specs/home.gspec", ["all", "desktop"]);
  Thread.sleep(10000);
  const searchPage = new Search(driver).waitForIt();
  searchPage.searchAs();
  Thread.sleep(8000);
  driver.executeScript("window.scrollBy(0,400)");
  // Thread.sleep(3000);
  const filterPage = new Filter(driver).waitForIt();
  filterPage.filterAs();
  // Thread.sleep(2000);
  driver.executeScript("window.scrollBy(0,-400)");
  Thread.sleep(2000);
  const sortPage = new Sort(driver).waitForIt();
  sortPage.sortAs();
  Thread.sleep(5000);
  const viewItemPage = new ViewItem(driver).waitForIt();
  viewItemPage.viewItemAs();
  Thread.sleep(6000);
  driver.executeScript("window.scrollBy(0,700)");
  Thread.sleep(5000);
  // const choosingVariant = new Quantity(driver).waitForIt();
  // choosingVariant.quantityAs();
  // Thread.sleep(1000);
  // const checkOutPage = new CheckOut(driver).waitForIt();
  // checkOutPage.checkOutAs();
  // Thread.sleep(6000);
  // const PaymentPage = new Payment(driver).waitForIt();
  // PaymentPage.PaymentAs();
  // Thread.sleep(3000);
  // const AddressPage = new Address(driver).waitForIt();
  // AddressPage.AddressAs();
  driver.quit()
});
