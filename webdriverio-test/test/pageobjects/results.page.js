const Page = require("./page");

class ResultsPage extends Page {
  get searchField() {
    return $(".form-control");
  }
  get searchButton() {
    return $(".search_bar_list > [value = Buscar]");
  }
  get specialitiesTab() {
    return $$(".switch-field >a");
  }

  get mapListButton() {
    return $(".icon-th-list").parentElement();
  }
  get mapViewButton() {
    return $(".icon-map-1").parentElement();
  }
  get map() {
    return $("#map");
  }

  get profesionalName() {
    return $("h3");
  }

  get completeProfileLink() {
    return $(".btn_listing");
  }

  pageUrl = "search?sp=all&q=";

  search(searchKey) {
    this.searchField.setValue(searchKey);
    this.searchButton.click();
    console.log("Buscar clicked");
  }

  selectListView() {
    this.mapListButton.click();
    console.log("List View button clicked");
  }

  selectMapView() {
    this.mapViewButton.click();
    console.log("Map View button clicked");
  }

  goToSpecialistProfile() {
    this.completeProfileLink.click();
    console.log("Go to Specialist Profile page");
  }

  open() {
    return super.open("/#/search");
  }
}

module.exports = new ResultsPage();
