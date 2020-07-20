import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';
import { StoreItem } from '../store-item.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  basket: StoreItem[];
  constructor(private basketService: BasketService) { }

  ngOnInit() {
    this.basket = this.basketService.getOrder();
    console.log('basket' , this.basket)
  }

}
