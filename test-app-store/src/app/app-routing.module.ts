import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreListComponent } from './store-list/store-list.component';
import { BasketComponent } from './basket/basket.component';


const routes: Routes = [
  { path: '', component:  StoreListComponent},
  { path: 'cart', component: BasketComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
