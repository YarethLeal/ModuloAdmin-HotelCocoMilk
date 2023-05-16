import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.prod";
import { Temporadas } from "../modelos/temporadas.model";
import { Observable } from "rxjs";
import { Utils } from "../utilidades/util";


@Injectable({
  providedIn: 'root'
})

export class TemporadasService {
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

  listarTemporadas(): Observable<Temporadas[]> {
    return this.http.get<Temporadas[]>(this.urlModulo + "listarTemporadas", this.httpOptions2
    );
  }

  registartemporadas(data: Temporadas): Observable<any> {
    return this.http.post(this.urlModulo + 'registartemporadas', Utils.getFormData(data), this.httpOptions1);
  }

}