import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenida-home',
  templateUrl: './bienvenida-home.component.html',
  styleUrls: ['./bienvenida-home.component.css']
})
export class BienvenidaHomeComponent implements OnInit {

  error: boolean = false;
  constructor ( private router:Router) {
  }
  
  ngOnInit(): void {
    this.buscarUsuario();
  }

  buscarUsuario() {
    if(localStorage.getItem('id')==null && localStorage.getItem('usuario')==null){
      this.router.navigate(['']);
      this.error = true;
    }
  }

}
