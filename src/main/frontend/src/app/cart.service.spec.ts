import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CartService } from './cart.service';
import { Item } from './item';

describe('CartService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ]
  }));

  it('should be created', () => {
    const service: CartService = TestBed.get(CartService);
    expect(service).toBeTruthy();
  });

  it('should remove an item from the cart', () => {
    const service: CartService = TestBed.get(CartService);
    const item1 = new Item("New Book", "Much Wow", 12.49, false, "Books", "www.books.com", 1);
    item1.id = 1;
    const item2 = new Item("New CD", "Much Bass", 14.99, false, "Music", "www.music.com", 1);
    item2.id = 2;
    const item3 = new Item("New Choco Bar", "Much Noms", 0.85, false, "Food", "www.food.com", 1);
    item3.id = 3;

    service.addToCart(item1, 1);
    service.addToCart(item2, 2);
    service.addToCart(item3, 3);

    service.removeItemFromCart(1);
    const actualValues = service.getCartItems();
    expect(actualValues.length).toEqual(2);
    expect(actualValues[0].name).toEqual("New Book");
    expect(actualValues[0].description).toEqual("Much Wow");
    expect(actualValues[1].name).toEqual("New Choco Bar");
    expect(actualValues[1].description).toEqual("Much Noms");
  });



  it('should empty the cart', () => {
    const service: CartService = TestBed.get(CartService);
    service.addToCart(new Item("New Book", "Much Wow", 12.49, false, "Books", "www.books.com", 1), 1);
    service.addToCart(new Item("New CD", "Much Bass", 14.99, false, "Music", "www.music.com", 1), 1);
    service.addToCart(new Item("New Choco Bar", "Much Noms", 0.85, false, "Food", "www.food.com", 1), 1);

    service.emptyCart();
    const actualValues = service.getCartItems();
    expect(actualValues.length).toEqual(0);
  });

});
