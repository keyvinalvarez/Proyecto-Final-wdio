const HomePage = require("../pageobjects/home.page");
const ResultsPage = require("../pageobjects/results.page");
const specialists = require("../data/specialists.json");

describe("Home Page Search Field Tests", () => {
  beforeEach(() => {
    HomePage.open();
  });

  it("1.a Searching for an empty user will not redirect to other page", () => {
    let url = browser.getUrl();
    HomePage.search("");
    //overlay focus is not displayed
    expect(HomePage.overlay).toHaveAttr("class", "overlay");
    //search field is empty
    expect(HomePage.searchField).toHaveAttrContaining(
      "placeholder",
      "Ejemplo: Nombre, Especialidad..."
    );
    //validate the current URL
    expect(browser).toHaveUrl(url);
  });

  it("1.b Validate that when clicking an speciality the search bar is focused and the placeholder is changed", () => {
    HomePage.selectLanguageTab();
    //validate that the search field is focused
    expect(HomePage.searchField).toBeFocused();
    expect(HomePage.searchField.parentElement()).toHaveAttrContaining(
      "class",
      "focus"
    );
    //validate that the placeholder in the search field is changed
    expect(HomePage.searchField).toHaveAttrContaining(
      "placeholder",
      "Buscas a alguien o algo en específico"
    );
  });

  specialists.forEach((element) => {
    it(`1.c Validate that searching ${element.searchKey} the user is redirected the search page and the specialist ${element.name} is the first displayed`, () => {
      HomePage.search(element.searchKey);
      expect(browser).toHaveUrlContaining(
        ResultsPage.pageUrl.concat(element.searchKey)
      );
      expect(ResultsPage.profesionalName).toHaveText(element.name);
    });
  });
});
