using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entidades.Entities
{
    internal class Publicidad
    {
        public string? id { get; set; }
        public byte[]? imagen { get; set; }
        public string? destino { get; set; }
        public bool? eliminado { get; set; }
    }
}
