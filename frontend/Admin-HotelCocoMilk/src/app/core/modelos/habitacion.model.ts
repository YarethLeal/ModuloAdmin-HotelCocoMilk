export interface Habitacion {
    numero_id : number;
    id_tipo_habitacion: number;
    activa: boolean;
    estado: string;
  }

export class Habitacion implements Habitacion {
  constructor() {};
}

export interface HabitacionEstado {
  numero_habitacion : number;
  tipo: string;
  estado: string;
}

export interface HabitacionDisponible {
  fechaLlegada: Date,
  fechaSalida: Date,
  tipoHabitacion: string
}

export class HabitacionDisponible implements HabitacionDisponible {
  constructor(fechaLlegada: any, fechaSalida: any, tipoHabitacion: string) 
  {
    this.fechaLlegada = fechaLlegada;
    this.fechaSalida = fechaSalida;
    this.tipoHabitacion = tipoHabitacion;
  };
}

