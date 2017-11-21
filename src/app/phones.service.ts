import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PhonesService {
  phoneUrl = 'http://localhost:8088/phone';
  constructor(private http: Http) {  }
  getPhones() {
    return this.http.get(this.phoneUrl);
  }
}
