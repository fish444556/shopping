import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.css']
})
export class QuantityComponent implements OnInit {
  quantity: number = 0;
  price: number = 0;
  @Input('phone') phone: object;
  constructor(private cartService: CartService) {
    this.cartService.addToCartEmitter.subscribe(mode => {
      if (mode !== null) {
        debugger
        this.quantity
        console.log(this.phone)
        // this.phone['quantity']
        // if (this.quantity < this.phone['quantity']) {
        //   this.quantity++;
        // }
      }
    });
  }

  ngOnInit() {
  }

  @Input('quantityInput') quantityInput: number;
  handleMinusClick() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }

  handlePlusClick() {
    if (this.quantity < this.phone['quantity']) {
      this.quantity++;
    }
  }
}
