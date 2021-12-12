import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  emailLoggeado: string;
  emailRegistrado: string;

  constructor(private loginService : LoginService) { }

  ngOnInit() {
  }

  signin(): void {
    this.loginService.signin(this.email, this.password).then(email=>{
      console.log(email)
      this.emailRegistrado = email;
    })
  }

  login(): void {
    this.loginService.login(this.email, this.password).then(email=>{
      console.log(email)
      this.emailLoggeado = email;
    })
  }

  exitLogin(): void {
    this.emailLoggeado = this.loginService.exitLogin();
  }
}
