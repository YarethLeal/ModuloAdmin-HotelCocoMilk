import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  userName =  localStorage.getItem('usuario');
  constructor(private router:Router){

  }
  cerrarSesion(){
    localStorage.clear();
    console.log("Cierra sesion");
    this.router.navigate([""]);
  }
}
