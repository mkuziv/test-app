import { Injectable } from '@angular/core';
import { StoreItem } from '../model/store-item.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  itemList: StoreItem[] = [
    {
      "id":1,
      "name":"article 1",
      "label":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "price":25
    },
    {
      "id":2,
      "name":"article 2",
      "label":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "price":35
    },
    {
      "id":3,
      "name":"article 3",
      "label":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "price":45
    }
  ]

  getItems():StoreItem[] {
    return this.itemList;
  }
}
