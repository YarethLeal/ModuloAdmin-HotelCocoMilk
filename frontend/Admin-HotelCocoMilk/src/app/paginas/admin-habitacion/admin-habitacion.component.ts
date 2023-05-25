import { Component, OnInit } from '@angular/core';
import { Habitacion } from 'src/app/core/modelos/habitacion.model';
import { HabitacionService } from 'src/app/core/servicios/habitacion.service';
import { TipoHabitacionService } from 'src/app/core/servicios/tipoHabitacion.service';
import { TipoHabitacion } from 'src/app/core/modelos/tipoHabitacion.model';
import { ModificarHabitacionComponent } from 'src/app/core/componentes/modificar-habitacion/modificar-habitacion.component';
import { NotificacionDialogComponent } from 'src/app/core/componentes/notificacion-dialog/notificacion-dialog.component';
import { Router } from '@angular/router';
import { VerHabitacionComponent } from 'src/app/core/componentes/ver-habitacion/ver-habitacion.component';

@Component({
  selector: 'app-admin-habitacion',
  templateUrl: './admin-habitacion.component.html',
  styleUrls: ['./admin-habitacion.component.css']
})


export class AdminHabitacionComponent implements OnInit{
  dataHabitacionStandard: Habitacion[]=[];
  dataHabitacionJunior: Habitacion[]=[];
  dataTipoHabitacion: any[] = [];
  public tipoSeleccionado: number;
  tipoHabitacionModificar:TipoHabitacion= new TipoHabitacion();
  respuesta:string;
  error: boolean = false;

  constructor(private habitacionService: HabitacionService, private tipoHabitacionService: TipoHabitacionService, private router:Router){
  this.tipoSeleccionado = 0;
  this.respuesta="";
  }

  ngOnInit(): void {
    this.buscarUsuario();
    this.listaHabitacion();
    this.listarTipoHabitacion();
  }

  listarTipoHabitacion() {
    this.tipoHabitacionService.listarTipoHabitacion().subscribe((data: TipoHabitacion[]) => {
      this.dataTipoHabitacion = data;
    });
  }

  listaHabitacion(){
    this.dataHabitacionJunior=[];
    this.dataHabitacionStandard=[];
    return this.habitacionService.listarHabitaciones().subscribe((data: Habitacion[])=>{
      data.forEach(element => {
        if(element.id_tipo_habitacion ==1){
          this.dataHabitacionStandard.push(element);
        }
        else{
          this.dataHabitacionJunior.push(element);
        }
      });
    })
  }

  registrarHabitacion(){
   console.log(this.tipoSeleccionado);
   var habitacion : Habitacion= new Habitacion();
   habitacion.id_tipo_habitacion=this.tipoSeleccionado;
   habitacion.activa=true;
   habitacion.estado="DISPONIBLE"
   return this.habitacionService.registrarHabitacion(habitacion).subscribe((respuesta:string)=>{
    console.log(respuesta)
    this.respuesta=respuesta;
    NotificacionDialogComponent.prototype.notificar(this.respuesta);
    this.listaHabitacion();
   })
  }

  eliminarHabitacion(habitacion:Habitacion){
    console.log(habitacion);
    return this.habitacionService.eliminarHabitacion(habitacion).subscribe((respuesta:string)=>{
     console.log(respuesta)
      this.respuesta=respuesta;
      NotificacionDialogComponent.prototype.notificar(this.respuesta);
      this.listaHabitacion();
    })
  }

  actualizarHabitacion(habitacion:Habitacion){
    habitacion.activa = !habitacion.activa;
    return this.habitacionService.modificarHabitacion(habitacion).subscribe((respuesta:string)=>{
      console.log(respuesta);

      this.respuesta=respuesta;
      console.log(this.respuesta);

      NotificacionDialogComponent.prototype.notificar(this.respuesta);
      this.listaHabitacion();
    })
  }

  abrirModificarTipoHabitacion(tipo: string) {
    this.dataTipoHabitacion.forEach( habitacion =>
      { if(habitacion.tipo == tipo){ this.tipoHabitacionModificar = habitacion;}});
    ModificarHabitacionComponent.prototype.modificarTipoHabitacion(this.tipoHabitacionModificar);
  }

  abrirVerHabitacion(tipo: string){
    this.dataTipoHabitacion.forEach( habitacion =>
      { if(habitacion.tipo == tipo){ this.tipoHabitacionModificar = habitacion;}});
      VerHabitacionComponent.prototype.verTipoHabitacion(this.tipoHabitacionModificar);
  }

  buscarUsuario() {
    if(localStorage.getItem('id')==null && localStorage.getItem('usuario')==null){
      this.router.navigate(['']);
      this.error = true;
    }
  }
}
