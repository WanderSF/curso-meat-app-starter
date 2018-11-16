import { ItemCart } from './item-cart.model';
import { MenuItem } from '../menu-item/menu-item.model';

export class ShoppingCartService {

    items: ItemCart[] = [];

    addItem(item: MenuItem): void {
        let foundItem = this.items.find(itemCart => itemCart.menuItem.id === item.id);

        if (foundItem) {
            foundItem.quantity++;
        } else {
            this.items.push(new ItemCart(item));
        }
    }

    removeItem(item: ItemCart): void {
        this.items.splice(this.items.indexOf(item), 1);
    }

    clear(): void {
        this.items = [];
    }

    total(): number {
        return this.items
            .map(item => item.value())
            .reduce((prev, value) => prev + value, 0);
    }
}
