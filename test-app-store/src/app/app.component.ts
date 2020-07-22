import { Component, OnInit } from '@angular/core';
import { BasketService } from './services/basket.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public basketItemsLength: Observable<number> = this.basketService.basketItemsLength$;
  
  constructor(private basketService: BasketService){}

  ngOnInit() {
    console.log(this.basketItemsLength);
    console.log("here");    
  }
}
