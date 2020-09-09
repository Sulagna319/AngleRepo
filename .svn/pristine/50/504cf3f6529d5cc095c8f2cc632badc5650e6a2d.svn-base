const utilpage = require('../utils/utils');
let Userpage = function() {

    this.usersTableRows = element.all(by.xpath('//datatable-body-row'));
    this.totalUsersCreated = element(by.xpath("//div[contains(@class,'page-count')]"));
    this.addUser = element(by.xpath("//mat-icon[text()='add']"));
    this.newUserTxt = element(by.xpath("//span[text()='New User']"));
    this.fullName = element(by.xpath("//input[@formcontrolname='fullNameControl']"));
    this.shortName = element(by.xpath("//input[@formcontrolname='shortNameControl']"));
    this.description = element(by.xpath("//input[@formcontrolname='descriptionControl']"));
    this.email = element(by.xpath("//input[@formcontrolname='emailControl']"));
    this.distinguishedName = element(by.xpath("//input[@formcontrolname='distinguishedNameControl']"));
    this.guid = element(by.xpath("//input[@formcontrolname='guidControl']"));
    this.password = element(by.xpath("//input[@formcontrolname='passwordControl']"));
    this.confirmPassword = element(by.xpath("//input[@formcontrolname='passwordRepeatControl']"));
    this.save = element(by.xpath("//mat-icon[text()='done']"));

    this.rowCountOfUsersTable = function() {
        if (utilpage.isElementPresent(this.usersTableRows))
            return this.usersTableRows.count();
        else
            return 0;
    }

    this.getTotalNumOfusers = function() {
        if (utilpage.isElementVisible(this.totalUsersCreated)) {
            return this.totalUsersCreated.getText().then(function (totalUserStr) {
                return Number(totalUserStr.trim());
            });
        }
        else
            return 0;
    }

    this.isAddNewUserWindowOpened = function() {
        if (utilpage.isElementVisible(this.addUser)) {
            this.addUser.click();
            if (utilpage.isElementVisible(this.newUserTxt))
                return true;
            else
                return false;
        }
        else
            return false;
    }

    this.setFullName = function(fName) {
        if (utilpage.isElementVisible(this.fullName) && fName != "")
            this.fullName.sendKeys(fName);
    }

    this.setShortlName = function(sName) {
        if (utilpage.isElementVisible(this.shortName) && sName != "")
            this.shortName.sendKeys(sName);
    }
    this.setDescription = function(desc) {
        if (utilpage.isElementVisible(this.description) && desc != "")
            this.description.sendKeys(desc);
    }
    this.setEmail = function(eMail) {
        if (utilpage.isElementVisible(this.email) && eMail != "")
            this.email.sendKeys(eMail);
    }
    this.setDistinguishedName = function(dName) {
        if (utilpage.isElementVisible(this.distinguishedName) && dName != "")
            this.distinguishedName.sendKeys(dName);
    }

    this.setGuid = function(guidVal) {
        if (utilpage.isElementVisible(this.guid) && guidVal != "")
            this.guid.sendKeys(guidVal);
    }
    this.setPassword = function(pwd) {
        if (utilpage.isElementVisible(this.password) && pwd != "")
            this.password.sendKeys(pwd);
    }
    this.setConfirmPassword = function(confirmPwd) {
        if (utilpage.isElementVisible(this.confirmPassword) && confirmPwd != "")
            this.confirmPassword.sendKeys(confirmPwd);
    }

    this.clickOnSave = function() {
        if (utilpage.isElementPresent(this.save))
            this.save.click();
    }

    this.isUserPresent = async function(fullN, shortN) {
        browser.sleep(3000);
        browser.refresh();
        browser.sleep(3000);
        //browser.navigate().refresh();
        let rowCount = await this.rowCountOfUsersTable();

        console.log(rowCount);
        var fullNameColumText, fullNameEle, shortNameEle, shortNameColumText;
        for (var rowNum = 1; rowNum <= rowCount; rowNum++) {
            fullNameEle = element(by.xpath("//datatable-row-wrapper[" + rowNum + "]//datatable-body-cell[2]"));
            shortNameEle = element(by.xpath("//datatable-row-wrapper[" + rowNum + "]//datatable-body-cell[3]"));

            if (utilpage.isElementVisible(fullNameEle)) {
                fullNameColumText = await fullNameEle.getText();
            }

            if (utilpage.isElementVisible(shortNameEle)) {
                shortNameColumText = await shortNameEle.getText();
            }

            if (fullNameColumText == fullN && shortNameColumText == shortN)
                return true;

        }
        return false;
    }


    this.isUserTableSortedInAscending = function(columnName) {
        // var sortingIcon = element(by.xpath("//span[text()='" + columnName + "']/parent::span/following-sibling::span"));
        element(by.xpath("//span[text()='" + columnName + "']")).click();
        browser.sleep(3000)
        var sorted = [], unSorted = [];
        var i = 0;
        var columnData = element.all(by.xpath("//datatable-body-cell[count(//datatable-header-cell[contains(.,'" + columnName + "')]/preceding-sibling::datatable-header-cell)+1]//span"));
        columnData.each(function (eachName) {
            eachName.getText().then(function (text) {
                unSorted[i] = text;
                i++;
            });
        }).then(function () {
            sorted = unSorted.slice(); //creating another array from unSorted 
            sorted.sort(function (a, b) { return a - b });
        }).then(function () {
            console.log("Unsorted : " + unSorted);
            console.log("sorted : " + sorted);
        });

        var k = unSorted.length;
        while (k--) {// 0 means false in JS
            if (sorted[k] !== unSorted[k])
                return false;
        }
        return true
    }

}
module.exports = new Userpage();