import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CartComponent } from './cart.component';
import { Item } from '../item';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CartComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate sales tax', () => {
    const cart = new CartComponent(null, null);
    const itemNotTaxed = new Item("New Book", "Much Wow", 12.49, false, "Books", "www.books.com", 1);
    const itemTaxed = new Item("New CD", "Much Bass", 14.99, false, "Music", "www.music.com", 1);
    expect(cart.calculateSalesTax(itemNotTaxed)).toEqual(0.00);
    expect(cart.calculateSalesTax(itemTaxed)).toEqual(1.50);
  });

  it('should calculate import tax', () => {
    const cart = new CartComponent(null, null);
    const itemNotTaxed = new Item("New Book", "Much Wow", 12.49, false, "Books", "www.books.com", 1);
    const itemTaxed = new Item("New Choco Box", "Much Noms", 10.00, true, "Food", "www.food.com", 1);
    expect(cart.calculateImportTax(itemNotTaxed)).toEqual(0.00);
    expect(cart.calculateImportTax(itemTaxed)).toEqual(0.50);
  });

  it('should calculate total item price', () => {
    const cart = new CartComponent(null, null);
    const itemTaxed = new Item("New CD", "Much Bass", 14.99, true, "Music", "www.music.com", 1);
    expect(cart.calculateSalesTax(itemTaxed)).toEqual(1.50);
    expect(cart.calculateImportTax(itemTaxed)).toEqual(0.75);
    expect(Math.round(cart.calculateTotalItemPrice(itemTaxed)*100)/100).toEqual(17.24);
  });

  it('should calculate subtotal', () => {
    const cart = new CartComponent(null, null);
    cart.cartItems = [
      new Item("New Book", "Much Wow", 12.49, false, "Books", "www.books.com", 1),
      new Item("New CD", "Much Bass", 14.99, false, "Music", "www.music.com", 1),
      new Item("New Choco Bar", "Much Noms", 0.85, true, "Food", "www.food.com", 1)
    ];
    expect(Math.round(cart.calculateSubtotal()*100)/100).toEqual(28.33);
  });

  it('should calculate total sales tax', () => {
    const cart = new CartComponent(null, null);
    cart.cartItems = [
      new Item("New Book", "Much Wow", 12.49, false, "Books", "www.books.com", 1),
      new Item("New CD", "Much Bass", 14.99, true, "Music", "www.music.com", 1),
      new Item("New Perfume", "Much Aroma", 27.99, true, "Luxury Items", "www.luxury.com", 1)
    ];
    cart.cartItems[0].itemSalesTax = 0.00;
    cart.cartItems[1].itemSalesTax = 1.50;
    cart.cartItems[2].itemSalesTax = 2.80;
    expect(cart.calculateTotalSalesTax()).toEqual(4.30);
  });

  it('should calculate total import tax', () => {
    const cart = new CartComponent(null, null);
    cart.cartItems = [
      new Item("New Book", "Much Wow", 12.49, false, "Books", "www.books.com", 1),
      new Item("New CD", "Much Bass", 14.99, true, "Music", "www.music.com", 1),
      new Item("New Perfume", "Much Aroma", 27.99, true, "Luxury Items", "www.luxury.com", 1)
    ];
    cart.cartItems[0].itemImportTax = 0.00;
    cart.cartItems[1].itemImportTax = 0.75;
    cart.cartItems[2].itemImportTax = 1.40;
    expect(cart.calculateTotalImportTax()).toEqual(2.15);
  });

  it('should calculate total', () => {
    const cart = new CartComponent(null, null);
    cart.cartItems = [
      new Item("New Book", "Much Wow", 12.49, false, "Books", "www.books.com", 1),
      new Item("New CD", "Much Bass", 14.99, true, "Music", "www.music.com", 1),
      new Item("New Perfume", "Much Aroma", 27.99, true, "Luxury Items", "www.luxury.com", 1)
    ];
    cart.cartItems[0].itemSalesTax = 0.00;
    cart.cartItems[1].itemSalesTax = 1.50;
    cart.cartItems[2].itemSalesTax = 2.80;
    cart.cartItems[0].itemImportTax = 0.00;
    cart.cartItems[1].itemImportTax = 0.75;
    cart.cartItems[2].itemImportTax = 1.40;
    expect(cart.calculateTotalSalesTax()).toEqual(4.30);
    expect(cart.calculateTotalImportTax()).toEqual(2.15);
    expect(cart.calculateTotal()).toEqual(61.92);
  });

});
