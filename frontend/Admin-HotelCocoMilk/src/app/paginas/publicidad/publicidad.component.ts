import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publicidad',
  templateUrl: './publicidad.component.html',
  styleUrls: ['./publicidad.component.css']
})

export class PublicidadComponent implements OnInit {
  error: boolean = false;
  
  constructor(private router:Router) {}

  ngOnInit(): void {
    this.buscarUsuario(); 
  }

  modificarImagen(){

  }

  eliminarImagen(){
   
  }

  buscarUsuario() {
    if(localStorage.getItem('id')==null && localStorage.getItem('usuario')==null){
      this.router.navigate(['']);
      this.error = true;
    }
  }

}
