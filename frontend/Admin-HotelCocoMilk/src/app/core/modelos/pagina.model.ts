export interface Pagina {
    id_pagina: number;
    id_tipo_pagina: number;
    descripcion: string;
    imagen: any;
  }

  export class Pagina implements Pagina {

    constructor(public ID: number) {
    };
  
  
  }