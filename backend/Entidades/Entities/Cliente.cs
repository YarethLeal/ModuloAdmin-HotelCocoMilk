using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entidades.Entities
{
    internal class Cliente
    {
        public string? id { get; set; }
        public string? nombre { get; set; }
        public string? apellidos { get; set; }
        public string? correo { get; set; }
        public string? tarjeta { get; set; }
    }
}
