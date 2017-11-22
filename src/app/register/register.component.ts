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
    this.userService.checklogin(
      {"email": this.email}
    ).subscribe(res => {
      debugger
      if (res.json() != null) {
        debugger;
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
          console.log('Register successfully');
          localStorage.setItem('firstName',JSON.stringify(res.json().firstName));
          this.userService.showNavBar(true);
        })
      }
    })
  }
}
