import { Component, OnInit, OnDestroy } from '@angular/core';
import { Item } from '../item';
import { Subscription } from 'rxjs';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit, OnDestroy {
  allItems: Item[] = [];
  searchTerm = "";
  getSub: Subscription

  constructor(private itemService: ItemsService) { }

  ngOnInit() {
    this.getItems();
  }

  ngOnDestroy() {
    if(this.getSub) {
      this.getSub.unsubscribe();
    }
  }

  getItems() {
    this.getSub = this.itemService.getItems().subscribe(
      (res: any) => {
        this.allItems = res;
      },
      err => {
        console.log(err);
      }
    )
  }
}
