export interface Temporadas {
    id_temporada: number;
    id_tipo_habitacion: number;
    fecha_inicio: any;
    fecha_final: any;
    oferta: number;
  }
  
  export class Temporadas implements Temporadas {
  
    constructor(public id_tipo_habitacion: number, public fecha_inicio: any, public fecha_final: any, public oferta:number) {
  
    };

}