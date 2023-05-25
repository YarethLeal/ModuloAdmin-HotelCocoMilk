import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login/login.component';

@Component({
  selector: 'app-publicidad',
  templateUrl: './publicidad.component.html',
  styleUrls: ['./publicidad.component.css']
})

export class PublicidadComponent implements OnInit {
  constructor(private verificarLogin: LoginComponent) {}

  ngOnInit(): void {
    this.buscarUsuario(); 
  }

  buscarUsuario() {
    this.verificarLogin.buscarUsuario(localStorage.getItem('id') || '', localStorage.getItem('usuario') || '');
  }
}
