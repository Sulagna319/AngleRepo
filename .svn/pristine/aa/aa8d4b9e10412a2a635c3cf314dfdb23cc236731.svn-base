//let Utils = function(){
	class Util{

    static isElementVisible(ele) {
		
		return browser.wait(function () {
			browser.sleep(2000);
			return ele.isPresent().then(function (present) {
				if (present) {
					return true;
				}
				return ele.isDisplayed().then(function (isDisplayed) {
							return isDisplayed;
						},
						function (error) {
							return false
						});
			});
		}, 20 * 1000,"Element "+ ele +" is not present");
	}

	static isElementPresent(ele) {
		return browser.wait(function () {
			return ele.isPresent();
		}, 20000,"Element "+ ele +" is not present");
	}

}
module.exports = Util;

//exports.module = new Utils();