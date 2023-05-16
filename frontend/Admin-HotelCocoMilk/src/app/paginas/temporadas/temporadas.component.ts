import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Temporadas } from 'src/app/core/modelos/temporadas.model';
import { TipoHabitacion } from 'src/app/core/modelos/tipoHabitacion.model';
import { TemporadasService } from 'src/app/core/servicios/temporadas.service';
import { TipoHabitacionService } from 'src/app/core/servicios/tipoHabitacion.service';

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

  constructor(private temporadasService: TemporadasService, private tipoHabitacionService: TipoHabitacionService, private datePipe: DatePipe) {
    this.tipoSeleccionado = "";
    this.oferta = 0;
    this.fechaInicio = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.fechaFinal = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  }

  ngOnInit(): void {
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

    this.temporadasService.registartemporadas(new Temporadas(idTipoHabitacion,fechaInicio,fechaFinal,oferta)).subscribe((respuesta: string) => {
      console.log(respuesta);
      console.log(tipo);
      this.refrescar();
    });
    this.limpiar();
    
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


}
