import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'mt-rating',
    templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

    public ratings = [1, 2, 3, 4, 5];
    public rate = 0;
    public temporaryRate;

    @Output() rated = new EventEmitter<number>();

    constructor() { }

    public ngOnInit() { }

    public setRate(rate: number): void {

        this.rate = rate;
        this.temporaryRate = undefined;
        this.rated.emit(this.rate);
    }

    public setTemporaryRate(rate: number): void {

        if (this.temporaryRate === undefined) {

            this.temporaryRate = this.rate;
        }
        this.rate = rate;
    }

    public clearTemporaryRate(): void {

        if (this.temporaryRate !== undefined) {

            this.rate = this.temporaryRate;
            this.temporaryRate = undefined;
        }
    }
}
