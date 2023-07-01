import { Component, OnInit } from '@angular/core';
import { Pagina } from 'src/app/core/modelos/pagina.model';
import { PaginaService } from 'src/app/core/servicios/pagina.service';
import { NotificacionDialogComponent } from 'src/app/core/componentes/notificacion-dialog/notificacion-dialog.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modificar-como-llegar',
  templateUrl: './modificar-como-llegar.component.html',
  styleUrls: ['./modificar-como-llegar.component.css']
})
export class ModificarComoLlegarComponent implements OnInit{
  dataComoLlegar: any = [];
  respuesta: string;
  error: boolean = false;
  constructor (private paginaService: PaginaService, private router:Router) {
    this.respuesta = "";
  }
  ngOnInit(): void {
    this.buscarUsuario();
    this.mostrarPagina("Como llegar");
  }

  mostrarPagina(buscar: string) {
    this.paginaService.mostrarPagina({ tipoPagina: buscar }).subscribe((data: Pagina[]) => {
     this.dataComoLlegar=data[0];
    });
  }

  guardarModificacion() {
    console.log(this.dataComoLlegar);
    this.paginaService.modificarPagina(this.dataComoLlegar).subscribe((respuesta: string) => {
      this.respuesta = respuesta;
      NotificacionDialogComponent.prototype.notificar(this.respuesta);
    });
  }

  buscarUsuario() {
    if(localStorage.getItem('id')==null && localStorage.getItem('usuario')==null){
      this.router.navigate(['']);
      this.error = true;
    }
  }
}
