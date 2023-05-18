import { Component, Injectable, Input, OnChanges } from '@angular/core';
import { Temporadas } from '../../modelos/temporadas.model';
import { NgForm } from '@angular/forms';
import { TemporadasService } from '../../servicios/temporadas.service';

declare let $: any;

@Injectable({
  providedIn: "root"
})
@Component({
  selector: 'app-modificar-temporadas',
  templateUrl: './modificar-temporadas.component.html',
  styleUrls: ['./modificar-temporadas.component.css']
})
export class ModificarTemporadasComponent implements OnChanges{
  @Input() temporadas:Temporadas;

  constructor(private temporadasService: TemporadasService) 
  { 
    this.temporadas = new Temporadas(0,0,0,0,0);
    this.temporadas.oferta = 10;
  }
 
  ngOnChanges() {}

  modificarTipoHabitacion(paramTemporadas: Temporadas){
    
    this.temporadas.oferta = paramTemporadas.oferta;
    console.log(this.temporadas.oferta);
    this.ok();
  }

  ok (){
    $('#modal-modificar').modal('show');
  }

  modificarTemporadas() {
    return this.temporadasService.modificarTemporadas(this.temporadas).subscribe((respuesta:string)=>{
      console.log(respuesta);
      //this.refrescar();
    })
  }
}
