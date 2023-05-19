export interface Reserva {
    id_reserva: number,
    id_cliente: string,
    id_habitacion: number,
    fecha: Date,
    fecha_entrada: Date,
    fecha_salida: Date,
    transaccion: number,
    eliminado: boolean
}
export interface Cliente {
    id_cliente: string,
    nombre: string,
    apellido: string,
    correo: string,
    tarjeta: string
}
export interface ReservaCliente {
    fecha: Date,
    id_reserva: number,
    nombre: string,
    apellido: string,
    correo: string,
    tarjeta: string,
    transaccion: number,
    fecha_entrada: Date,
    fecha_salida: Date,
    tipo: string
}
export class Cliente implements Cliente {
    constructor() {
    };
}
export class Reserva implements Reserva {
    constructor() {
    };
}
export class ReservaCliente implements ReservaCliente {
    constructor() {
    };
    asignacion(cliente: Cliente, reserva: Reserva, tipo: string) {
        this.fecha = reserva.fecha;
        this.id_reserva = reserva.id_reserva;
        this.nombre = cliente.nombre;
        this.apellido = cliente.apellido;
        this.correo = cliente.correo;
        this.tarjeta = cliente.tarjeta;
        this.transaccion = reserva.transaccion;
        this.fecha_entrada = reserva.fecha_entrada;
        this.fecha_salida = reserva.fecha_salida;
        this.tipo = tipo;
    };
}