const Page = require('./page');

class ResultsPage extends Page{

    get searchField () {return $('.form-control')}
    get searchButton () {return $('.search_bar_list > [value = Buscar]')}
    get specialitiesTab () {return $$('.switch-field >a')}

    //get specialityPhysic () {return $('.search_bar_list > [value=Buscar]')}
    get profesionalName() {return $('h3')}


    search(name){
        this.searchField.setValue(name);
        this.searchButton.click();
        console.log('Buscar clicked');
    }
    

    open () {
        return super.open('/#/search');
    }

}

module.exports = new ResultsPage();