import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhonesService } from '../phones.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.css']
})
export class PhoneDetailComponent implements OnInit {
  id: number;
  private sub: any;
  phone: object = null;
  largeDisplayImg: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private phonesService: PhonesService,
    private cartService: CartService
    ) {

  }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.phonesService.getPhones()
      .subscribe(res => {
        // get specific phone according to id from DB
        let tmpObj = res.json();
        Object.keys(tmpObj).forEach( key => {
          if (tmpObj[key].id === this.id) {
            this.phone = tmpObj[key];
            this.largeDisplayImg = this.phone['images'][0];
            return;
          }
        });

      });
    });
  }

  switchedDisplayImg(idx) {
    this.largeDisplayImg = this.phone['images'][idx];
  }

  addToCart(phone) {
    // debugger
    this.cartService.addProductToCart(phone);
    this.cartService.addToCart(true);
    // console.log(this.cartService.getCart());

  }
}
