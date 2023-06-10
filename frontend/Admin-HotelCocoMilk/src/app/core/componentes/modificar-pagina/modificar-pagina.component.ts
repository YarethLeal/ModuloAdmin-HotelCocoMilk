import { Component, Input } from '@angular/core';
import { Pagina } from '../../modelos/pagina.model';
import { PaginaService } from '../../servicios/pagina.service';
import { Utils } from '../../utilidades/util';

declare let $: any;

@Component({
  selector: 'app-modificar-pagina',
  templateUrl: './modificar-pagina.component.html',
  styleUrls: ['./modificar-pagina.component.css']
})

export class ModificarPaginaComponent {
  @Input() facilidad: Pagina = new Pagina(0);
  respuesta: string;
  imagenModificada: string;

  constructor(private paginaService: PaginaService) {
    this.respuesta = "";
    this.imagenModificada = "";
  }

  modificarFacilidad(facilidad: Pagina) {
    this.facilidad = facilidad;
    let image = document.getElementById("modifyPreview") as HTMLImageElement;
    image.src = this.facilidad.imagen;
    console.log(facilidad);
    $('#modal-modificar-pagina').modal('show');
  }

  guardarModificacion() {
    console.log(this.facilidad);
    this.facilidad.imagen = this.facilidad.imagen.slice(22);
    this.paginaService.modificarPagina(this.facilidad).subscribe((respuesta: string) => {
      this.respuesta = respuesta;
      console.log(respuesta);
      this.facilidad.imagen = 'data:image/jpg;base64,' + this.facilidad.imagen;
     });
  }

  obtenerImagen(event: any) {   
    const file = event.target.files[0];
    var promiseResult = Utils.imageToByte(file);
    promiseResult.then((value: any) => {
      this.facilidad.imagen = 'data:image/jpg;base64,' + value;
      console.log(value);
      let image = document.getElementById("modifyPreview") as HTMLImageElement;
      image.src = 'data:image/jpg;base64,' + value;
    });
  }
  
  cerrar(){
    this.respuesta="";
    $('#modal-modificar-pagina').modal('hide');
  }
}
