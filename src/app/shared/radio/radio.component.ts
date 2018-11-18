import { Component, OnInit, Input } from '@angular/core';
import { RadioOption } from './radio-option.model';

@Component({
    selector: 'mt-radio',
    templateUrl: './radio.component.html'
})
export class RadioComponent implements OnInit {

    @Input() public options: RadioOption[];

    public value: any;

    constructor() { }

    ngOnInit() {
    }

    public setValue(value: any): void {
        this.value = value;
    }
}
