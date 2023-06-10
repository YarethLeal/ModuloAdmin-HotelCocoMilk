import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError, retry, catchError } from "rxjs";
import { Pagina } from "../modelos/pagina.model";
import { Utils } from "../utilidades/util";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})

export class PaginaService {

  urlAPI: string = environment.urlAPI;
  constructor(private http: HttpClient) {
    console.log('Servicio HTTP');
  }

  //respuesta tipo string
  httpOptions1 = {
    headers: new HttpHeaders({
      "mimeType": "multipart/form-data",
      "Access-Control-Allow-Origin": "*"
    }),
    withCredentials: false,
    responseType: 'text' as 'json'
  };
  // respuesta tipo json
  httpOptions2 = {
    headers: new HttpHeaders({
      "mimeType": "multipart/form-data",
      "Access-Control-Allow-Origin": "*"
    }),
    withCredentials: false
  };

  mostrarPagina(data: any): Observable<Pagina[]> {
    return this.http.post<Pagina[]>(this.urlAPI + 'mostrarPagina', Utils.getFormData(data), this.httpOptions2);
  }

  modificarPagina(data: any): Observable<any> {
    return this.http.post(this.urlAPI + 'modificarPagina', Utils.getFormData(data), this.httpOptions1);
  }

  eliminarPagina(data: any): Observable<any> {
    return this.http.post(this.urlAPI + 'eliminarPagina', Utils.getFormData(data), this.httpOptions1);
  }

  crearPagina(data: any): Observable<any> {
    return this.http.post(this.urlAPI + 'crearPagina', Utils.getFormData(data), this.httpOptions1);
  }
  

}
