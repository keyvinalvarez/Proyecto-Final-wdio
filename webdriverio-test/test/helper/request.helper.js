const webServiceUrl = "https://javito-stage.herokuapp.com/v1/specialist/";

function getWebServiceValidationFromHash(hash) {
  browser.pause(2000);
  browser.expectRequest("GET", webServiceUrl.concat(hash), 200);
}

module.exports = {
  getWebServiceValidationFromHash,
};
