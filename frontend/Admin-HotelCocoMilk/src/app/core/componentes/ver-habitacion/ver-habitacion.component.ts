import { Component, Input } from '@angular/core';
import { TipoHabitacion } from '../../modelos/tipoHabitacion.model';

declare let $: any;

@Component({
  selector: 'app-ver-habitacion',
  templateUrl: './ver-habitacion.component.html',
  styleUrls: ['./ver-habitacion.component.css']
})

export class VerHabitacionComponent {
  @Input() tipoHabitacion: TipoHabitacion = new TipoHabitacion();
  respuesta: string;

  constructor() {
    this.respuesta = "";
  }

  verTipoHabitacion(tipoHabitacion: TipoHabitacion) {
    this.tipoHabitacion = tipoHabitacion;
    let image = document.getElementById("previewShowImage") as HTMLImageElement;
    image.src = 'data:image/jpg;base64,' + this.tipoHabitacion.imagen;
    $('#modal-ver').modal('show');
  }

  cerrar() {
    this.respuesta = "";
    $('#modal-ver').modal('hide');
  }

}
