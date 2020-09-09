
let LoginPage= function() {
   
        this.userName = element(by.id('userName'));
        this.userPassword = element(by.id('userPassword'));
        this.userTenant = element(by.id('userTenant'));
        this.signInBtn = element(by.id('submit'));
        this.lockusermsg = element(by.css('.mat-error'));
   

    this.get = function(url){
        browser.get(url);
    }    

    this.setUserName = function(uid) {
        this.userName.clear();
        this.userName.sendKeys(uid);
    }

    this.setUserPassword = function(pwd) {
        this.userPassword.clear();
        this.userPassword.sendKeys(pwd);
    }

    this.setTenant = function(tenant){
        this.userTenant.clear();
        this.userTenant.sendKeys(tenant);
    }

    this.clickSignIn = async function(){
        this.signInBtn.click();
    }

    this.loginToApp = function(uid, pwd, tenant){
        this.setUserName(uid);
        this.setUserPassword(pwd);
        this.setTenant(tenant);
        this.clickSignIn();
        return require('./homePage.js');
    }  

    this.lockUservalidation =async function(){
        browser.sleep(1000);
        expect((this.lockusermsg).isPresent()).toBe(true);
        

    }

}
module.exports = new LoginPage();
