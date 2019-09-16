import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ItemListComponent } from './item-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from 'src/app/search.pipe';
import { ItemCardComponent } from './item-card/item-card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Item } from '../item';

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemListComponent, SearchPipe, ItemCardComponent ],
      imports: [ FormsModule, ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.allItems = [new Item("New Book", "Much Wow", 12.49, false, "Books", "www.books.com", 1)];
    expect(component).toBeTruthy();
  });
});
