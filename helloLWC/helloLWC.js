import { LightningElement,track } from 'lwc';

export default class HelloLWC extends LightningElement {
    @track greetingMsg = "";
    @track showDiv = false;
    @track cityList = ['Delhi','Bengaluru','Hyderabad','Basti'];

    GreetingHandler(event){
        this.greetingMsg = event.target.value;
    }

    checkBoxHandler(event){
        this.showDiv = event.target.checked;
    }
}