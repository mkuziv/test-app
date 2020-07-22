import { Injectable } from '@angular/core';
import { StoreItem } from '../model/store-item.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private basket: StoreItem[] = [];
  private basketLength$ = new BehaviorSubject(0);

  public get basketItemsLength$() {
    return this.basketLength$.asObservable();
  }

  constructor() { }

  public putInBasket(item: StoreItem) {
    this.basket.push(item);
    localStorage.setItem("basket", JSON.stringify(this.basket));
    this.basketLength$.next(this.basket.length);
  }

  public getOrder(): StoreItem[] {
    return this.basket;
  }

  public deleteItem(item: StoreItem): StoreItem[] {
    console.log("basketBefore",this.basket);
    this.basket = this.basket.filter(itemBasket => itemBasket.id !== item.id);
    localStorage.setItem("basket", JSON.stringify(this.basket));
    this.basketLength$.next(this.basket.length);
    
    return this.basket;    
  }

  public countTotalPrice(): number {
    console.log('here')
    console.log(this.basket)
    return this.basket.reduce((acc, item) =>  acc + item.price, 0);    
  };

  public setBasketItems(basketItems: StoreItem[]) {
    this.basket = basketItems;
    this.basketLength$.next(basketItems.length);
  }
}
