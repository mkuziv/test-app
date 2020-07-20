import { Injectable } from '@angular/core';
import { StoreItem } from './store-item.model';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  basket: StoreItem[] = [];
  constructor() { }

  putInBasket(order: StoreItem) {
    this.basket.push(order);
  }
  getOrder() {
    return this.basket;
  }
}
