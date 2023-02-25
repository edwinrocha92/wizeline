import { LightningElement, track } from 'lwc';
import getProjectData from '@salesforce/apex/PSearch.getProjectData';
export default class BillableProjectLightningWebComponent extends LightningElement {
    
    searchKey;
    @track projects;
    //This Funcation will get the value from Text Input.
    handelSearchKey(event){
        this.searchKey = event.target.value;
    }

    //This funcation will fetch the Account Name on basis of searchkey
    SearchAccountHandler(){
        getProjectData({textkey: this.searchKey})
        .then(result => {
                this.projects = result;
        })
        .catch( error=>{
            this.projects = null;
        });
    }

    cols = [
        {label:'Id', fieldName:'Id' , type:'Id'},
        {label:'Project Name', fieldName:'Name' , type:'text'},
    ]
}