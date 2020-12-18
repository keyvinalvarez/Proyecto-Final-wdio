const { config } = require("../../wdio.conf");
const ResultsPage = require("../pageobjects/results.page");
const { getWebServiceValidationFromHash } = require("../helper/request.helper");
const specialists = require("../data/specialists.json");

describe("Webservice Response Test", () => {
  before(() => {
    ResultsPage.open();
    browser.setupInterceptor();
  });

  it("3.a  Verify that the webservice response from the profesional page is correct", () => {
    //Search for an specific specialist
    ResultsPage.search(specialists[0].searchKey);
    //Go to the specialist profile
    ResultsPage.goToSpecialistProfile();
    //validate if the webservice reponse is completed
    getWebServiceValidationFromHash(specialists[0].hash);
    //Validate if the webservice response was as expected
    browser.assertExpectedRequestsOnly();
  });
});
