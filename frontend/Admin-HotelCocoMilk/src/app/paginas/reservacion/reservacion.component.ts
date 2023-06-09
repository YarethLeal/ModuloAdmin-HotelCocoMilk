import { Component, OnInit } from '@angular/core';
import { ReservaCliente } from 'src/app/core/modelos/reservaCliente.model';
import { ReservaService } from 'src/app/core/servicios/reserva.service';
import { ReservaInformacionComponent } from 'src/app/core/componentes/reserva-informacion/reserva-informacion.component';
import { NotificacionDialogComponent } from 'src/app/core/componentes/notificacion-dialog/notificacion-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservacion',
  templateUrl: './reservacion.component.html',
  styleUrls: ['./reservacion.component.css']
})

export class ReservacionComponent  implements OnInit {
  dataReserva: ReservaCliente[] = [];
  reserva: ReservaCliente = new ReservaCliente();
  respuesta: string="";
  error: boolean = false;

  constructor(private reservaService: ReservaService, private router:Router){}

  ngOnInit(): void {
    this.buscarUsuario(); 
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

  buscarUsuario() {
    if(localStorage.getItem('id')==null && localStorage.getItem('usuario')==null){
      this.router.navigate(['']);
      this.error = true;
    }
  }
}

