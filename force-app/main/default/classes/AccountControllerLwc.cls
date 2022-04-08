public with sharing class AccountControllerLwc {
    @AuraEnabled(cacheable=True)
    public static List<contact>queryRelatedContacts(String accId ) {
            return [select Id,FirstName,LastName,Email,Phone,Account.Name 
            from Contact where AccountID = :accID];
    }
}
