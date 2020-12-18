const { config } = require("../../wdio.conf");
const ResultsPage = require("../pageobjects/results.page");
const { getUrlBySpeciality } = require("../helper/parser.helper");
const specialities = require("../data/specialities.json");
const specialists = require("../data/specialists.json");

describe("Search Tests", () => {
  beforeEach(() => {
    ResultsPage.open();
  });

  it("2.a Validate that selecting a different specility tab changes the url respectivly", () => {
    let url = browser.getUrl();
    let tabs = ResultsPage.specialitiesTab;
    for (item of tabs) {
      item.click();
      //Search that the item match the json
      expect(browser).toHaveUrl(
        url.concat(getUrlBySpeciality(specialities, item.getText()))
      );
    }
    browser.reloadSession();
  });

  specialists.forEach((element) => {
    it(`2.b Validate that searching for ${element.searchKey} in the search page the page is reloaded and the first result is ${element.name}`, () => {
      ResultsPage.search(element.searchKey);
      //Validate that the page is reloaded with the search
      expect(browser).toHaveUrlContaining("?q=".concat(element.searchKey));
      //validate the name of the professional is the first option displayed
      expect(ResultsPage.profesionalName).toHaveText(element.name);
      //validate that the searched professional is displayed on the search bar
      expect(ResultsPage.searchField).toHaveValue(element.searchKey);
    });
  });

  it("2.c Validate that the map is displayed when the show map button is clicked and hidden when the list view is clicked", () => {
    ResultsPage.search(specialists[0].searchKey);
    //Click the Map List button
    ResultsPage.selectListView();
    //Validate that the Map is not displayed
    expect(ResultsPage.map).not.toBeDisplayed();
    //Click the Map View button
    ResultsPage.selectMapView();
    //Validate that the Map is displayed
    expect(ResultsPage.map).toBeDisplayed();
  });
});
