export interface ReservaDisponible {
    numero_habitacion: number,
    id_tipo_habitacion: string,
    tipo: string,
    informacion: string,
    imagen: string,
    tarifa: number
}

export class ReservaDisponible implements ReservaDisponible {
    constructor(numero_habitacion: number, id_tipo_habitacion: string, tipo: string, informacion: string,
        imagen: string, tarifa: number) {
        this.numero_habitacion=numero_habitacion,
        this.id_tipo_habitacion=id_tipo_habitacion,
        this.tipo=tipo,
        this.informacion=informacion,
        this.imagen=imagen,
        this.tarifa=tarifa 
    };
}