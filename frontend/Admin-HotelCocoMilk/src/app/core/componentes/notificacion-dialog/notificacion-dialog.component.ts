import { Component,Input } from '@angular/core';

declare let $: any;
@Component({
  selector: 'app-notificacion-dialog',
  templateUrl: './notificacion-dialog.component.html',
  styleUrls: ['./notificacion-dialog.component.css']
})
export class NotificacionDialogComponent {
  @Input() mensaje:String = "";
  constructor(){

  }
  notificar(info:String){
    this.mensaje = info;
    console.log(this.mensaje);
    $('#modal-notificar').modal('show');
  }
}
