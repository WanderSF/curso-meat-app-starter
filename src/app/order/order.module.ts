import { ORDER_ROUTES } from './order.routes';
import { NgModule } from '@angular/core';
import { OrderComponent } from './order.component';
import { OrderItensComponent } from './order-itens/order-itens.component';
import { DeliveryCostsComponent } from './delivery-costs/delivery-costs.component';
import { OrderService } from './order.service';
import { SharedModule } from 'app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(ORDER_ROUTES)
    ],
    exports: [],
    declarations: [
        OrderComponent,
        OrderItensComponent,
        DeliveryCostsComponent
    ],
    providers: [
        OrderService
    ],
})
export class OrderModule { }
