import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class RestaurantsProvider {

  constructor(public http: Http) {}

  // CRUD
  // 1. GET all restaurants  (/restaurants)
  getRestaurants() {
    return this.http
      .get('https://ufoods.herokuapp.com/api/v1/restaurants')
      .map(res => res.json())
  }
}
