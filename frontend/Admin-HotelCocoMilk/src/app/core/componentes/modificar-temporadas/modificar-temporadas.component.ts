import { Component, Injectable, Input } from '@angular/core';
import { Temporadas } from '../../modelos/temporadas.model';

declare let $: any;
@Injectable({
  providedIn: "root"
})
@Component({
  selector: 'app-modificar-temporadas',
  templateUrl: './modificar-temporadas.component.html',
  styleUrls: ['./modificar-temporadas.component.css']
})
export class ModificarTemporadasComponent {
  @Input() temporadas:Temporadas = new Temporadas(0, 0, 0, null, 10);

  modificarTemporadasModal(paramTemporadas: Temporadas){
    this.temporadas = paramTemporadas;
    console.log(this.temporadas);
    $('#modal-modificar').modal('show');    
  }

  /*modificarTemporadas() {
    return this.temporadasService.modificarTemporadas(this.temporadas).subscribe((respuesta:string)=>{
      console.log(respuesta);
      //this.refrescar();
    })
  }*/
}
