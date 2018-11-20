import { Injectable } from '@angular/core';
import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.service';
import { ItemCart } from 'app/restaurant-detail/shopping-cart/item-cart.model';

@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartService) { }

    public itemsValue(): number {
        return this.cartService.total();
    }

    public itemsCart(): ItemCart[] {
        return this.cartService.items;
    }

    public increaseQty(item: ItemCart): void {
        this.cartService.increaseQty(item);
    }

    public decreaseQty(item: ItemCart): void {
        this.cartService.decreaseQty(item);
    }

    public remove(item: ItemCart): void {
        this.cartService.removeItem(item);
    }
}
