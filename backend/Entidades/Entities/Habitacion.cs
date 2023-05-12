using System.ComponentModel.DataAnnotations;

namespace Entidades.Entities
{
    public class Habitacion
    {
        [Key]
        public int? numero_id { get; set; }
        public int? id_tipo_habitacion { get; set; }
        public bool? activa { get; set; }
        public string? estado { get; set; }
    }

    public class HabitacionEstado
    {
        [Key]
        public int? numero_habitacion { get; set; }
        public string? tipo { get; set; }
        public string? estado { get; set; }
    }
}
