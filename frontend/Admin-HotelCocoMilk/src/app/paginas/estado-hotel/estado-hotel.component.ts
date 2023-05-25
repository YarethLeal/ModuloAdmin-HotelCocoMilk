import { Component, OnInit } from '@angular/core';
import { HabitacionService } from 'src/app/core/servicios/habitacion.service';
import { Utils } from 'src/app/core/utilidades/util';
import { LoginComponent } from '../login/login/login.component';

@Component({
  selector: 'app-estado-hotel',
  templateUrl: './estado-hotel.component.html',
  styleUrls: ['./estado-hotel.component.css']
})

export class EstadoHotelComponent implements OnInit {
  
  public fecha: Date;
  public fechaActual: string;

  constructor(private habitacionService: HabitacionService, private verificarLogin: LoginComponent) {
    this.fecha = new Date();
    this.fechaActual = this.fecha.getDate()+"/"+(this.fecha.getMonth()+1)+"/"+this.fecha.getFullYear();
  }

  ngOnInit(): void {
    this.listarEstadoHabitaciones();
  }

  dataHabitacion: any = []; 

  listarEstadoHabitaciones() {
      this.habitacionService.listarEstadoHabitaciones().subscribe((data: any) => {
        this.dataHabitacion = data;
      });
  }

  public openPDF(): void {

    let dataHeader = [["Numero de habitacion", "Tipo", "Estado"]];
    let data: any[][] = new Array(this.dataHabitacion.length);
    for (let i = 0; i <  this.dataHabitacion.length; i++) {
       data[i] = new Array(3);
       data[i][0] = this.dataHabitacion[i].numero_habitacion;
       data[i][1] = this.dataHabitacion[i].tipo;
       data[i][2] = this.dataHabitacion[i].estado;
      }
      Utils.exportToPdf(dataHeader, data, "Reporte Estado -" + this.fechaActual, undefined);
  }

  buscarUsuario() {
    this.verificarLogin.buscarUsuario(localStorage.getItem('id') || '', localStorage.getItem('usuario') || '');
  }

}
