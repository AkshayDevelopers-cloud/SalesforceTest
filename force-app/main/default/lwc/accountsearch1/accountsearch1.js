import { LightningElement ,wire} from 'lwc';
import queryAccountsByEmployeeNumber from '@salesforce/apex/AccountListLWC.queryAccountsByEmployeeNumber';

export default class Accountsearch1 extends LightningElement {

    numberOfEmployees = null;
    handleChange(event) {
        this.numberOfEmployees = event.detail.value;
    }
    reset() {
        this.numberOfEmployees = null;
    }
    @wire(queryAccountsByEmployeeNumber, { numberOfEmployees: '$numberOfEmployees' })
    accounts;  
}