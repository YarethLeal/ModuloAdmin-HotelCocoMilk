export interface Habitacion {
    numero_id : number;
    id_tipo_habitacion: number;
    activa: boolean;
    estado: string;
  }

  export interface HabitacionEstado {
    numero_habitacion : number;
    tipo: string;
    estado: string;
  }

  export class Habitacion implements Habitacion {

    constructor() {
      };


  }
