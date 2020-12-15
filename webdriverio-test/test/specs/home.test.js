const { config } = require("../../wdio.conf");
const HomePage = require("../pageobjects/home.page");
const ResultsPage = require("../pageobjects/results.page");

describe("Home Page Search Field Tests", () => {

  beforeEach(() => {
    HomePage.open();
  });

  it("Searching for an empty user will not redirect to other page", () => {
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

  it("Validate that when clicking an especiality the search bar is focused and the placeholder is changed", () => {
    HomePage.languageRadioButton.click();
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

  // it('Validate that searching for an specialist the user is redirected the search page and the specialist is the first displayed', () => {
  //     //HomePage.open();
  //     let specialistName = 'Maria'
  //     HomePage.search(specialistName);
  //     expect(browser).toHaveUrlContaining(ResultsPage.pageUrl.concat(specialistName));
  //     expect(ResultsPage.profesionalName).toHaveTextContaining(specialistName);

  // });
});
