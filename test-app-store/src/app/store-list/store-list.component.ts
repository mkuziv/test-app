import { Component, OnInit } from '@angular/core';
import { StoreItem } from '../store-item.model';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss']
})
export class StoreListComponent implements OnInit {
  store: StoreItem[];

  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.store = this.storeService.getStore();
    console.log('store', this.store)
  }

}
