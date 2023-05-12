import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Login } from "../modelos/login.model";
import { environment } from "src/environments/environment.prod";
import { Utils } from "../utilidades/util";
import { HabitacionEstado} from "../modelos/habitacion.model";

@Injectable({
  providedIn: 'root'
})

export class HabitacionService {
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

  listarEstadoHabitaciones(): Observable<HabitacionEstado> {
    return this.http.get<HabitacionEstado>(this.urlModulo + 'listarEstadoHabitaciones', this.httpOptions2);
  }

  actualizarEstados(): Observable<any> {
    return this.http.get(this.urlModulo + 'actualizarEstados', this.httpOptions1);
  }


} 