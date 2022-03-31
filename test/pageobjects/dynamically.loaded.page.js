const Page = require('./page');


class dynamicLoading extends Page {

    get startBtn () {
        return $('#start');
    }
    // <button />

    get h4() {
        return $('#finish h4')
    }
    // h4*=Hello

    open () {
        return super.open('dynamic_loading/2');
    }
}

module.exports = new dynamicLoading();
