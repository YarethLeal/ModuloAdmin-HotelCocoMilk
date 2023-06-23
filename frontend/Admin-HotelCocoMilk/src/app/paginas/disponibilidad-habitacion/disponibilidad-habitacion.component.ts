import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { HabitacionDisponible } from 'src/app/core/modelos/habitacion.model';
import { TipoHabitacion } from 'src/app/core/modelos/tipoHabitacion.model';
import { HabitacionService } from 'src/app/core/servicios/habitacion.service';
import { TipoHabitacionService } from 'src/app/core/servicios/tipoHabitacion.service';
import { Router } from '@angular/router';
import { NotificacionDialogComponent } from 'src/app/core/componentes/notificacion-dialog/notificacion-dialog.component';

@Component({
  selector: 'app-disponibilidad-habitacion',
  templateUrl: './disponibilidad-habitacion.component.html',
  styleUrls: ['./disponibilidad-habitacion.component.css']
})
export class DisponibilidadHabitacionComponent {
  public tipoSeleccionado: string;
  public fechaInicio: string | null;
  public fechaFinal: string | null; 
  error: boolean = false;
  respuesta:string;

  constructor(private habitacionService: HabitacionService, private tipoHabitacionService: TipoHabitacionService, private datePipe: DatePipe, private router:Router) {
    this.tipoSeleccionado = "";
    this.fechaInicio = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.fechaFinal = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.respuesta = "¡Lo sentimos! No hay habitaciones disponibles para este tipo de habitaciones en el rango fechas solicitado.";
  }

  ngOnInit(): void {
    this.buscarUsuario();
    this.listarTipoHabitacion();
  }

  dataHabitacion: any = []; 
  dataTipoHabitacion: any = [];

  listarTipoHabitacion() {
    this.tipoHabitacionService.listarTipoHabitacion().subscribe((data: TipoHabitacion[]) => {
      this.dataTipoHabitacion = data;
      console.log(data);
    });
  }

  disponibilidadHabitaciones(fechaLlegada: any, fechaSalida: any, tipoHabitacion: string) {
    console.log(fechaLlegada + fechaSalida + fechaSalida);
    this.habitacionService.disponibilidadHabitaciones(new HabitacionDisponible(fechaLlegada, fechaSalida, tipoHabitacion)).subscribe((data: any) => {
      //console.log(data);

      if(data == null){
        NotificacionDialogComponent.prototype.notificar(this.respuesta);
      } else {
        this.dataHabitacion = data;
      }
    });
  }

  buscarUsuario() {
    if(localStorage.getItem('id')==null && localStorage.getItem('usuario')==null){
      this.router.navigate(['']);
      this.error = true;
    }
  }
}
