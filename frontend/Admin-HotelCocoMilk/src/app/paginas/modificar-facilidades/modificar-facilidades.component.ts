import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { ModificarPaginaComponent } from 'src/app/core/componentes/modificar-pagina/modificar-pagina.component';
import { NotificacionDialogComponent } from 'src/app/core/componentes/notificacion-dialog/notificacion-dialog.component';
import { Pagina } from 'src/app/core/modelos/pagina.model';
import { PaginaService } from 'src/app/core/servicios/pagina.service';
import { Utils } from 'src/app/core/utilidades/util';

@Component({
  selector: 'app-modificar-facilidades',
  templateUrl: './modificar-facilidades.component.html',
  styleUrls: ['./modificar-facilidades.component.css']
})
export class ModificarFacilidadesComponent implements OnInit{

 dataPaginas: Pagina[] =[];
 facilidadModificar: Pagina = new Pagina(0);
 respuesta:string;
 error: boolean = false;

  constructor(private paginaService: PaginaService, private router:Router) {
    this.respuesta = "";
  }

  dataFacilidad: Pagina = new Pagina(0); 

  ngOnInit(): void {
    this.buscarUsuario();
    this.dataFacilidad.descripcion = "Escriba aquí la descripción de la nueva facilidad";
    this.mostrarPagina("Facilidades");
  }

  mostrarPagina(buscar: string) {
    this.paginaService.mostrarPagina({ tipoPagina: buscar }).subscribe((data: Pagina[]) => {
      this.dataPaginas = data;
      this.dataPaginas.forEach((element: any)=>{
        element.imagen = 'data:image/jpg;base64,' + element.imagen;
      });

      console.log(this.dataPaginas);
    });
  }

  registrarFacilidad() {
    this.dataFacilidad.id_tipo_pagina = this.dataPaginas[0].id_tipo_pagina;
    return this.paginaService.crearPagina(this.dataFacilidad).subscribe((data: any) => {
      this.respuesta = data;
      console.log(data);
      console.log(this.dataFacilidad);
      this.mostrarPagina("Facilidades");
    });
  }

  actualizarFacilidad(facilidad: Pagina) {
    this.facilidadModificar = facilidad;
    ModificarPaginaComponent.prototype.modificarFacilidad(this.facilidadModificar);
    console.log(this.facilidadModificar);
  }

  eliminarFacilidad(facilidad: Pagina) {
    console.log(facilidad);
    return this.paginaService.eliminarPagina(facilidad).subscribe((respuesta:string)=>{
     console.log(respuesta)
      this.respuesta=respuesta;
      NotificacionDialogComponent.prototype.notificar(this.respuesta);
      this.mostrarPagina("Facilidades");
    })
  }

  obtenerImagen(event: any) {   
    const file = event.target.files[0];
    var promiseResult = Utils.imageToByte(file);
    promiseResult.then((value: any) => {
      this.dataFacilidad.imagen = value;
      let image = document.getElementById("preview") as HTMLImageElement;
      image.src = 'data:image/jpg;base64,' + value;
    });
  }

  buscarUsuario() {
    if(localStorage.getItem('id')==null && localStorage.getItem('usuario')==null){
      this.router.navigate(['']);
      this.error = true;
    }
  }
}