import { MEAT_API } from './../app.api';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.service';
import { ItemCart } from 'app/restaurant-detail/shopping-cart/item-cart.model';
import { Order } from './order.model';

@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartService, private http: Http) { }

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

    public clear(): void {
        this.cartService.clear();
    }

    public checkOrder(order: Order): Observable<string> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post(`${MEAT_API}/orders`, JSON.stringify(order), new RequestOptions({ headers: headers }))
                            .map(response => response.json())
                            .map(orderReturned => orderReturned.id);
    }
}
