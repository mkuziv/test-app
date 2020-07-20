import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreListComponent } from './store-list/store-list.component';
import { StoreItemComponent } from './store-list/store-item/store-item.component';
import { BasketComponent } from './basket/basket.component';
import { BasketOrderComponent } from './basket/basket-order/basket-order.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreListComponent,
    StoreItemComponent,
    BasketComponent,
    BasketOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
