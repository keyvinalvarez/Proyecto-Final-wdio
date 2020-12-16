const Page = require("./page");

class SpecialistPage extends Page {

  get specialistName() {return $("h1")}
  
}

module.exports = new SpecialistPage();
