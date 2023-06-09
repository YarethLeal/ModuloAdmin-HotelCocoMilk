import { Component, OnInit  } from '@angular/core';
import { Pagina } from 'src/app/core/modelos/pagina.model';
import { PaginaService } from 'src/app/core/servicios/pagina.service';

@Component({
  selector: 'app-modificar-facilidades',
  templateUrl: './modificar-facilidades.component.html',
  styleUrls: ['./modificar-facilidades.component.css']
})
export class ModificarFacilidadesComponent implements OnInit{

 dataPaginas: Pagina[] =[];
  constructor(private paginaService: PaginaService) {

  }

  ngOnInit(): void {
    this.mostrarPagina("Facilidades");
  }

  mostrarPagina(buscar: string) {
    this.paginaService.mostrarPagina({ tipoPagina: buscar }).subscribe((data: Pagina[]) => {
      this.dataPaginas = data;

    });
  }
}