using System.ComponentModel.DataAnnotations;

namespace Entidades.Entities
{
    public class Temporadas
    {
        [Key]
        public int id_temporada { get; set; }
        public int id_tipo_habitacion { get; set; }
        public DateTime fecha_inicio { get; set; }
        public DateTime fecha_final { get; set; }
        public int oferta { get; set; }
    }
}
