import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  usuario:Usuario={
    username:'',
    password:''
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onRegister() {
    console.log(this.usuario);
          this.router.navigate(["/login"])
  }
}