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
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(f) {
    this.userService.userLogin(
      {"email": this.email}
    ).subscribe(res => {
      if (res.json() != null) {
        console.log('Email exists');
        ;
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
          debugger
          if (res.json() == null) {
            console.log('Cannot find user');
          }
          else {
            console.log('Login successfully');
            localStorage.setItem('firstName',JSON.stringify(res.json().firstName));
            this.userService.showNavBar(true);
          }
        })
      }
    })
  }
}
