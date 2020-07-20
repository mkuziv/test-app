import { Component, OnInit, Input } from '@angular/core';
import { StoreItem } from 'src/app/store-item.model';

import { BasketService } from 'src/app/basket.service';

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
  addItem(item) {
    console.log("add item",item);

    this.basketService.putInBasket(item);
  }
}
