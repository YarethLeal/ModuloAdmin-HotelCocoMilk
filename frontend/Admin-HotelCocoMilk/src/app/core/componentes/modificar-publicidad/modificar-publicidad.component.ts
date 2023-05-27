import { Component, Input } from '@angular/core';
import { Publicidad } from '../../modelos/publicidad.model';
import { PublicidadService } from '../../servicios/publicidad.service';

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
    $('#modal-modificar-publicidad').modal('show');
  }

  guardarModificacion() {
    console.log(this.publicidad);
    this.publicidadService.modificarPublicidad(this.publicidad).subscribe((respuesta: string) => {
      this.respuesta = respuesta;
     });
  }

  obtenerNombreArchivo() {
    var file = $("input[type=file]");
    this.publicidad.imagen = file[0].files[0]["name"].toString();
  }

  eliminar(){
    //console.log(this.publicidad);
    this.publicidadService.eliminarPublicidad(this.publicidad).subscribe((respuesta: string) => {
      this.respuesta = respuesta;
     });
  }
  
  cerrar(){
    this.respuesta="";
    $('#modal-modificar-publicidad').modal('hide');
  }
}
