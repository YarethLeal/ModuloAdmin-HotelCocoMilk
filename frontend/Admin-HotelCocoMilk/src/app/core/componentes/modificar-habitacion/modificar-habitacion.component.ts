import { Component, Input } from '@angular/core';
import { TipoHabitacion } from '../../modelos/tipoHabitacion.model';
import { TipoHabitacionService } from '../../servicios/tipoHabitacion.service';
import { NotificacionDialogComponent } from '../notificacion-dialog/notificacion-dialog.component';

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
    $('#modal-modificar').modal('show');

  }

  guardarModificacion() {
    this.tipoHabitacionService.modificarTipoHabitacion(this.tipoHabitacion).subscribe((respuesta: string) => {
      this.respuesta = respuesta;
     });
  }

  obtenerNombreArchivo() {
    var file = $("input[type=file]");
    this.tipoHabitacion.imagen = file[0].files[0]["name"].toString();
  }
  cerrar(){
    this.respuesta="";
    $('#modal-modificar').modal('hide');
  }
}
