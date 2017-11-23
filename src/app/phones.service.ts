import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PhonesService {
  phoneUrl = 'http://localhost:8088/phone';
  constructor(private http: Http) {  }
  getPhones() {
    return this.http.get(this.phoneUrl);
  }

  updatePhones(phone, purchasedQuantity) {
    return this.http.put(this.phoneUrl + '/update', {
      name: phone['name'],
      quantity: phone['quantity'] - purchasedQuantity
    });
  }
}
