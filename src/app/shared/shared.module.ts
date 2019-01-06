import { NgModule } from '@angular/core';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        InputComponent,
        RadioComponent,
        RatingComponent
    ],
    declarations: [
        InputComponent,
        RadioComponent,
        RatingComponent
    ],
    providers: [],
})
export class SharedModule {
    // Usa-se SharedModule.forRoot() no AppModule e apenas SharedModule nos outros
    // static forRoot(): ModuleWithProviders {
    //     return {
    //         ngModule: SharedModule,
    //         providers: [ OrderService, RestaurantsService, ShoppingCartService ]
    //     }
    // }
 }
