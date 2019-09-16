import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: Item[] = [];
  salesTax = 0.00;
  importTax = 0.00;
  totalItemPrice = 0;
  subtotal = 0;
  totalSalesTax = 0;
  totalImportTax = 0;
  orderTotal = 0;
  infoText = "Your cart is currently empty.";
  apiUrl = "";
  displayReceipt = false;
  displayCartItems = true;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.getCartItems();
    this.calculateSubtotal();
    this.calculateTotal();
  }
  //Purchasing an order, which toggles the cart display off and the receipt display on
  //Also empties the cart and navigating the user back to the item page after a set amount of time
  onPurchase() {
    this.displayReceipt = false;
    this.cartService.purchase(this.cartItems).subscribe(
      (res: any) => {
        this.displayCartItems = false;
        this.displayReceipt = true;

        setTimeout(() => {
          this.router.navigate(["/item"]);
          this.cartService.emptyCart();
          this.cartItems = [];
        }, 10000);
      }
    );
  }
  
  //READ
  getCartItems() {
    this.cartItems = this.cartService.getCartItems();
  }

  //UPDATE
  //increasing the number of a certain item in the cart by 1
  onIncreaseItemQuantity(item: Item) {
    if(item.quantity < item.inStock) {
      item.quantity++;
      this.calculateSubtotal();
      this.calculateTotal();
    }
  }
  //decreasing the number of a certain item in the cart by 1
  onDecreaseItemQuantity(item: Item) {
    if(item.quantity > 0) {
      item.quantity--;
      this.calculateSubtotal();
      this.calculateTotal();
    }
  }

  //DELETE
  //deleting an item completely from the cart, regardless of quantity
  onRemoveItemFromCart(index: number) {
    this.cartService.removeItemFromCart(index);
    this.getCartItems();
    this.calculateSubtotal();
    this.calculateTotal();
  }

  //Calculations
  calculateSalesTax(item: Item) {
    this.salesTax = 0.00;
    if(item.category != "Books" && item.category !=  "Food" && item.category != "Medical") {
      this.salesTax = 0.10;
    }
    item.itemSalesTax = (item.price * item.quantity) * this.salesTax;
    item.itemSalesTax = Math.ceil(item.itemSalesTax*20)/20;
    return item.itemSalesTax;
  }

  calculateImportTax(item: Item) {
    this.importTax = 0.00;
    if(item.imported === true) {
      this.importTax = 0.05;
    }
    item.itemImportTax = (item.price * item.quantity) * this.importTax;
    item.itemImportTax = Math.ceil(item.itemImportTax*20)/20;
    return item.itemImportTax;
  }

  calculateTotalItemPrice(item: Item) {
    this.totalItemPrice = (item.price * item.quantity) + item.itemSalesTax + item.itemImportTax;
    return this.totalItemPrice;
  }

  calculateSubtotal() {
    this.subtotal = this.cartItems.reduce((subtotal, currentValue) => subtotal + (currentValue.price * currentValue.quantity), 0)
    return this.subtotal;
  }

  calculateTotalSalesTax() {
    this.totalSalesTax = 0.00;
    this.totalSalesTax = this.cartItems.reduce((totalSalesTax, currentValue) => totalSalesTax + currentValue.itemSalesTax, 0)
    return this.totalSalesTax;
  }

  calculateTotalImportTax() {
    this.totalImportTax = 0.00;
    this.totalImportTax = this.cartItems.reduce((totalImportTax, currentValue) => totalImportTax + currentValue.itemImportTax, 0)
    return this.totalImportTax;
  }

  calculateTotal() {
    this.orderTotal = 0.00;
    this.orderTotal = this.cartItems.reduce((orderTotal, currentValue) => orderTotal + ((currentValue.price * currentValue.quantity) + currentValue.itemSalesTax + currentValue.itemImportTax), 0)
    return this.orderTotal;
  }


}
