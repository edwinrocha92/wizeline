public with sharing class PSearch {
    @AuraEnabled(Cacheable = true)
    public static list<Billable_Project__c> getProjectData(String textkey) {
        textkey = '%' + textkey + '%';
        list<Billable_Project__c> ProjectList = [SELECT  Id, Name From Billable_Project__c WHERE Name LIKE :textkey];
        if(ProjectList.isEmpty()) {
            throw new AuraHandledException('No Record Found..');
        }
        return ProjectList; 
    }
}