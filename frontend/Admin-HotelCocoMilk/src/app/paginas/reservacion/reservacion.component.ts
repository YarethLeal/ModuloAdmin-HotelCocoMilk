import { Component, OnInit } from '@angular/core';
import { ReservaCliente,Reserva,Cliente } from 'src/app/core/modelos/reservaCliente.model';
import { Habitacion } from 'src/app/core/modelos/habitacion.model';
import { ReservaService } from 'src/app/core/servicios/reserva.service';
import { HabitacionService } from 'src/app/core/servicios/habitacion.service';
import { ReservaInformacionComponent } from 'src/app/core/componentes/reserva-informacion/reserva-informacion.component';
import { NotificacionDialogComponent } from 'src/app/core/componentes/notificacion-dialog/notificacion-dialog.component';
@Component({
  selector: 'app-reservacion',
  templateUrl: './reservacion.component.html',
  styleUrls: ['./reservacion.component.css']
})
export class ReservacionComponent  implements OnInit{
  dataReserva: ReservaCliente[] = [];
  reserva: ReservaCliente = new ReservaCliente();
  respuesta: string="";
  constructor(private reservaService: ReservaService,private habitacionService:HabitacionService){

  }

  ngOnInit(): void {
    this.listarReservaciones();
  }
  listarReservaciones(){
    this.reservaService.listarReservaCliente().subscribe((dataReserva: ReservaCliente[]) => {
      this.dataReserva=dataReserva;
    });
  }
  verReserva(data: ReservaCliente) {
    this.reserva = data;
    ReservaInformacionComponent.prototype.verReserva();
  }

 eliminarReserva(id_reserva:number){
  this.reservaService.eliminarReserva({id:id_reserva}).subscribe((respuesta: string) => {
    this.respuesta=respuesta;
    NotificacionDialogComponent.prototype.notificar(this.respuesta);
    this.listarReservaciones();
  });
}
}
