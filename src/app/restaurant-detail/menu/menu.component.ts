import { RestaurantsService } from './../../restaurants/restaurants.service';
import { MenuItem } from './../menu-item/menu-item.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'mt-menu',
    templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

    menuItens: Observable<MenuItem[]>;

    constructor(private restaurantsService: RestaurantsService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.menuItens = this.restaurantsService.menuOfRestaurant(this.route.parent.snapshot.params['id']);
    }
}
