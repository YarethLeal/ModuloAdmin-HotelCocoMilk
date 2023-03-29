using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entidades.Entities
{
    public class TipoHabitacion
    {
        public int? id { get; set; }
        public byte[]? imagen { get; set; }
        public string? tipo { get; set; }
        public string? informacion { get; set; }
        public int? tarifa { get; set; }

    }
}
