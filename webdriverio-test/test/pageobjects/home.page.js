const { config } = require('../../wdio.conf');
const Page = require('./page');

class HomePage extends Page{
    get overlay () {return $('.overlay')}
    get searchField () {return $('.input-group > #search-input')}
    get searchButton () {return $('.btn_search')}
    get phisicalRadioButton() {return $('#phisical').parentElement()}
    get languageRadioButton() {return $('#language').parentElement()}
    get ocupationalRadioButton() {return $('#ocupational').parentElement()}

    search(name){
        this.searchField.setValue(name);
        this.searchButton.click();
        console.log('Buscar clicked');
    }

    open () {
        return super.open('');
    }

}

module.exports = new HomePage();