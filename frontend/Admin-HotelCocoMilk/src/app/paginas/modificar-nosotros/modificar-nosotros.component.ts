import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotificacionDialogComponent } from 'src/app/core/componentes/notificacion-dialog/notificacion-dialog.component';
import { Galeria } from 'src/app/core/modelos/galeria.model';
import { Pagina } from 'src/app/core/modelos/pagina.model';
import { GaleriaService } from 'src/app/core/servicios/galeria.service';
import { PaginaService } from 'src/app/core/servicios/pagina.service';
import { Utils } from 'src/app/core/utilidades/util';

@Component({
  selector: 'app-modificar-nosotros',
  templateUrl: './modificar-nosotros.component.html',
  styleUrls: ['./modificar-nosotros.component.css']
})
export class ModificarNosotrosComponent {
  public dataAboutUs: Pagina;
  public dataGaleria: Galeria[] = [];
  imagen: any = "";
  nombreImagen: string = "Nuevo nombre...";
  respuesta: string = "";
  error: boolean = false;

  constructor(private paginaService: PaginaService, private galeriaService: GaleriaService, private router:Router) {
    this.dataAboutUs = new Pagina(0);
  }

  ngOnInit(): void {
    this.buscarUsuario();
    this.descripcionPagina("Sobre Nosotros");
    this.mostrarGaleria();
  }

  descripcionPagina(buscar: string) {
    this.paginaService.mostrarPagina({ tipoPagina: buscar }).subscribe((data: Pagina[]) => {
      this.dataAboutUs = data[0];
    });
  }

  modificarDescripcion() {
    console.log(this.dataAboutUs);
    this.paginaService.modificarPagina(this.dataAboutUs).subscribe((respuesta: string) => {
      this.respuesta = respuesta;
      NotificacionDialogComponent.prototype.notificar(this.respuesta);
    });
  }

  mostrarGaleria() {
    this.galeriaService.listarGaleria().subscribe((data: Galeria[]) => {
      this.dataGaleria = data;
    });
  }

  registrarImagenGaleria() {
    if (this.nombreImagen != null && this.nombreImagen != "" && this.imagen != "") {
      let galeriaImagen = new Galeria(this.nombreImagen, this.imagen);
      console.log(galeriaImagen);
      return this.galeriaService.registrarImagenGaleria(galeriaImagen).subscribe((data: any) => {
        this.respuesta = data;
        NotificacionDialogComponent.prototype.notificar(this.respuesta);
        console.log(data);
        this.mostrarGaleria();
      });
    } else {
      this.respuesta = "Datos incompletos o invalidos";
      NotificacionDialogComponent.prototype.notificar(this.respuesta);
    }
    return this.respuesta;
  }

  eliminarImagenGaleria(imagen: Galeria) {
    return this.galeriaService.eliminarImagenGaleria(imagen).subscribe((respuesta: string) => {
      this.respuesta = respuesta;
      NotificacionDialogComponent.prototype.notificar(this.respuesta);
      this.mostrarGaleria();
    });
  }

  obtenerImagen(event: any) {
    const file = event.target.files[0];
    var promiseResult = Utils.imageToByte(file);
    promiseResult.then((value: any) => {
      this.imagen = value;
      let image = document.getElementById("preview") as HTMLImageElement;
      image.src = 'data:image/jpg;base64,' + value;
    });
  }

  buscarUsuario() {
    if(localStorage.getItem('id')==null && localStorage.getItem('usuario')==null){
      this.router.navigate(['']);
      this.error = true;
    }
  }
}
