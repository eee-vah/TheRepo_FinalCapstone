import { Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCardComponent } from './item-card.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ItemListComponent } from '../item-list.component';
import { SearchPipe } from 'src/app/search.pipe';
import { Item } from 'src/app/item';

describe('ItemCardComponent', () => {
  let component: ItemCardComponent;
  let fixture: ComponentFixture<ItemCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCardComponent, ItemListComponent, SearchPipe ],
      imports: [ FormsModule, HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCardComponent);
    component = fixture.componentInstance;

    let expectedItem = new Item("New Book", "Much Wow", 12.49, false, "Books", "www.books.com", 1);
    component.item = expectedItem;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
