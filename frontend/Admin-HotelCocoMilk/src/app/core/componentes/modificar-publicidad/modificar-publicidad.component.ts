import { Component, Input } from '@angular/core';
import { Publicidad } from '../../modelos/publicidad.model';
import { PublicidadService } from '../../servicios/publicidad.service';
import { Utils } from '../../utilidades/util';
import { NotificacionDialogComponent } from '../notificacion-dialog/notificacion-dialog.component';
import { Router } from '@angular/router';

declare let $: any;

@Component({
  selector: 'app-modificar-publicidad',
  templateUrl: './modificar-publicidad.component.html',
  styleUrls: ['./modificar-publicidad.component.css']
})

export class ModificarPublicidadComponent {
  @Input() publicidad: Publicidad = new Publicidad('', '', false);
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
      this.router.navigate(["publicidad"]);
     });
  }
  
  cerrar(){
    this.respuesta="";
    $('#modal-modificar-publicidad').modal('hide');
  }
}
