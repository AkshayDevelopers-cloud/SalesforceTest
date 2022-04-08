import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
message='akshay mahadule';

handleChange(event){
this.message = event.target.value;
}

}