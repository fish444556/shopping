import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(f) {
    this.userService.userLogin(
      {"email": this.username, "password": this.password}
    ).subscribe(res => {
      if (res.json() == null) {
        console.log('Cannot find user');
      }
      else {
        console.log('Login successfully');
        localStorage.setItem('firstName',JSON.stringify(res.json().firstName));
        this.userService.showNavBar(true);
        // this._router.navigate(['Welcome']);
      }
    })
  }
}