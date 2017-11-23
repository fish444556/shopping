import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ConnectedBackComponent } from './connected-back/connected-back.component';
import { GetDataService } from './get-data.service';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import { PhonesService } from './phones.service';
import { CartService } from './cart.service';
import { RegisterComponent } from './register/register.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
import { SearchPipe } from './search.pipe';
import { CartComponent } from './cart/cart.component';
import { QuantityComponent } from './cart/quantity/quantity.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectedBackComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PhoneListComponent,
    PhoneDetailComponent,
    SearchPipe,
    CartComponent,
    QuantityComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'cb',
        component: ConnectedBackComponent
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'phone-list',
        component: PhoneListComponent
      },
      {
        path: 'phone-detail/:id',
        component: PhoneDetailComponent
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [
    GetDataService,
    UserService,
    PhonesService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
