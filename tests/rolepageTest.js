const loginPage = require('../pages/loginPage');
const homePage = require('../pages/homePage');
const rolePage = require('../pages/rolePage');
const testdata = require('../testdata/data');
//const { threadId } = require('worker_threads');


describe('Role page : ', function () {
    xit('Validate presence of roles table', function () {
       homePage.clickOnVerticalRoleLink();

       expect(rolePage.rowCountOfRolesTable()).toBeGreaterThanOrEqual(3);
       
    })

    xit('validate number of roles created', function () {
      homePage.clickOnVerticalRoleLink();
        expect(rolePage.rowCountOfRolesTable()).toEqual(rolePage.getTotalNumOfRoles());

     })


    xit('validation of new role creation', async function(){
      homePage.clickOnVerticalRoleLink();
    expect(rolePage.AddNewRoleWindowOpened()).toBeTruthy();
       var name = testdata.newRoleDetails.Name;
       var descrp = testdata.newRoleDetails.Description;
       browser.sleep(1000);
       rolePage.setName(name);
       rolePage.setDescription(descrp);
       rolePage.selectImportingCheckBox();
       browser.sleep(2000);
       rolePage.saveNewRole();
       browser.sleep(2000);
       await rolePage.searchBarRoleSearch(name);

       
    })


    fit('validation of deletion of existing role', async function(){
       homePage.clickOnVerticalRoleLink();
       var name = testdata.newRoleDetails.Name;
       browser.sleep(2000);
       await rolePage.searchBarRoleSearch(name);
       await rolePage.searchBrResult();
       browser.sleep(3000);
       rolePage.editExistingRole();
       rolePage.deleteExistingRole();
       browser.sleep(3000);
       rolePage.deleteExistingRoleMessage();

       await rolePage.searchBarRoleSearch(name);
       
    })   

})
