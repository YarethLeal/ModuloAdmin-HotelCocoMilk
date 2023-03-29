using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entidades.Entities
{
    public class Habitacion
    {
        [Key]
        public int? tipoId { get; set; }
        public int? numeroId { get; set; }
        public bool? activa { get; set; }
        public string? estado { get; set; }
    }
}
