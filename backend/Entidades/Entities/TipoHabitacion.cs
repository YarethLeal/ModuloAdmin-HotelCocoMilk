using System.ComponentModel.DataAnnotations;

namespace Entidades.Entities
{
    public class TipoHabitacion
    {
        [Key]
        public int? id_tipo_habitacion { get; set; }
        public string? tipo { get; set; }
        public string? informacion { get; set; }
        public string? imagen { get; set; }
        public int? tarifa { get; set; }
    }
}
