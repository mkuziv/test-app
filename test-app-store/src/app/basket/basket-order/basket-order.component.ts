import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StoreItem } from 'src/app/model/store-item.model';

@Component({
  selector: 'app-basket-order',
  templateUrl: './basket-order.component.html',
  styleUrls: ['./basket-order.component.scss']
})
export class BasketOrderComponent implements OnInit {
  @Input() item: StoreItem;
  @Output() delItem = new EventEmitter<StoreItem>();

  constructor() { }
  ngOnInit() {
  }

  deleteItem(item: StoreItem) {
    console.log('delItem', item);
    this.delItem.emit(item);
  }
}
