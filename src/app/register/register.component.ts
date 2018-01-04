import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string = '';
  firstName: string = '';
  lastName: string = '';
  password: string = '';
  password2: string = '';
  error_info: string = '';
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(f) {
    if (this.password !== this.password2) {
      alert('dfsdfdsfds');
      return ;
    }
    this.userService.checklogin(
      {"email": this.email}
    ).subscribe(res => {
      if (res.json() != null) {
        this.error_info = 'Email existed';
      }
      else {
        this.userService.userRegister(
          {
            "email": this.email,
            "firstName": this.firstName,
            "lastName": this.lastName,
            "password": this.password
          }
        ).subscribe(res => {
          console.log('Register successfully');
          localStorage.setItem('firstName',JSON.stringify(res.json().firstName));
          this.userService.showNavBar(true);
        })
      }
    })
  }
}
