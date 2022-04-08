import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class ClientSiteNavigation extends NavigationMixin (LightningElement) {
handleButtonClick(){
    // Navigate to the Account home page
    this[NavigationMixin.Navigate]({
        type: 'standard__objectPage',
        attributes: {
            objectApiName:'Contact',
            actionName: 'list',
        }
    }
    );
}

}


