import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserService {
  registerUrl = 'http://localhost:8088/user/register';
  loginUrl = 'http://localhost:8088/user/login';
  userStatus: number = 0;

  constructor(private http: Http) { }

  private _showNavBar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  public showNavBarEmitter: Observable<boolean> = this._showNavBar.asObservable();

  userRegister(registerData){
    return this.http.post(this.registerUrl, registerData);
  }

  userLogin(loginData) {
    return this.http.post(this.loginUrl, loginData);
  }

  showNavBar(ifShow: boolean) {
    this._showNavBar.next(ifShow);
  }

}
