import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pagina } from 'src/app/core/modelos/pagina.model';
import { PaginaService } from 'src/app/core/servicios/pagina.service';
import { Utils } from 'src/app/core/utilidades/util';

@Component({
  selector: 'app-modificar-home',
  templateUrl: './modificar-home.component.html',
  styleUrls: ['./modificar-home.component.css']
})
export class ModificarHomeComponent implements OnInit{
  respuesta: string;  
  error: boolean = false;
  
  constructor (private paginaService: PaginaService, private router:Router) {
    this.respuesta = "";
  }

  ngOnInit(): void {
    this.buscarUsuario();
    this.mostrarPagina("Home");
  }

  dataHome: any = []; 

  mostrarPagina(buscar: string) {
    this.paginaService.mostrarPagina({ tipoPagina: buscar }).subscribe((data: Pagina[]) => {
     /* this.dataHome = data[0];*/
     this.dataHome.id_pagina=data[0].id_pagina;
      this.dataHome.id_tipo_pagina =data[0].id_tipo_pagina;
      this.dataHome.descripcion=data[0].descripcion;
      this.dataHome.imagen = data[0].imagen;
      let image = document.getElementById("preview") as HTMLImageElement;
      image.src = 'data:image/jpg;base64,' + this.dataHome.imagen;
    });
}

  obtenerImagen(event: any) {   
    const file = event.target.files[0];
    var promiseResult = Utils.imageToByte(file);
    promiseResult.then((value: any) => {
      this.dataHome.imagen = value;
      let image = document.getElementById("preview") as HTMLImageElement;
      image.src = 'data:image/jpg;base64,' + value;
    });
  }

  guardarModificacion() {
    console.log(this.dataHome);
    this.paginaService.modificarPagina(this.dataHome).subscribe((respuesta: string) => {
      this.respuesta = respuesta;
      console.log(this.dataHome.imagen);
    });
  }

  buscarUsuario() {
    if(localStorage.getItem('id')==null && localStorage.getItem('usuario')==null){
      this.router.navigate(['']);
      this.error = true;
    }
  }
}
