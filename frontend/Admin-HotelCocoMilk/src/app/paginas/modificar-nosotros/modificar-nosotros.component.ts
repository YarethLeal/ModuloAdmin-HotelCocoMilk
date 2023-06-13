import { Component } from '@angular/core';
import { Pagina } from 'src/app/core/modelos/pagina.model';
import { PaginaService } from 'src/app/core/servicios/pagina.service';

@Component({
  selector: 'app-modificar-nosotros',
  templateUrl: './modificar-nosotros.component.html',
  styleUrls: ['./modificar-nosotros.component.css']
})
export class ModificarNosotrosComponent {
  public dataAboutUs: Pagina;
  //public galeria: Array<string>;
  //public imagenPrincipal: string;
  constructor(private paginaService: PaginaService) {
    this.dataAboutUs = new Pagina(0);
  }
  ngOnInit(): void {
    this.descripcionPagina("Sobre Nosotros");
  }
  descripcionPagina(buscar: string) {
    this.paginaService.mostrarPagina({ tipoPagina: buscar }).subscribe((data: Pagina[]) => {
      this.dataAboutUs = data[0];
    });
  }
  modificarDescripcion(){
    console.log(this.dataAboutUs);
    this.paginaService.modificarPagina(this.dataAboutUs).subscribe((respuesta: string) => {
      //this.respuesta = respuesta;
      console.log(respuesta);
    });
  }
}
