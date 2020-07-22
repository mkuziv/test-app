import { Component, OnInit } from '@angular/core';
import { BasketService } from '../services/basket.service';
import { StoreItem } from '../model/store-item.model';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  public totalPrice: number = 0;
  public basketItems: StoreItem[];

  constructor(private basketService: BasketService) { }

  ngOnInit() {
    this.basketItems = JSON.parse(localStorage.getItem("basket"))
    if (Boolean(this.basketItems.length)){
      this.basketService.setBasketItems(this.basketItems);
    } else {
      this.basketItems = this.basketService.getOrder();
    }
    
    this.totalPrice = this.basketService.countTotalPrice();
  }
  

  deleteItem(item: StoreItem): void {   
    this.basketItems = this.basketService.deleteItem(item);
    this.totalPrice = this.basketService.countTotalPrice();
  }

}
