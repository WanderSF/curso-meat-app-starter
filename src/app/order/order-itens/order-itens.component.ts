import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemCart } from 'app/restaurant-detail/shopping-cart/item-cart.model';

@Component({
    selector: 'mt-order-itens',
    templateUrl: './order-itens.component.html'
})
export class OrderItensComponent implements OnInit {

    @Input() itemsCart: ItemCart[] = [];

    @Output() increaseQty = new EventEmitter<ItemCart>();
    @Output() decreaseQty = new EventEmitter<ItemCart>();
    @Output() remove = new EventEmitter<ItemCart>();

    constructor() { }

    public ngOnInit() { }

    public emitIncreaseQty(item: ItemCart): void {
        this.increaseQty.emit(item);
    }

    public emitDecreaseQty(item: ItemCart): void {
        this.decreaseQty.emit(item);
    }

    public emitRemove(item: ItemCart): void {
        this.remove.emit(item);
    }
}
