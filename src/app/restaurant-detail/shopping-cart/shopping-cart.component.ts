import { MenuItem } from './../menu-item/menu-item.model';
import { ShoppingCartService } from './shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { ItemCart } from './item-cart.model';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): ItemCart[] {
      return this.shoppingCartService.items;
  }

  total(): number {
      return this.shoppingCartService.total();
  }

  addItem(menuItem: MenuItem): void {
      this.shoppingCartService.addItem(menuItem);
  }

  removeItem(itemCart: ItemCart): void {
      this.shoppingCartService.removeItem(itemCart);
  }

  clear(): void {
      this.shoppingCartService.clear();
  }

}
