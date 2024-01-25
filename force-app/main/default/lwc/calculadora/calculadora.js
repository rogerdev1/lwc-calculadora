import { LightningElement, track, wire } from 'lwc';

export default class Calculadora extends LightningElement {

    @track valorButton;

    appendToDisplay(event){
        this.template.querySelector('.display').value += event.target.dataset.value;
    }

    offDisplay(){
        this.template.querySelector('.display').placeholder = '';
        this.template.querySelector('.display').value = '';
    }

    onDisplay(){
        this.template.querySelector('.display').placeholder = '0';
    }

    clearDisplay(){
        this.template.querySelector('.display').value = '';
    }

    calculate(){
        try {
            this.template.querySelector('.display').value = eval(this.template.querySelector('.display').value);
        } catch (error) {
            this.template.querySelector('.display').value = 'Error';
        }
    }
}
