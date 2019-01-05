import { ItemCart } from './../restaurant-detail/shopping-cart/item-cart.model';
import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { Order, OrderItem } from './order.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'mt-order',
    templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

    public orderForm: FormGroup;

    public delivery = 8;

    constructor(private orderService: OrderService, private router: Router, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.orderForm = this.formBuilder.group({
            name: this.formBuilder.control(''),
            email: this.formBuilder.control(''),
            emailConfirmation: this.formBuilder.control(''),
            address: this.formBuilder.control(''),
            number: this.formBuilder.control(''),
            optionalAddress: this.formBuilder.control(''),
            paymentOption: this.formBuilder.control('')
        });
    }

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

    public checkOrder(order: Order): void {
        order.orderItems = this.itemsCart().map(
            (itemCart: ItemCart) => new OrderItem(itemCart.quantity, itemCart.menuItem.id));

        this.orderService.checkOrder(order).subscribe((idOrder: string) => {
            this.orderService.clear();
            this.router.navigate(['/order-summary']);
        });
    }
}
