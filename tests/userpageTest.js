const userpage = require('../pages/userPage');
const homePage = require('../pages/homePage');
const testdata = require('../testdata/data')


describe('Users page : ', function () {
    it('Verify presence of users table', function () {
       homePage.clickOnVerticalUsersLink();
       expect(userpage.rowCountOfUsersTable()).toBeGreaterThanOrEqual(3);
       
    })
 
    it('verify number of users created', function () {
       expect(userpage.rowCountOfUsersTable()).toEqual(userpage.getTotalNumOfusers());
    })
 
    it('verify user table is sorted by ID', function () {
       expect(userpage.isUserTableSortedInAscending("Id")).toEqual(true);
    })
 
    it('verify user table is sorted by Short Name', function () {
       expect(userpage.isUserTableSortedInAscending("Short Name")).toEqual(true);
    })
 
    fit('verify new user creation', function () {
      homePage.clickOnVerticalUsersLink();
     expect(userpage.isAddNewUserWindowOpened()).toBeTruthy();
       var fName = testdata.newUserData.fullName;
       var sName = testdata.newUserData.shortName;
       userpage.setFullName(fName);
       userpage.setShortlName(sName);
       userpage.setPassword(testdata.newUserData.password);
       userpage.setConfirmPassword(testdata.newUserData.confirmPassword);
       userpage.clickOnSave();
       expect(userpage.isUserPresent(fName,sName)).toBeTruthy();     
    })

})   