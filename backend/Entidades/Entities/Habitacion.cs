using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entidades.Entities
{
    internal class Habitacion
    {
        public int? tipoId { get; set; }
        public int? numeroId { get; set; }
        public bool? activa { get; set; }
        public string? estado { get; set; }
    }
}
