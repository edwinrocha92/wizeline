import { LightningElement, track, api } from 'lwc';
import getProjectData from '@salesforce/apex/PSearch.getProjectData';
import { NavigationMixin } from 'lightning/navigation';
export default class BillableProjectLightningWebComponent extends NavigationMixin(LightningElement) {
    
    searchKey;
    @track projects;
    @track recordExits = false; 
    @api placeholder = "";
    @api recordId;

    connectedCallback(){
        this.recordId;
    }
    
    //This Funcation will get the value from Text Input.
    handelSearchKey(event){
        this.searchKey = event.target.value;
    }

    //This funcation will fetch the Account Name on basis of searchkey
    SearchAccountHandler(){
        getProjectData({textkey: this.searchKey})
        .then(result => {
                this.projects = result;
                if (result != null) {
                    this.recordExits =true;
                }
        })
        .catch( error=>{
            this.projects = null;
        });
    }


    // Navigate to View Account Page
    navigateToViewProjectPage(event) {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: event.target.value,
                objectApiName: 'Billable_Project__c',
                actionName: 'view'
            },
        });
    }
}