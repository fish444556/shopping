import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any = null;
  constructor(private cartService: CartService) {
    this.cartService.addToCartEmitter.subscribe(mode => {
      if (mode !== null) {
        this.cart = this.cartService.cart;
        console.log(this.cart)
      }
    })

  }

  ngOnInit() {
  }

}
