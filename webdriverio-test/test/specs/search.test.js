const { config } = require("../../wdio.conf");
const ResultsPage = require("../pageobjects/results.page");
const { getUrlBySpeciality } = require("../helper/parser.helper");
const speciality = require("../data/speciality.json");
const especialistas = require("../data/especialistas.json");

describe("Search Tests", () => {
  beforeEach(() => {
    ResultsPage.open();
  });

  //   it("Validate that selecting a different specility tab changes the url respectivly", () =>{
  //     let url = browser.getUrl();
  //     let tabs = ResultsPage.specialitiesTab;
  //     for(item of tabs){
  //         item.click();
  //         //Search that the item match the json
  //         expect(browser).toHaveUrl(url.concat(getUrlBySpeciality(speciality, item.getText())));
  //     }
  //   });

  it("Validate that selecting a different specility tab changes the url respectivly", () => {
    ResultsPage.search("maria");
    //validate the name of the professional
    expect(ResultsPage.profesionalName).toHaveTextContaining("Maria");
    //validate that the searched professional is displayed on the search bar
    expect(ResultsPage.searchField).toHaveValue("maria");
  });
});
