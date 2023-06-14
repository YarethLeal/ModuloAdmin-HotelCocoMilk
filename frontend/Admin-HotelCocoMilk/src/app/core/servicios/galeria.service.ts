import { Observable } from "rxjs";
import { Galeria } from "../modelos/galeria.model";
import { Utils } from "../utilidades/util";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class GaleriaService {
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


    listarGaleria(): Observable<Galeria[]> {
        return this.http.get<Galeria[]>(this.urlModulo + "listarGaleria", this.httpOptions2);
    }

    registrarImagenGaleria(data: Galeria): Observable<any> {
        return this.http.post(this.urlModulo + 'registrarImagenGaleria', Utils.getFormData(data), this.httpOptions1);
    }


    eliminarImagenGaleria(data: Galeria): Observable<any> {
        return this.http.post(this.urlModulo + 'eliminarImagenGaleria', Utils.getFormData(data), this.httpOptions1);
    }
}
