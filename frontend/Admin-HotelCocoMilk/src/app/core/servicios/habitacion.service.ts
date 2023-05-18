import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Login } from "../modelos/login.model";
import { environment } from "src/environments/environment.prod";
import { Utils } from "../utilidades/util";
import { Habitacion, HabitacionDisponible, HabitacionEstado} from "../modelos/habitacion.model";
import { ReservaDisponible } from "../modelos/reservaDisponible";

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

  listarHabitaciones(): Observable<Habitacion[]> {
    return this.http.get<Habitacion[]>(this.urlModulo + "listarHabitaciones", this.httpOptions2);
  }

  registrarHabitacion(data: Habitacion): Observable<any> {
    return this.http.post(this.urlModulo + 'registrarHabitacion', Utils.getFormData(data), this.httpOptions1);
  }

  modificarHabitacion(data: Habitacion): Observable<any> {
    return this.http.post(this.urlModulo + 'modificarHabitacion', Utils.getFormData(data), this.httpOptions1);
  }

  eliminarHabitacion(data: Habitacion): Observable<any> {
    return this.http.post(this.urlModulo + 'eliminarHabitacion', Utils.getFormData(data), this.httpOptions1);
  }

  disponibilidadHabitaciones(data: HabitacionDisponible): Observable<ReservaDisponible[]> {
    return this.http.post<ReservaDisponible[]>(this.urlModulo + 'disponibilidadHabitaciones', Utils.getFormData(data), this.httpOptions2);
  }
}
