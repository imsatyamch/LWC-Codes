import { LightningElement ,api} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CAR from '@salesforce/schema/Car__c';
import NAME from '@salesforce/schema/Car__c.Name';
import COLOR from '@salesforce/schema/Car__c.Color__c';
import YEAR from '@salesforce/schema/Car__c.Year__c';

export default class RecordForm extends LightningElement {
    @api recordId;
    @api objectApiName;
    objectName = CAR;
    fieldList = [NAME,COLOR,YEAR];

    successHandler(event){
        console.log(event.detail.id);
        const evt = new ShowToastEvent({
            title : "New Car",
            message:"New Car Created Check-->>"+ event.detail.id,
            variant:"Success"
        })
        this.dispatchEvent(evt);
    }
}