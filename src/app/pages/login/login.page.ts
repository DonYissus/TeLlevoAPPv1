import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario = {
    username: '',
    password: ''
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    console.log('Login');
    this.router.navigate(["/home"]);
  }


}
