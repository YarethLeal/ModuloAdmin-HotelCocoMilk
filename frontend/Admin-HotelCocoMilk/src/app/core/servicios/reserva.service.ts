import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs"
import { environment } from "src/environments/environment.prod";
import { Utils } from "../utilidades/util";
import { Cliente, Reserva, ReservaCliente } from "../modelos/reservaCliente.model"

@Injectable({
    providedIn: 'root'
})

export class ReservaService {
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

    listarReserva(): Observable<Reserva[]> {
        return this.http.get<Reserva[]>(this.urlModulo + 'listarReservas', this.httpOptions2);
    }
    listarClientes(): Observable<Cliente[]> {
        return this.http.get<Cliente[]>(this.urlModulo + 'listarCliente', this.httpOptions2);
    }
    listarReservaCliente(): Observable<ReservaCliente[]> {
        return this.http.get<ReservaCliente[]>(this.urlModulo + 'listarReservaCliente', this.httpOptions2);
    }
    eliminarReserva(data: any): Observable<any> {
        return this.http.post(this.urlModulo + 'eliminarReserva', Utils.getFormData(data), this.httpOptions1);
    }

}