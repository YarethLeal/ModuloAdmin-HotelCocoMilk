import { Component, Input } from '@angular/core';
import { TipoHabitacion } from '../../modelos/tipoHabitacion.model';
import { TipoHabitacionService } from '../../servicios/tipoHabitacion.service';
import { NotificacionDialogComponent } from '../notificacion-dialog/notificacion-dialog.component';
import { Utils } from '../../utilidades/util';
import { Console } from 'console';
declare let $: any;

@Component({
  selector: 'app-modificar-habitacion',
  templateUrl: './modificar-habitacion.component.html',
  styleUrls: ['./modificar-habitacion.component.css']
})

export class ModificarHabitacionComponent {
  @Input() tipoHabitacion: TipoHabitacion = new TipoHabitacion();
  respuesta: string;  
  constructor(private tipoHabitacionService: TipoHabitacionService) {
    this.respuesta = "";
  }

  modificarTipoHabitacion(tipohabitacion: TipoHabitacion) {
    this.tipoHabitacion = tipohabitacion;
    let image = document.getElementById("preview") as HTMLImageElement;
    image.src = 'data:image/jpg;base64,' + this.tipoHabitacion.imagen;
    $('#modal-modificar').modal('show');
  }

  guardarModificacion() {
    this.tipoHabitacionService.modificarTipoHabitacion(this.tipoHabitacion).subscribe((respuesta: string) => {
      this.respuesta = respuesta;
    });
  }

  obtenerImagen() {   
    var promiseResult = Utils.imageToByte($("input[type=file]")[0].files[0]);
    promiseResult.then((value: any) => {
      this.tipoHabitacion.imagen = value;
      let image = document.getElementById("preview") as HTMLImageElement;
      image.src = 'data:image/jpg;base64,' + this.tipoHabitacion.imagen;
    });
  }

  cerrar() {
    this.respuesta = "";
    $('#modal-modificar').modal('hide');
  }
}
