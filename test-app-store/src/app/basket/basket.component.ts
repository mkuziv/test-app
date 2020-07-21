import { Component, OnInit } from '@angular/core';
import { BasketService } from '../services/basket.service';
import { StoreItem } from '../model/store-item.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  itemPrice: number;
  basket: StoreItem[] = [];
  localStor;
  constructor(private basketService: BasketService) { }

  ngOnInit() {
    this.localStor = localStorage.getItem("basket");
    if(this.localStor){
      this.basket = JSON.parse(this.localStor);
    } else {
      this.basket = this.basketService.getOrder();
    }
    
    console.log('basket' , this.basket);
    this.itemPrice = this.basketService.countPrice();
  }
  

  deleteItem(item: StoreItem) {
    console.log('delItem', item);    
    this.basket = this.basketService.deleteItem(item);
  }

}
