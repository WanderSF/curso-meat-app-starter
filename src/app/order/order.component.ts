import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';

@Component({
    selector: 'mt-order',
    templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    public getRadioOption(): RadioOption[] {
        let radioOptions: RadioOption[] = [];
        radioOptions.push(new RadioOption('Dinheiro', 'MON'));
        radioOptions.push(new RadioOption('Cartão de Débito', 'DEB'));
        radioOptions.push(new RadioOption('Cartão Refeição', 'REF'));

        return radioOptions;
    }
}
