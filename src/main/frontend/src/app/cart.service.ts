import { Injectable } from '@angular/core';
import { Item } from './item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Item[] = [];
  apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  //CREATE
  addToCart(item: Item, qty: number) {
    let currentCartItem = false;
    this.cartItems = this.cartItems.map(i => {
      if(i.id == item.id) {
        i.quantity += qty;
        currentCartItem = true;
      }
      return i;
    });
    if(!currentCartItem) {
      const newCartItem = new Item(item.name, item.description, item.price, item.imported, item.category, item.itemImageUrl, qty, item.quantity);
      newCartItem.id = item.id;
      this.cartItems.push(newCartItem);
    }
  }

  //READ
  getCartItems(): Item[] {
    return this.cartItems;
  }

  //DELETE
  removeItemFromCart(index: number) {
    this.cartItems.splice(index, 1);
  }

  emptyCart() {
    this.cartItems = [];
  }

  //sends new purchase order to server, prompting server to update inventory quantity in database
  purchase(items: Item[]): Observable<Item> {
    const url = `${this.apiUrl}/order`;
    return this.http.post<Item>(url, items);
  }
}
