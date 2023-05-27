export interface Publicidad {
    id_publicidad: number;
    imagen: any;
    destino: string;
    eliminado: boolean;
  }
  export class Publicidad implements Publicidad {
    constructor(public imagen: any, public destino: string, public eliminado: boolean) {};
  }