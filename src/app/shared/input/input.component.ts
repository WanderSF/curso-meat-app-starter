import { Component, OnInit, Input, AfterContentInit, ContentChild } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms';

@Component({
    selector: 'mt-input-container',
    templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {

    @ContentChild(NgModel) model: NgModel;
    @ContentChild(FormControlName) control: FormControlName;

    @Input() public label: string;
    @Input() public errorMessage: string;

    public input: any;

    constructor() { }

    public ngOnInit(): void { }

    public ngAfterContentInit(): void {
        this.input = this.model || this.control;
        if (!this.input) {
            throw new Error('Esse componente precisa ser usado com a diretiva ngModel ou formControlName.');
        }
    }

    public hasSuccess(): boolean {
        return this.input.valid && (this.input.dirty || this.input.touched);
    }

    public hasError(): boolean {
        return this.input.invalid && (this.input.dirty || this.input.touched);
    }
}
