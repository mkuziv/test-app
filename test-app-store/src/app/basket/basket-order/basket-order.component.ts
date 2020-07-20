import { Component, OnInit, Input } from '@angular/core';
import { StoreItem } from 'src/app/store-item.model';

@Component({
  selector: 'app-basket-order',
  templateUrl: './basket-order.component.html',
  styleUrls: ['./basket-order.component.scss']
})
export class BasketOrderComponent implements OnInit {
  @Input() order:StoreItem;
  constructor() { }

  ngOnInit() {
  }

}
