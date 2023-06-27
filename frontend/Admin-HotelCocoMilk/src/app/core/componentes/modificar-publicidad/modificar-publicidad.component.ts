import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Publicidad } from '../../modelos/publicidad.model';
import { PublicidadService } from '../../servicios/publicidad.service';
import { Utils } from '../../utilidades/util';
import { NotificacionDialogComponent } from '../notificacion-dialog/notificacion-dialog.component';
import { Router } from '@angular/router';
import { PublicidadComponent } from 'src/app/paginas/publicidad/publicidad.component';

declare let $: any;

@Component({
  selector: 'app-modificar-publicidad',
  templateUrl: './modificar-publicidad.component.html',
  styleUrls: ['./modificar-publicidad.component.css']
})

export class ModificarPublicidadComponent {
  @Input() publicidad: Publicidad = new Publicidad('', '', false);
  @Output() private eventoHijo = new EventEmitter<string>();
  respuesta: string;
  imagenModificada: string;
  message: string;

  constructor(private publicidadService: PublicidadService, private router:Router) {
    this.respuesta = "";
    this.imagenModificada = "";
    this.message = "";
  }

   modificarPublicidad(publicidad: Publicidad) {
    this.publicidad = publicidad;
    let image = document.getElementById("modifyPreview") as HTMLImageElement;
    image.src = this.publicidad.imagen;
    console.log(image.src);
    $('#modal-modificar-publicidad').modal('show');
  }

  guardarModificacion() {
    let image = document.getElementById("modifyPreview") as HTMLImageElement;
    this.publicidad.imagen = this.imagenModificada;

    this.publicidadService.modificarPublicidad(this.publicidad).subscribe((respuesta: string) => {
      this.respuesta = respuesta;
      console.log(respuesta);
      this.publicidad.imagen = image.src;
      this.eventoHijo.emit("refrescar");
    });
  }

  obtenerImagen() {   
    var promiseResult = Utils.imageToByte($("input[type=file]")[0].files[0]);
    promiseResult.then((value: any) => {
      this.imagenModificada = value;
      let image = document.getElementById("modifyPreview") as HTMLImageElement;
      image.src = 'data:image/jpg;base64,' + value;
    });
  }

  eliminar(){
    this.publicidadService.eliminarPublicidad(this.publicidad).subscribe((respuesta: string) => {
      this.respuesta = respuesta;
      this.eventoHijo.emit("refrescar");
     });
  }
  
  cerrar(){
    this.respuesta="";
    $('#modal-modificar-publicidad').modal('hide');
  }
}
