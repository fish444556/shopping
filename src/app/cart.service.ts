import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CartService {

  cart: any = [];
  constructor() { }

  private addToCartSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  public addToCartEmitter: Observable<boolean> = this.addToCartSubject.asObservable();

  addToCart(ifAdd: boolean) {
    this.addToCartSubject.next(ifAdd);
  }

  addProductToCart(phone: object) {
    this.cart.push(phone);
  }

  getCart() {
    return this.cart;
  }

}
