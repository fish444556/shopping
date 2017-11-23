import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CartService {

  cart: any = {};
  constructor() { }

  private _addToCartSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  public addToCartEmitter: Observable<boolean> = this._addToCartSubject.asObservable();

  private _changeQuantitySubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  public changeQuantityEmitter: Observable<boolean> = this._changeQuantitySubject.asObservable();

  addToCart(ifAdd: boolean) {
    this._addToCartSubject.next(ifAdd);
  }

  changeQuantity (ifChange: boolean) {
    this._changeQuantitySubject.next(ifChange);
  }

  addProductToCart(phone: object) {
    console.log(phone)
    // this.cart = {
    //   ...this.cart,
    //   phone['name']: [phone, (this.cart[phone[1]] || 0) + 1]
    // };
    // debugger
    this.cart[phone['name']] = this.cart[phone['name']] ? [phone, this.cart[phone['name']][1] + 1] : [phone, 1];
    console.log(this.cart)
  }

  minusProductFromCart(phone: object) {
    this.cart[phone['name']] = [phone, this.cart[phone['name']][1] - 1];
  }

  getCart() {
    return this.cart;
  }

}
