const loginpage = require('../pages/loginPage');
const testdata = require('../testdata/data');
const homepage = require('../pages/homePage');
const rolePage = require('../pages/rolePage');


describe('LoginPage Test:', function(){
  
  xit('Validation login Page Title' , function(){
      expect(browser.getTitle()).toBe('SAPERION User Management App');
     
  })

  xit('Validation locked user Error Message' , function(){
    loginpage.loginToApp(testdata.lockUserData.uid,testdata.lockUserData.pwd,testdata.lockUserData.tenant);
    loginpage.lockUservalidation();
   })

   xit('Validation Deleted user error message' , function(){
    loginpage.loginToApp(testdata.deleteUserData.uid,testdata.deleteUserData.pwd,testdata.deleteUserData.tenant);
    loginpage.lockUservalidation();
   })

   fit('Validation Sign in Functionality' , function(){
    loginpage.loginToApp(testdata.loginData.uid,testdata.loginData.pwd,testdata.loginData.tenant);
    homepage.homepageValidation();
   })

  

})





