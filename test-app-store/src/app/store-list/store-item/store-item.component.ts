import { Component, OnInit, Input } from '@angular/core';
import { StoreItem } from 'src/app/model/store-item.model';

import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.scss']
})
export class StoreItemComponent implements OnInit {
  @Input() item: StoreItem;

  constructor(private basketService: BasketService) { }

  ngOnInit() {
  }
  addItem(item: StoreItem) {
    console.log("add item",item);

    this.basketService.putInBasket(item);
    
  }
}
