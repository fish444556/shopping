import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  error_info: string = '';
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(f) {
    this.userService.userLogin(
      {"email": this.email, "password": this.password}
    ).subscribe(res => {
      debugger
      if (res.json() == null) {
        // console.log('Cannot find user');
        this.error_info = 'Incorrect username or password';
      }
      else {
        console.log('Login successfully');
        localStorage.setItem('firstName',JSON.stringify(res.json().firstName));
        this.userService.showNavBar(true);
      }
    })
  }
}
