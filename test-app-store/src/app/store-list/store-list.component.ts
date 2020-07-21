import { Component, OnInit } from '@angular/core';
import { StoreItem } from '../model/store-item.model';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss']
})
export class StoreListComponent implements OnInit {
  store: StoreItem[];

  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.store = this.storeService.getItems();
    console.log('store', this.store)
  }

}
