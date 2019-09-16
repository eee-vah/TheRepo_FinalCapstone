import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/item';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  @Input() item: Item;
  buttonText = "Add to Cart";
  quantityToPurchase = 1;

  constructor(private cartService: CartService) { }

  ngOnInit() { }

  onAddToCart(item: Item) {
    if(this.quantityToPurchase > 0 && this.quantityToPurchase <= item.quantity) {
      this.cartService.addToCart(item, this.quantityToPurchase);
      this.buttonText = "Added!";

      setTimeout(() => {
        this.buttonText = "Add to Cart";
      }, 1500);
    }
  }
}
