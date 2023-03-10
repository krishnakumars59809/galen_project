load("home/HomePage.js");
load("home/Search.js");
load("home/Filter.js");
load("home/Sort.js");
load("home/SortSelect.js");
load("home/ViewItem.js");
load("home/Quantity.js");
load("home/CheckOut.js");
load("home/Payment.js");


// forAll(
//   [
//     ["mobile", "400x700"],
//     ["tablet", "600x800"],
//     ["desktop", "1024x768"],
//   ],
//   (deviceName, size) => {
//     test("Home page on " + deviceName + " device", function () {
//       const driver = createDriver("https://www.caratlane.us/",size);
//       //  checkLayout(driver, "specs/home.gspec", [deviceName]);

//     });
//   }
// );
// forAll(
//   [
//     ["mobile", "400x700"],
//     ["tablet", "600x800"],
//     ["desktop", "1024x768"],
//   ],
//   (deviceName, size) => {
//     test("Home page on " + deviceName + " device", function () {
//       const driver1 = createDriver("https://www.caratlane.us/calvin-ear-studs-for-him.html",size);
//       //  checkLayout(driver, "specs/home.gspec", [deviceName]);

//     });
//   }
// );
test("Home page on " + "desktop" + " device", function () {
  const driver = createDriver("https://www.caratlane.us/", "1024x768");
  Thread.sleep(30000);
  const closeCookie =new HomePage(driver);
  closeCookie.iframe.insideFrame(()=>closeCookie.homeAs())
  Thread.sleep(30000);
  checkLayout(driver, "specs/home.gspec", ["all", "desktop"])
  const searchPage = new Search(driver).waitForIt();
  searchPage.searchAs();
  Thread.sleep(8000);
  const filterPage = new Filter(driver).waitForIt();
  filterPage.filterAs();
  // driver.executeScript("window.scrollBy(0,-400)");
  Thread.sleep(5000);
  const sortPage = new Sort(driver).waitForIt();
  sortPage.sortAs();
  Thread.sleep(2000);
  const sortSelectPage = new SortSelect(driver).waitForIt();
  sortSelectPage.sortSelectAs();
  Thread.sleep(5000);
  const viewItemPage = new ViewItem(driver).waitForIt();
  viewItemPage.viewItemAs();
  Thread.sleep(3000);
  // driver.executeScript("window.scrollBy(0,400)");
  const driver1 = createDriver("https://www.caratlane.us/calvin-ear-studs-for-him.html", "1024x768");
  driver.quit()
  Thread.sleep(30000);
  const choosingVariant =new Quantity(driver1);
  choosingVariant.iframe.insideFrame(()=>choosingVariant.closeAs())
  choosingVariant.quantityAs()
  Thread.sleep(3000);
  const checkOutPage = new CheckOut(driver1).waitForIt();
  checkOutPage.checkOutAs();
  Thread.sleep(6000);
  const PaymentPage = new Payment(driver1).waitForIt();
  PaymentPage.PaymentAs();
  Thread.sleep(6000);
  driver1.quit()

});

