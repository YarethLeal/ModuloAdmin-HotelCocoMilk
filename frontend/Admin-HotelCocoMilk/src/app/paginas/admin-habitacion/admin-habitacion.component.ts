import { Component, OnInit } from '@angular/core';
import { Habitacion } from 'src/app/core/modelos/habitacion.model';
import { HabitacionService } from 'src/app/core/servicios/habitacion.service';

@Component({
  selector: 'app-admin-habitacion',
  templateUrl: './admin-habitacion.component.html',
  styleUrls: ['./admin-habitacion.component.css']
})


export class AdminHabitacionComponent implements OnInit{

  datahabitacion: Habitacion[]=[];
  constructor(private habitacionService: HabitacionService){

  }

  ngOnInit(): void {
    this.listaHabitacion();
  }

  listaHabitacion(){
    return this.habitacionService.listarHabitaciones().subscribe((data: Habitacion[])=>{
      this.datahabitacion= data;
    })
  }
}
