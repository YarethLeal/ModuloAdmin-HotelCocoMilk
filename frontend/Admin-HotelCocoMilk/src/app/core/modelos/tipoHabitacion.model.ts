export interface TipoHabitacion {
    id_habitacion: number;
    imagen: string;
    tipo: string;
    informacion: string;
    tarifa: number;
  }

  export class TipoHabitacion implements TipoHabitacion {

    constructor(public id_habitacion: number) {
    };
  
  
  }

