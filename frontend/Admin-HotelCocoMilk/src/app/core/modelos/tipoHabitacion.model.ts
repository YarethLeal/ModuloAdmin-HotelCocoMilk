export interface TipoHabitacion {
    id_tipo_habitacion: number;
    imagen: string;
    tipo: string;
    informacion: string;
    tarifa: number;
  }

export class TipoHabitacion implements TipoHabitacion {
  constructor() {};
}

