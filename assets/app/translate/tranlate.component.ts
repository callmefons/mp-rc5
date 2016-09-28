import { Component } from '@angular/core';
import {TranslateService} from "./translate.service";

@Component({
    selector: 'my-translate',
    template: `
         <button style="margin-top: 8px;"
                *ngFor="let lang of supportedLanguages"
                (click)="selectLang(lang.value)"
                class="btn btn-default btn-sm" [class.btn-primary]="isCurrentLang(lang.value)">
                {{ lang.display }}
            </button>
    `
})
export class TranslateComponent {

    public supportedLanguages: any[];

    constructor(private _translate: TranslateService){}

    ngOnInit(){
        // standing data
        this.supportedLanguages = [
            { display: 'EN', value: 'en' },
            { display: 'TH', value: 'th' }
        ];
    }


    isCurrentLang(lang: string) {
        return lang === this._translate.currentLang;

    }

    selectLang(lang: string) {
        // set default;
        this._translate.use(lang);
    }

}
