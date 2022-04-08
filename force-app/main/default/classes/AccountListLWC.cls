public with sharing class AccountListLWC {
    @AuraEnabled(cacheable=True)
    public static List<Account>queryAccountsByEmployeeNumber(Integer numberOfEmployees ) {
  return [select Name from account where numberOfEmployees >= :numberOfEmployees ];
    
}
}