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
public fecha: Date;
public fechaActual: string;
@Input() dataReserva:ReservaCliente= new ReservaCliente();

constructor(private reservaService: ReservaService){
  this.fecha = new Date();
  this.fechaActual = this.fecha.getDate()+"/"+(this.fecha.getMonth()+1)+"/"+this.fecha.getFullYear();

}
verReserva() {
   $('#modal-ver-reserva').modal('show');
}
eliminarReserva(){
  this.reservaService.eliminarReserva({id:this.dataReserva.id_reserva}).subscribe((respuesta: string) => {
    console.log(respuesta);
    $('#modal-ver-reserva').modal('hide')
   });

}
openPDF(): void {
  var dataTemp= [[Object.keys(this.dataReserva)],[Object.values(this.dataReserva)]];
  const doc = new jsPDF();
    let dataHeader = [["Fecha","Reserva ID", "Nombre ", "Apellido", "Email", "Tarjeta",
                      "Transacción", "Fecha Llegada", "Fecha Salida","Tipo Habitación"]];
    let data = [[ (new Date(this.dataReserva.fecha).toUTCString()),this.dataReserva.id_reserva,
                 this.dataReserva.nombre, this.dataReserva.apellido, this.dataReserva.correo,
                 this.dataReserva.tarjeta.slice(-4).padStart(this.dataReserva.tarjeta.length,'*'),
                 this.dataReserva.transaccion, (new Date(this.dataReserva.fecha_entrada).toUTCString()),
                 (new Date(this.dataReserva.fecha_salida).toUTCString()), this.dataReserva.tipo]];
   Utils.exportToPdf(dataHeader, data, "Reserva-"+this.dataReserva.id_reserva+ "-"+ this.fechaActual, undefined);
}
cerrar(){
   $('#modal-ver-reserva').modal('hide');
}
}
