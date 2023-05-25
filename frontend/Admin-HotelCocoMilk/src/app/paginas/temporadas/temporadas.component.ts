import { DatePipe } from '@angular/common';
import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { TipoHabitacion } from 'src/app/core/modelos/tipoHabitacion.model';
import { TemporadasService } from 'src/app/core/servicios/temporadas.service';
import { TipoHabitacionService } from 'src/app/core/servicios/tipoHabitacion.service';
import { Temporadas } from 'src/app/core/modelos/temporadas.model';
import { ModificarTemporadasComponent } from 'src/app/core/componentes/modificar-temporadas/modificar-temporadas.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-temporadas',
  templateUrl: './temporadas.component.html',
  styleUrls: ['./temporadas.component.css']
})

export class TemporadasComponent implements OnInit {
  public tipoSeleccionado: string;
  public fechaInicio: string | null;
  public fechaFinal: string | null;
  public oferta: number;
  error: boolean = false;

  temporadasModificar:Temporadas= new Temporadas(0,0,0,0,0);

  constructor(private modificarTemporadas: ModificarTemporadasComponent, private temporadasService: TemporadasService, private tipoHabitacionService: TipoHabitacionService, private datePipe: DatePipe, private router:Router) {
    this.tipoSeleccionado = "";
    this.oferta = 0; 
    this.fechaInicio = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.fechaFinal = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  }

  ngOnInit(): void {
    this.buscarUsuario(); 
    this.refrescar();
  }

  dataTemporadas: any = []; 
  dataTipoHabitacion: any = [];

  listarTemporadas() {
    this.temporadasService.listarTemporadas().subscribe((data: any) => {
      this.dataTemporadas = data;
    });
  }

  listarTipoHabitacion() {
    this.tipoHabitacionService.listarTipoHabitacion().subscribe((data: TipoHabitacion[]) => {
      this.dataTipoHabitacion = data;
      console.log(data);
    });
  }

  registartemporadas(tipo:any ,fechaInicio:any, fechaFinal:any, oferta:any){
    var idTipoHabitacion = 0;
    for (let i = 0; i < this.dataTipoHabitacion.length; i++) {
      if(this.dataTipoHabitacion[i].tipo == tipo){
        idTipoHabitacion = this.dataTipoHabitacion[i].id_tipo_habitacion;
      }
    }

    this.temporadasService.registartemporadas(new Temporadas(0, idTipoHabitacion,fechaInicio,fechaFinal,oferta)).subscribe((respuesta: string) => {
      console.log(respuesta);
      console.log(tipo);
      this.refrescar();
    });
    this.limpiar();
    
  }

  abrirModificarTemporadas(id_temporada: number, tipo: string, fecha_inicio: any, fecha_final: any, oferta: number) {
    
    this.temporadasModificar.id_temporada = id_temporada;
    this.temporadasModificar.id_tipo_habitacion = tipo;
    this.temporadasModificar.fecha_inicio = this.datePipe.transform(fecha_inicio, 'dd-MM-yyyy');
    this.temporadasModificar.fecha_final = this.datePipe.transform(fecha_final, 'dd-MM-yyyy');;
    this.temporadasModificar.oferta = oferta;
    
    this.modificarTemporadas.modificarTemporadasModal(this.temporadasModificar);
    this.refrescar();
  }

  eliminarTemporadas(temporada: Temporadas) {
    console.log(temporada);
    return this.temporadasService.eliminarTemporadas(temporada).subscribe((respuesta:string)=>{
      console.log(respuesta);
      this.refrescar();
    })
  }

  limpiar() {
    this.oferta = 0;
    this.fechaInicio = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.fechaFinal = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  }

  refrescar() {
    this.listarTemporadas();
    this.listarTipoHabitacion();
  };

  buscarUsuario() {
    if(localStorage.getItem('id')==null && localStorage.getItem('usuario')==null){
      this.router.navigate(['']);
      this.error = true;
    }
  }
}
