import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserService {
  url = 'http://localhost:8088/user';
  userStatus: number = 0;

  constructor(private http: Http) { }

  private _showNavBar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  public showNavBarEmitter: Observable<boolean> = this._showNavBar.asObservable();

  userRegister(registerData){
    return this.http.post(this.url + '/register', registerData);
  }

  userLogin(loginData) {
    return this.http.post(this.url + '/login', loginData);
  }

  checklogin(checkloginData) {
    return this.http.post(this.url + '/checklogin', checkloginData);
  }

  showNavBar(ifShow: boolean) {
    this._showNavBar.next(ifShow);
  }

}
