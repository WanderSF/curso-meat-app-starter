import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from '../../core/restaurants.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'mt-reviews',
    templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

    reviews: Observable<any>;

    constructor(private restaurantsService: RestaurantsService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.reviews = this.restaurantsService.reviewsOfRestaurant(this.route.parent.snapshot.params['id']);
    }

}
