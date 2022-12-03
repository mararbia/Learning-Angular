import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    if (this.auth.login(this.email, this.password)) {
      this.router.navigate(['protected-page']);
      return;
    }
    alert('Login ou Senha inválidos');
    this.email = '';
    this.password = '';
  }
}
