import { ItemCart } from './item-cart.model';
import { MenuItem } from '../menu-item/menu-item.model';

export class ShoppingCartService {

    items: ItemCart[] = [];

    addItem(item: MenuItem): void {
        let foundItem = this.items.find(itemCart => itemCart.menuItem.id === item.id);

        if (foundItem) {
            this.increaseQty(foundItem);
        } else {
            this.items.push(new ItemCart(item));
        }
    }

    removeItem(item: ItemCart): void {
        this.items.splice(this.items.indexOf(item), 1);
    }

    increaseQty(item: ItemCart): void {
        item.quantity++;
    }

    decreaseQty(item: ItemCart): void {
        item.quantity--;
        if (item.quantity <= 0) {
            this.removeItem(item);
        }
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
