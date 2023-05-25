import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../../login/login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  constructor(private verificarLogin: LoginComponent) {}

  ngOnInit(): void {
    this.buscarUsuario(); 
  }

  buscarUsuario() {
    this.verificarLogin.buscarUsuario(localStorage.getItem('id') || '', localStorage.getItem('usuario') || '');
  }
}
