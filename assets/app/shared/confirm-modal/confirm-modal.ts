import {Component, OnInit, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'confirm-modal',
    templateUrl: 'confirm-modal.html',
    styleUrls: ['confirm-modal.css'],

})

export class ConfirmModal implements OnInit {

    @Input()
    id: string = 'myModal';

    @Input()
    title: string = '';

    @Input()
    data: string = '';



    constructor(){}

    ngOnInit(){

    }
}