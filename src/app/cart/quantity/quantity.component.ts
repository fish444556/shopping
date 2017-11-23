import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.css']
})
export class QuantityComponent implements OnInit {
  quantity: number = 1;
  price: number = 0;
  @Input('phone') phone: object;
  constructor(private cartService: CartService) {

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
