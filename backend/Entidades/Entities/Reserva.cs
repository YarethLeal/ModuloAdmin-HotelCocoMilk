using System.ComponentModel.DataAnnotations;

namespace Entidades.Entities
{
    public class Reserva
    {
        [Key]
        public int? id_reserva { get; set; }
        public string? id_cliente { get; set; }
        public int? id_habitacion { get; set; }
        public DateTime fecha { get; set; }
        public DateTime fecha_entrada { get; set; }
        public DateTime fecha_salida { get; set; }
        public int? transaccion { get; set; }
        public bool? eliminado { get; set; }
    }

    public class ReservacionDisponible
    {
        [Key]
        public int? numero_habitacion { get; set; }
        public int? id_tipo_habitacion { get; set; }
        public string? tipo { get; set; }
        public string? informacion { get; set; }
        public string? imagen { get; set; }
        public int? tarifa { get; set; }
    }

    public class ReservaCliente
    {
        [Key]
        public DateTime? fecha { get; set; }
        public int? id_reserva { get; set; }
        public string? nombre { get; set; }
        public string? apellido { get; set; }
        public string? correo { get; set; }
        public string? tarjeta { get; set; }
        public int? transaccion { get; set; }
        public DateTime? fecha_entrada { get; set; }
        public DateTime? fecha_salida { get; set; }
        public string? tipo { get; set; }
    }
}
