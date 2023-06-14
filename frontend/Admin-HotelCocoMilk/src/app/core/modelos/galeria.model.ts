export interface Galeria {
    id: number;
    nombre: string;
    imagen: any;
  }

  export class Galeria implements Galeria {

    constructor(public nombre: string,public imagen: any) {
    };
  
  
  }