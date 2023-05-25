import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login/login.component';

@Component({
  selector: 'app-bienvenida-home',
  templateUrl: './bienvenida-home.component.html',
  styleUrls: ['./bienvenida-home.component.css']
})
export class BienvenidaHomeComponent implements OnInit {
  constructor(private verificarLogin: LoginComponent) {}

  ngOnInit(): void {
    this.buscarUsuario(); 
  }

  buscarUsuario() {
    this.verificarLogin.buscarUsuario(localStorage.getItem('id') || '', localStorage.getItem('usuario') || '');
  }
}
