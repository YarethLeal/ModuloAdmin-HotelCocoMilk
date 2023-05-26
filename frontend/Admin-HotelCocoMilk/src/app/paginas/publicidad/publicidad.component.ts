import { Component, OnInit , Input} from '@angular/core';
import { Router } from '@angular/router';
import { PublicidadService } from 'src/app/core/servicios/publicidad.service';
import { Publicidad } from 'src/app/core/modelos/publicidad.model';


@Component({
  selector: 'app-publicidad',
  templateUrl: './publicidad.component.html',
  styleUrls: ['./publicidad.component.css']
})

export class PublicidadComponent implements OnInit {
  error: boolean = false;
  public imagen: any;
  public destino: string;

  constructor(private publicidadService: PublicidadService, private router:Router) {
    this.imagen = "cat-2.jpg";
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

  modificarImagen(){

  }

  eliminarImagen(){
   
  }

  obtenerNombreArchivo() {
    var file = $("input[type=file]").prop("files");
    if (file.length > 0) {
      this.imagen = file[0].name;
    } else {
      this.imagen= ""; 
    }
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
