import { Component, Input } from '@angular/core';
import { TipoHabitacion } from '../../modelos/tipoHabitacion.model';

declare let $: any;
@Component({
  selector: 'app-modificar-habitacion',
  templateUrl: './modificar-habitacion.component.html',
  styleUrls: ['./modificar-habitacion.component.css']
})
export class ModificarHabitacionComponent {
  @Input() tipoHabitacion:TipoHabitacion = new TipoHabitacion();


modificarTipoHabitacion(tipohabitacion:TipoHabitacion ){
  this.tipoHabitacion= tipohabitacion;
  console.log(this.tipoHabitacion)
  $('#modal-modificar').modal('show');

}




}
