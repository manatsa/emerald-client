import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './menu/login/login.component';
import { LogoutComponent } from './menu/logout/logout.component';
import { ChangePasswordComponent } from './menu/change-password/change-password.component';
import { LockAccountComponent } from './menu/lock-account/lock-account.component';
import { AppRoutingModule } from './app-routing.module';
import { MyProfileComponent } from './my-profile/my-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    LogoutComponent,
    ChangePasswordComponent,
    LockAccountComponent,
    MyProfileComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule

  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
