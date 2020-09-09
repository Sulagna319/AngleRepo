const utilpage = require('../utils/utils');
let RolePage = function() {

    //locators
    this.totalRolesCount = element(by.xpath("//div[contains(@class,'page-count')]"));
    this.addRole = element(by.xpath("//mat-icon[text()='add']"));
    this.newRolePageTitle = element(by.xpath("//span[.='New Role']"));
    this.viewModuleRole = element(by.xpath("//mat-icon[text()='view_module']"));
    this.roleRows = element.all(by.xpath('//datatable-body-row'));
    this.saveRole = element(by.xpath("(//mat-icon[@class='mat-icon material-icons'])[2]"));
    //this.deleteRoleAlert = element(by.xpath("(//span[@class ='mat-button-wrapper']//mat-icon[text()='delete'])[2]"));
    this.deleteRoleAlert = element(by.xpath("(//mat-icon[@class='mat-icon material-icons'][text()='delete'])[2]"));
    this.deleteDialogueBoxMessage = element(by.xpath("//app-common-delete-item-dialog[@class ='ng-star-inserted' ]//div"));
    this.deleteRole = element(by.xpath("//span[@class ='mat-button-wrapper']//mat-icon[text()='delete']"));
    //this.addedRoleName = element(by.xpath("(//mat-toolbar[@class='toolbar mat-toolbar mat-toolbar-single-row']//span)[1]"));
    this.editRoleButton = element(by.css("button[aria-describedby='cdk-describedby-message-3'] .mat-icon"));
    this.searchBar = element(by.xpath("(//input[contains(@class,'mat-input-element')])[1]"));
    //this.saveRole = element(by.xpath("//button//span[@class='mat-button-wrapper']//mat-icon[text()='done']"));
    this.cancelRoleCreation = element(by.xpath("//mat-icon[text()='close']"));
    this.searchResult = element(by.xpath("//span[@title='prof6']"));
    this.name = element(by.xpath("//input[@placeholder='Name']"));
    this.description = element(by.xpath("//input[@placeholder='Description']"));
    this.importingCheckBox = element(by.xpath("//label[text()='Importing']//ancestor::label//div[1][@class='mat-checkbox-inner-container']"));
    this.indexingCheckBox = element(by.xpath("//input[@id='mat-checkbox-323']"));
    this.queringCheckBox = element(by.xpath("//input[@id='mat-checkbox-324']"));
    this.displayingCheckBox = element(by.xpath("//input[@id='mat-checkbox-325']"));
    this.editingCheckBox = element(by.xpath("//input[@id='mat-checkbox-326']"));
    this.AdministrationCheckBox = element(by.xpath("//input[@id='mat-checkbox-327']"));
    this.configuringCheckBox = element(by.xpath("//input[@id='mat-checkbox-328']"));
    this.superAdminCheckBox = element(by.xpath("//input[@id='mat-checkbox-330']"));
    this.ssoUserCheckBox = element(by.xpath("//input[@id='mat-checkbox-329']"));
    this.addGroupToRole = element(by.xpath("//div[@class='mat-form-field-suffix ng-tns-c3-54 ng-star-inserted']//mat-icon[@class='mat-icon material-icons']"));
    this.selectGroup = element(by.xpath("//mat-option[4]/span[@class='mat-option-text']"));


    //methods

    this.rowCountOfRolesTable = function() {
        if (utilpage.isElementPresent( this.roleRows)){
            return  this.roleRows.count();
           
        }    
        else
            return 0;
    }

    this.getTotalNumOfRoles = function() {
        if (utilpage.isElementVisible(this.totalRolesCount)) {
            return this.totalRolesCount.getText().then(function (totalRoleStr) {
                return Number(totalRoleStr.trim());
            });
        }
        else
            return 0;
    }

    this.AddNewRoleWindowOpened = function() {
        if (utilpage.isElementVisible(this.addRole)) {
            this.addRole.click();
            if (utilpage.isElementVisible(this.newRolePageTitle))
                return true;
            else
                return false;
        }
        else
            return false;
    }

    this.setName = function(Name) {
        if (utilpage.isElementVisible(this.name) && Name != "")
            this.name.sendKeys(Name);
    }

    this.setDescription = function(description) {
        if (utilpage.isElementVisible(this.description) && description != "")
            this.description.sendKeys(description);
    }
    

    this.saveNewRole = function() {
        if (utilpage.isElementPresent(this.saveRole))
            this.saveRole.click();
    }

    this.editExistingRole = function() {
        try {
         var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(this.editRoleButton), 10000);
        this.editRoleButton.click();
        console.log('Editing Role');
            
        } catch (ElementNotVisibleError) {
            
        }    
    }

    

    this.deleteExistingRole = async function() {
        try {
            if (utilpage.isElementPresent(this.deleteRole))
            this.deleteRole.click();
            console.log('Trying to Deleting Role');
            
        } catch (ElementNotVisibleError) {
            
        }
        
    }

    this.cancelRoleEdit =  function() {
        try {
            if (utilpage.isElementPresent(this.cancelRoleCreation))
            this.cancelRoleCreation.click();
            
        } catch (ElementNotVisibleError) {
            
        }
        
    }

   
    this.deleteExistingRoleMessage = async function() {

        
        try {

            var EC = protractor.ExpectedConditions;
            browser.wait(EC.visibilityOf(this.deleteRoleAlert), 5000);
            this.deleteRoleAlert.click();
            console.log('Deleted role!!');
            
        } catch (ElementNotVisibleError) {
            
        }
      
    }



    this.addGroupToRole = function(){
        if (utilpage.isElementPresent(this.addGroupToRole))
            this.addGroupToRole.click();
            this.selectGroup.click();

    }

    this.selectImportingCheckBox = function(){
        if (utilpage.isElementPresent(this.importingCheckBox))
            this.importingCheckBox.click();   
    }

    this.selectIndexingCheckBox = function(){
        if (utilpage.isElementPresent(this.indexingCheckBox))
            this.indexingCheckBox.click();   
    }

    this.selectQueringCheckBox = function(){
        if (utilpage.isElementPresent(this.queringCheckBox))
            this.queringCheckBox.click();   
    }

    this.selectDisplayingCheckBox = function(){
        if (utilpage.isElementPresent(this.displayingCheckBox))
            this.displayingCheckBox.click();   
    }

    this.selectEditingCheckBox = function(){
        if (utilpage.isElementPresent(this.editingCheckBox))
            this.editingCheckBox.click();   
    }

    this.selectAdminCheckBox = function(){
        if (utilpage.isElementPresent(this.AdministrationCheckBox))
            this.AdministrationCheckBox.click();   
    }

    this.selectConfiguringCheckBox = function(){
        if (utilpage.isElementPresent(this.configuringCheckBox))
            this.configuringCheckBox.click();   
    }

    this.selectSuperAdminCheckBox = function(){
        if (utilpage.isElementPresent(this.superAdminCheckBox))
            this.superAdminCheckBox.click();   
    }

    this.selecTSSoUserCheckBox = function(){
        if (utilpage.isElementPresent(this.ssoUserCheckBox))
            this.ssoUserCheckBox.click();   
    }

    this.searchBrResult = async function(){
        //let rowCount = await this.rowCountOfRolesTable();
        let rowCount = await this.getTotalNumOfRoles()
        console.log(rowCount);
        console.log('in search bar loop');
        if(rowCount > 0)
            {
                var resultTab =element(by.xpath(("(//div[@class ='mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin']//input)[1]")));
               await browser.actions().mouseMove(resultTab).click().perform();
                browser.sleep(2000);
            }
    }
        
                
    this.searchRoleNameThroughRows = async function(Name){
        
            let rowCount = await this.rowCountOfRolesTable();
            console.log(rowCount);
         var NameText, NameRow;
         for (var rowNum = 1; rowNum <= rowCount; rowNum++) {
            NameRow = element(by.xpath("//datatable-row-wrapper[" + rowNum + "]//datatable-body-cell[2]"));

            if (utilpage.isElementVisible(NameRow)) {
                NameText = await NameRow.getText();
            }

            if (NameText == Name)
                //return true;
                return rowNum;

        }
        return false;
    }

    this.searchBarRoleSearch = async function(text){
        if (utilpage.isElementPresent(this.searchBar)&& text != "")
            this.searchBar.sendKeys(text);
            browser.sleep(2000);
            //let rowCount = await this.rowCountOfRolesTable();
            let rowCount = await this.getTotalNumOfRoles()
            console.log(rowCount);
            {
            if(rowCount > 0)
                {
                    console.log('Role found!!');
                }
            else console.log('Role not found');

            }
    }
    

}
module.exports = new RolePage();