import { Component, OnInit, Input, AfterContentInit, ContentChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
    selector: 'mt-input-content',
    templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {

    @ContentChild(NgModel) model: NgModel;

    @Input() public label: string;
    @Input() public errorMessage: string;

    public input: any;

    constructor() { }

    public ngOnInit(): void { }

    public ngAfterContentInit(): void {
        this.input = this.model;
        if (!this.input) {
            throw new Error('Este componente necessita que seja passado um NgModel.');
        }
    }

    public hasSuccess(): boolean {
        return this.input.valid && (this.input.dirty || this.input.touched);
    }

    public hasError(): boolean {
        return this.input.invalid && (this.input.dirty || this.input.touched);
    }
}
