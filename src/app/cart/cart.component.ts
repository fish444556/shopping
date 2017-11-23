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
        console.log(typeof(this.cartService.getCart()))
        let tmpObj = this.cartService.getCart();
        this.cart = Object.keys(tmpObj).reduce((a, b) => {
          a = [...a, tmpObj[b]]
          return a;
        }, []);
        console.log(this.cart)
      }
    })

  }

  ngOnInit() {
  }

}
