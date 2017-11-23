import { Component, OnInit } from '@angular/core';
import 'rxjs/add/observable/forkJoin';
import {Observable} from 'rxjs/Observable';

import { CartService } from '../cart.service';
import { PhonesService } from '../phones.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any = null;
  totalMoney: number = 0;
  constructor(
    private cartService: CartService,
    private phonesService: PhonesService
  ) {
    this.cartService.addToCartEmitter.subscribe(mode => {
      if (mode !== null) {
        this.totalMoney = 0;
        console.log(typeof(this.cartService.getCart()))
        let tmpObj = this.cartService.getCart();
        this.cart = Object.keys(tmpObj).reduce((a, b) => {
          a = [...a, tmpObj[b]]
          console.log(tmpObj[b])
          this.totalMoney += tmpObj[b][0]['price'] * tmpObj[b][1];
          return a;
        }, []);
        console.log(this.cart)
      }
    });

    this.cartService.changeQuantityEmitter.subscribe(mode => {
      if (mode != null) {
        this.totalMoney = 0;
        let tmpObj = this.cartService.getCart();
        this.cart = Object.keys(tmpObj).reduce((a, b) => {
          debugger
          a = [...a, tmpObj[b]]
          console.log(tmpObj[b][0]['price'])
          this.totalMoney += tmpObj[b][0]['price'] * tmpObj[b][1];
          return a;
        }, []);
        console.log(this.cart)
      }
    })
  }

  ngOnInit() {
  }

  checkOut() {
    debugger
    let tmpAsynArr = Object.keys(this.cart).reduce((a, idx) => {
      debugger
      a = [...a, this.phonesService.updatePhones(this.cart[idx][0], this.cart[idx][1])]
      return a;
    }, []);
    Observable.forkJoin(tmpAsynArr).subscribe(res => {
      this.cart = null;
    });
  }


  // getQuantity($event) {

  // }

}
