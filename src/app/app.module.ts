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

@NgModule({
  declarations: [
    AppComponent,
    ConnectedBackComponent,
    NavComponent,
    HomeComponent,
    LoginComponent
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
      }
    ])
  ],
  providers: [GetDataService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
