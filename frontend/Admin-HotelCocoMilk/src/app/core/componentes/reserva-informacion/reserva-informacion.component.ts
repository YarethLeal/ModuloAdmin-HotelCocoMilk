import { Component, Input } from '@angular/core';
import { ReservaCliente } from 'src/app/core/modelos/reservaCliente.model';
import { ReservaService } from '../../servicios/reserva.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Utils } from 'src/app/core/utilidades/util';
declare let $: any;
@Component({
  selector: 'app-reserva-informacion',
  templateUrl: './reserva-informacion.component.html',
  styleUrls: ['./reserva-informacion.component.css']
})
export class ReservaInformacionComponent {
@Input() dataReserva:ReservaCliente= new ReservaCliente();

constructor(private reservaService: ReservaService){}
verReserva() {
   $('#modal-ver-reserva').modal('show');
}
eliminarReserva(){
  this.reservaService.eliminarReserva({id:this.dataReserva.id_reserva}).subscribe((respuesta: string) => {
    console.log(respuesta);
   });

}
openPDF(): void {

  
    // Utils.exportToPdf("dataHeader", "data", "Reporte Estado -" + this.fechaActual, undefined);
  

}
cerrar(){
   $('#modal-ver-reserva').modal('hide');
}
}
