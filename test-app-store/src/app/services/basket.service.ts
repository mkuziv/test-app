import { Injectable } from '@angular/core';
import { StoreItem } from '../model/store-item.model';
// import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  // basket$ = new Subject<StoreItem[]>();
  basket: StoreItem[] = [];
  constructor() { }

  putInBasket(item: StoreItem) {
    this.basket.push(item);
    localStorage.setItem("basket", JSON.stringify(this.basket));
    // this.countPrice();
    // this.basket$.next(this.basket);
  }

  getOrder():StoreItem[] {
    return this.basket;
  }

  deleteItem(item: StoreItem):StoreItem[] {
    console.log("basketBefore",this.basket);
    console.log(item, "itemDel");
    this.basket = this.basket.filter(itemBasket => itemBasket.id !== item.id);
    localStorage.setItem("basket", JSON.stringify(this.basket));
    return this.basket;    
  }

  countPrice(): number{
    console.log('reduce', this.basket.reduce((acc, item) => acc + item.price, 0));
    // debugger;
    return this.basket.reduce((acc, item) => acc + item.price, 0);
  }
}
