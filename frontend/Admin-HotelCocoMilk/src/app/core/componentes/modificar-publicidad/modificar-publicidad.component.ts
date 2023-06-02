import { Component, Input } from '@angular/core';
import { Publicidad } from '../../modelos/publicidad.model';
import { PublicidadService } from '../../servicios/publicidad.service';
import { Utils } from '../../utilidades/util';

declare let $: any;

@Component({
  selector: 'app-modificar-publicidad',
  templateUrl: './modificar-publicidad.component.html',
  styleUrls: ['./modificar-publicidad.component.css']
})

export class ModificarPublicidadComponent {
  @Input() publicidad: Publicidad = new Publicidad('', '', false);
  respuesta: string;

  constructor(private publicidadService: PublicidadService) {
    this.respuesta = "";
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
    this.publicidad.imagen = image.src;

    this.publicidadService.modificarPublicidad(this.publicidad).subscribe((respuesta: string) => {
      this.respuesta = respuesta;
      console.log(respuesta);
     });
  }

  obtenerImagen() {   
    var promiseResult = Utils.imageToByte($("input[type=file]")[0].files[0]);
    promiseResult.then((value: any) => {
      let image = document.getElementById("modifyPreview") as HTMLImageElement;
      image.src = 'data:image/jpg;base64,' + value;
    });
  }

  eliminar(){
    this.publicidadService.eliminarPublicidad(this.publicidad).subscribe((respuesta: string) => {
      this.respuesta = respuesta;
     });
  }
  
  cerrar(){
    this.respuesta="";
    $('#modal-modificar-publicidad').modal('hide');
  }
}
