import { Component, OnInit , Input} from '@angular/core';
import { Router } from '@angular/router';
import { PublicidadService } from 'src/app/core/servicios/publicidad.service';
import { Publicidad } from 'src/app/core/modelos/publicidad.model';
import { ModificarPublicidadComponent } from 'src/app/core/componentes/modificar-publicidad/modificar-publicidad.component';
import { HttpClient } from '@angular/common/http';
import { Utils } from 'src/app/core/utilidades/util';
declare let $: any;

@Component({
  selector: 'app-publicidad',
  templateUrl: './publicidad.component.html',
  styleUrls: ['./publicidad.component.css']
})

export class PublicidadComponent implements OnInit {
  error: boolean = false;
  public destino: string;

  publicidadModificar:Publicidad= new Publicidad('','',false);
  

  constructor(private publicidadService: PublicidadService, private router:Router, private http: HttpClient) {

    
   /* this.imagen = "assets/images/vacio.png";*/
    this.destino = "";
  }

  ngOnInit(): void {
    this.buscarUsuario(); 
    this.refrescar();
  }

  dataPublicidad: any = []; 

  listarPublicidad() {
    this.publicidadService.listarPublicidad().subscribe((data: any) => {
      this.dataPublicidad = data;
      this.dataPublicidad.forEach((element: any)=>{
        element.imagen ='data:image/jpg;base64,' + element.imagen;
      });
    });
  }

  registarPublicidad(imagen:any ,destino:any){
    this.publicidadService.registarPublicidad(new Publicidad(imagen,destino,false)).subscribe((respuesta: string) => {
      console.log(respuesta);
      this.refrescar();
    });
  }

  abrirModalPublicidad(publicidad: Publicidad){
    this.publicidadModificar = publicidad;
    ModificarPublicidadComponent.prototype.modificarPublicidad(this.publicidadModificar);
    console.log(this.publicidadModificar);
  }


  obtenerImagen(event: any) {   
    const file = event.target.files[0];
    var promiseResult = Utils.imageToByte(file);
    promiseResult.then((value: any) => {
      this.dataPublicidad.imagen = value;
      let image = document.getElementById("preview") as HTMLImageElement;
      image.src = 'data:image/jpg;base64,' + this.dataPublicidad.imagen;
    });
  }

  buscarUsuario() {
    if(localStorage.getItem('id')==null && localStorage.getItem('usuario')==null){
      this.router.navigate(['']);
      this.error = true;
    }
  }

  refrescar() {
    this.listarPublicidad();
  };
}
