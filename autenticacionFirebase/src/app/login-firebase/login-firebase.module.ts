import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginFirebaseRoutingModule } from './login-firebase-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginFirebaseRoutingModule,
    FormsModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginFirebaseModule { }
