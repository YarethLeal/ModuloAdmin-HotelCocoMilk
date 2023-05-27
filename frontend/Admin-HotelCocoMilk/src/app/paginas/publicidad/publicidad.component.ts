import { Component, OnInit , Input} from '@angular/core';
import { Router } from '@angular/router';
import { PublicidadService } from 'src/app/core/servicios/publicidad.service';
import { Publicidad } from 'src/app/core/modelos/publicidad.model';
import { ModificarPublicidadComponent } from 'src/app/core/componentes/modificar-publicidad/modificar-publicidad.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-publicidad',
  templateUrl: './publicidad.component.html',
  styleUrls: ['./publicidad.component.css']
})

export class PublicidadComponent implements OnInit {
  error: boolean = false;
  public imagen: any;
  public destino: string;

  publicidadModificar:Publicidad= new Publicidad('','',false);
  

  constructor(private publicidadService: PublicidadService, private router:Router, private http: HttpClient) {
    this.imagen = "vacio.png";
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
    });
  }

  registarPublicidad(imagen:any ,destino:any){
    this.publicidadService.registarPublicidad(new Publicidad(imagen,destino,false)).subscribe((respuesta: string) => {
      console.log(respuesta);
      console.log(imagen)
      console.log(destino)
      this.refrescar();
    });
  }

  abrirModalPublicidad(publicidad: Publicidad){
    this.publicidadModificar = publicidad;
    ModificarPublicidadComponent.prototype.modificarPublicidad(this.publicidadModificar);
    console.log(this.publicidadModificar);
  }

  obtenerNombreArchivo(event: any) {
    const file = event.target.files[0];
    const rutaArchivo = URL.createObjectURL(file);
    if (file) {
      this.imagen = file.name;
      console.log(rutaArchivo);
    } else {
      this.imagen = "";
    }
    this.uploadFile(file);
  }

  uploadFile(file: File) {
   this.publicidadService.uploadFile(file).subscribe((respuesta) => {
      console.log(respuesta);
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
