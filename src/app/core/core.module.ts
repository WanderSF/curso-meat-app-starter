import { NgModule } from '@angular/core';
import { OrderService } from './order.service';
import { RestaurantsService } from './restaurants.service';
import { ShoppingCartService } from './shopping-cart.service';

@NgModule({
    providers: [ OrderService, RestaurantsService, ShoppingCartService ]
})
export class CoreModule { }
