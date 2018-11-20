import { ItemCart } from './../restaurant-detail/shopping-cart/item-cart.model';
import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { OrderService } from './order.service';

@Component({
    selector: 'mt-order',
    templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

    public delivery = 8;

    constructor(private orderService: OrderService) { }

    ngOnInit() { }

    public getRadioOption(): RadioOption[] {
        let radioOptions: RadioOption[] = [];
        radioOptions.push(new RadioOption('Dinheiro', 'MON'));
        radioOptions.push(new RadioOption('Cartão de Débito', 'DEB'));
        radioOptions.push(new RadioOption('Cartão Refeição', 'REF'));

        return radioOptions;
    }

    public itemsValue(): number {
        return this.orderService.itemsValue();
    }

    public itemsCart(): ItemCart[] {
        return this.orderService.itemsCart();
    }

    public increaseQty(item: ItemCart): void {
        return this.orderService.increaseQty(item);
    }

    public decreaseQty(item: ItemCart): void {
        return this.orderService.decreaseQty(item);
    }

    public remove(item: ItemCart): void {
        return this.orderService.remove(item);
    }
}
