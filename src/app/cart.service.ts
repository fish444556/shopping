import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CartService {

  cart: any = {};
  constructor() { }

  private addToCartSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  public addToCartEmitter: Observable<boolean> = this.addToCartSubject.asObservable();

  addToCart(ifAdd: boolean) {
    this.addToCartSubject.next(ifAdd);
  }

  addProductToCart(phone: object) {
    console.log(phone)
    // this.cart = {
    //   ...this.cart,
    //   phone['name']: [phone, (this.cart[phone[1]] || 0) + 1]
    // };
    // debugger
    this.cart[phone['name']] = this.cart[phone['name']] ? [phone, this.cart[phone['name']][1] + 1] : [phone, 1]
    console.log(this.cart)
  }

  getCart() {
    return this.cart;
  }

}
