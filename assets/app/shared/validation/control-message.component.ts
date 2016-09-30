import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {ValidationService} from "./validation.service";

@Component({
    selector: 'control-messages',
    template: `<div *ngIf="errorMessage !== null" style="margin-top: 5px; margin-bottom: -10px">
                <small style="color: #a94442">{{errorMessage}} *</small>
             </div>`,
})
export class ControlMessagesComponent {
    @Input() control: FormControl;
    constructor() { }

    get errorMessage() {
        for (let propertyName in this.control.errors) {
            if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched && this.control.dirty) {
                return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
            }
        }

        return null;
    }
}
