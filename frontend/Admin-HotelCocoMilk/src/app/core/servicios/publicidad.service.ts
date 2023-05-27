import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.prod";
import { Observable } from "rxjs";
import { Utils } from "../utilidades/util";
import { Publicidad } from "../modelos/publicidad.model";

@Injectable({
  providedIn: 'root'
})

export class PublicidadService {
  urlModulo: string = environment.urlAPI;
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
    })/*,
      withCredentials: true*/
  };

  listarPublicidad(): Observable<Publicidad[]> {
    return this.http.get<Publicidad[]>(this.urlModulo + "listarPublicidad", this.httpOptions2
    );
  }

  registarPublicidad(data: Publicidad): Observable<any> {
    return this.http.post(this.urlModulo + 'registarPublicidad', Utils.getFormData(data), this.httpOptions1);
  }

  modificarPublicidad(data: Publicidad): Observable<any> {
    return this.http.post(this.urlModulo + 'modificarPublicidad', Utils.getFormData(data), this.httpOptions1);
  }
  
  eliminarPublicidad(data: Publicidad): Observable<any> {
    return this.http.post(this.urlModulo + 'eliminarPublicidad', Utils.getFormData(data), this.httpOptions1);
  }
}